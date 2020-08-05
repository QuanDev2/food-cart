var path = require("path");
var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("./dbcon");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;

var util = require("util");
mysql.pool.query = util.promisify(mysql.pool.query);
// base url for images
const imgBaseUrl = "https://food-cart-images.s3-us-west-2.amazonaws.com/";

var allDishData = require("./data/postData");
// set up handlebars and view engine
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("mysql", mysql);
// serve static files from public/

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../public/css")));
app.use(express.static(path.join(__dirname, "../public/js")));
app.use(express.static(path.join(__dirname, "../public/src/img")));

/***************************
 * Serve the home page
 */

app.get("/", (req, res) => {
  let query =
    "select post.postID ,dish.dishName, seller.sellerName, post.price from dish " +
    "join dishPost using (dishID) " +
    "join post using (postID) " +
    "join seller using (sellerID)";

  mysql.pool.query(query, (err, posts) => {
    if (err) throw err;

    // get all customer names
    const customerQuery = `SELECT customerName, customerID FROM customer`;

    mysql.pool.query(customerQuery, (err, customerInfo) => {
      if (err) throw err;
      res.render("homepage", {
        dishes: posts,
        allCustomers: customerInfo,
      });
    });
  });
});

/*****************************
 * Handle new post from home page
 */

app.post("/new-order", async (req, res) => {
  let orderTotal = 0;
  const orderList = req.body.orders;

  // sum up the total
  orderList.forEach((element) => {
    orderTotal += parseFloat(element.subtotal);
  });
  const insertOrderQuery =
    `INSERT INTO customerOrder (customerID, total) ` +
    `VALUES ((SELECT customerID FROM customer WHERE customerName = '${req.body.customerName}'), ${orderTotal})`;
  try {
    const result = await mysql.pool.query(insertOrderQuery);
  } catch (err) {
    throw err;
  }

  // run query to get the latest orderID
  const latestOrderIDQuery = `select orderID from customerOrder order by orderID desc limit 1`;

  // insert into orderPost
  for (let i = 0; i < orderList.length; i++) {
    const postID = parseInt(orderList[i].postID);
    const quantity = parseInt(orderList[i].quantity);
    const subtotal = parseFloat(orderList[i].subtotal);
    const insertOrderPostQuery =
      `INSERT INTO orderPost (postID, orderID, quantity, subtotal) VALUES(` +
      `${postID} ,(${latestOrderIDQuery}), ${quantity}, ${subtotal})`;
    try {
      await mysql.pool.query(insertOrderPostQuery);
    } catch (err) {
      throw err;
    }
  }
  res.send("OK");
});

app.post("/create-dish", (req, res) => {
  // check if dish already exists

  let existQuery = `SELECT EXISTS(SELECT * from dish WHERE dishName='${req.body.dishName}')`;
  mysql.pool.query(existQuery, (err, results) => {
    if (err) throw err;
    const dishExists = Object.values(results[0]);
    if (dishExists == true) {
      // if yes, send error 403
      res.sendStatus("403");
    } else {
      // if no, send OK
      let query = `INSERT INTO dish (dishName) VALUES ('${req.body.dishName}');`;
      mysql.pool.query(query, (err, results) => {
        if (err) throw err;
      });
      res.send("OK");
    }
  });
});

app.post("/sign-up", (req, res) => {
  let query =
    `INSERT INTO ${req.body.accountType} (username, ${req.body.accountType}Name, password, email, phoneNumber) ` +
    `VALUES ("${req.body.username}", "${req.body.fullName}", "${req.body.password}", "${req.body.email}", "${req.body.phoneNumber}") ;`;
  mysql.pool.query(query, (err, results) => {
    if (err) throw err;
    res.send("OK");
  });
});

app.post("/manage-post-delete", (req, res) => {
  const query = `DELETE FROM post WHERE postID = ${req.body.postID}`;
  mysql.pool.query(query, (err, results) => {
    if (err) throw err;
    res.send("OK");
  });
});

app.post("/manage-post-update", (req, res) => {
  const query = `UPDATE post SET price = ${req.body.price} WHERE postID = ${req.body.postID}`;
  mysql.pool.query(query, (err, results) => {
    if (err) throw err;
    res.send("OK");
  });
});

app.get("/sell-dish", (req, res) => {
  let query = `SELECT sellerName from seller`;
  let query2 = `SELECT dishName from dish`;
  mysql.pool.query(query, (err, sellerNames) => {
    if (err) throw err;

    mysql.pool.query(query2, (err, dishNames) => {
      if (err) throw err;
      res.render("sellDish", {
        allSellers: sellerNames,
        allDishes: dishNames,
      });
    });
  });
});

app.post("/create-post", (req, res) => {
  const sellerID = 0;
  mysql.pool.query(
    `SELECT sellerID FROM seller WHERE sellerName = '${req.body.sellerName}'`,
    (err, results) => {
      if (err) throw err;
      var newPost = {
        sellerID: results[0].sellerID,
        price: req.body.price,
      };

      mysql.pool.query("INSERT INTO post SET ?", newPost, (err, results) => {
        if (err) throw err;
        mysql.pool.query(
          "SELECT postID FROM post ORDER BY postID DESC LIMIT 1;",
          (err, results) => {
            if (err) throw err;

            const newPostID = results[0].postID;

            // query to insert dishPost
            mysql.pool.query(
              `INSERT INTO dishPost (dishID, postID)
              VALUES
              ((SELECT dishID FROM dish WHERE dishName = '${req.body.dishName}'), (select postID from post order by postID desc limit 1));`,
              (err, results) => {
                if (err) throw err;
                res.send("OK");
              }
            );
          }
        );
      });
    }
  );
});

app.get("/create-dish", (req, res) => {
  res.render("createDish");
});

app.get("/sign-up", (req, res) => {
  res.render("signUp");
});

app.get("/manage-posts", (req, res) => {
  let query =
    "SELECT post.postID, seller.sellerName, dish.dishName, post.price FROM post " +
    "JOIN seller USING (sellerID) " +
    "JOIN dishPost USING (postID) " +
    "JOIN dish USING (dishID) " +
    "ORDER BY seller.sellerName; ";
  mysql.pool.query(query, (err, results) => {
    if (err) throw err;

    res.render("managePosts", {
      allPosts: results,
    });
  });
});

app.get("/admin-portal", async (req, res) => {
  const orderQuery =
    `SELECT customerOrder.orderID, dish.dishName, orderPost.quantity, customer.customerName, orderPost.subtotal ` +
    `FROM orderPost ` +
    `JOIN customerOrder USING (orderID) ` +
    `JOIN customer USING (customerID) ` +
    `JOIN post USING (postID) ` +
    `JOIN dishPost USING (postID) ` +
    `JOIN dish USING (dishID) ` +
    `ORDER BY orderID;`;

  const customerQuery = `SELECT username, customerName, email, phoneNumber FROM customer ORDER BY customerID`;

  const sellerQuery = `SELECT username, sellerName, email, phoneNumber FROM seller ORDER BY sellerID`;
  try {
    const orderResults = await mysql.pool.query(orderQuery);
    const customerResults = await mysql.pool.query(customerQuery);
    const sellerResults = await mysql.pool.query(sellerQuery);
    res.render("adminPortal", {
      orderAdminItems: orderResults,
      customerAdminItems: customerResults,
      sellerAdminItems: sellerResults,
    });
  } catch (err) {
    throw err;
  }
});

app.listen(port, () => {
  console.log("server is listening on port ", port);
});
