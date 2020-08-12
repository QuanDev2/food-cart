const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('./dbcon');
const multer = require('multer');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const util = require('util');
mysql.pool.query = util.promisify(mysql.pool.query);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*************************************
 * set up file upload storage engine
 */

const upload = require('./file-upload').single('image');

// set up handlebars and view engine
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main'
  })
);

/***************************
 * Set up handlebars engine
 */
app.set('view engine', 'handlebars');

/****************************
 * Set up database engine
 */
app.set('mysql', mysql);

/******************************
 * Serve static files
 */
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../public/css')));
app.use(express.static(path.join(__dirname, '../public/js')));
app.use(express.static(path.join(__dirname, '../public/assets/img')));

/******************************
 * Testing image upload api
 */

app.post('/api/image', (req, res) => {
  upload(req, res, err => {
    if (err) throw err;
    return res.json({ imageUrl: req.file.location });
  });
});

/***************************
 * Serve the home page
 */

app.get('/', (req, res) => {
  let query =
    'select post.postID ,dish.dishName, seller.sellerName, post.price, post.image from dish ' +
    'join dishPost using (dishID) ' +
    'join post using (postID) ' +
    'join seller using (sellerID)';

  mysql.pool.query(query, (err, posts) => {
    if (err) throw err;

    // get all customer names
    const customerQuery = `SELECT customerName, customerID FROM customer`;

    mysql.pool.query(customerQuery, (err, customerInfo) => {
      if (err) throw err;
      res.render('homepage', {
        dishes: posts,
        allCustomers: customerInfo,
        showSearchBox: true
      });
    });
  });
});

/**************************************
 * Serve create new dish page
 */

app.get('/create-dish', (req, res) => {
  res.render('createDish');
});

/**********************************
 * Serve sign up page
 */

app.get('/sign-up', (req, res) => {
  res.render('signUp');
});

/*****************************
 * Serve manage posts page
 */

app.get('/manage-posts', (req, res) => {
  let query =
    'SELECT post.postID, seller.sellerName, dish.dishName, post.price FROM post ' +
    'JOIN seller USING (sellerID) ' +
    'JOIN dishPost USING (postID) ' +
    'JOIN dish USING (dishID) ' +
    'ORDER BY seller.sellerName; ';
  mysql.pool.query(query, (err, results) => {
    if (err) throw err;
    res.render('managePosts', {
      allPosts: results
    });
  });
});

/******************************
 * Serve admin portal page
 */

app.get('/admin-portal', async (req, res) => {
  const orderQuery =
    `SELECT customerOrder.orderID, customer.customerName, customerOrder.total ` +
    `FROM customerOrder ` +
    `JOIN customer USING (customerID) ` +
    `ORDER BY customerOrder.orderID`;

  const customerQuery = `SELECT username, customerName, email, phoneNumber FROM customer ORDER BY customerID`;

  const sellerQuery = `SELECT username, sellerName, email, phoneNumber FROM seller ORDER BY sellerID`;
  try {
    const orderResults = await mysql.pool.query(orderQuery);

    const customerResults = await mysql.pool.query(customerQuery);
    const sellerResults = await mysql.pool.query(sellerQuery);
    res.render('adminPortal', {
      customerOrders: orderResults,
      customerAdminItems: customerResults,
      sellerAdminItems: sellerResults
    });
  } catch (err) {
    throw err;
  }
});

/************************************
 * Serve serve sell dish / new post
 */

app.get('/sell-dish', (req, res) => {
  let query = `SELECT sellerName from seller`;
  let query2 = `SELECT dishName from dish`;
  mysql.pool.query(query, (err, sellerNames) => {
    if (err) throw err;

    mysql.pool.query(query2, (err, dishNames) => {
      if (err) throw err;
      res.render('sellDish', {
        allSellers: sellerNames,
        allDishes: dishNames
      });
    });
  });
});

/**************************************
 * Serve order details route
 */

app.get('/order-details', async (req, res) => {
  const orderID = parseInt(req.query.orderID);
  const orderDetailQuery =
    `SELECT customerOrder.orderID, dish.dishName, orderPost.quantity, customer.customerName, post.price ` +
    `FROM orderPost ` +
    `JOIN customerOrder USING (orderID) ` +
    `JOIN customer USING (customerID) ` +
    `JOIN post USING (postID) ` +
    `JOIN dishPost USING (postID) ` +
    `JOIN dish USING (dishID) ` +
    `WHERE orderID = ${orderID};`;

  try {
    const orderDetailsResults = await mysql.pool.query(orderDetailQuery);

    // loop thru result array and calculate subtotal
    orderDetailsResults.forEach(element => {
      const subtotal = element.price * element.quantity;
      element.subtotal = subtotal;
    });

    res.render('orderDetails', {
      orderDetails: orderDetailsResults
    });
  } catch (err) {
    if (err) throw err;
  }
});
// app.post('/order-details', async (req, res) => {
//   const orderID = parseInt(req.body.orderID);

//   const orderDetailQuery =
//     `SELECT customerOrder.orderID, dish.dishName, orderPost.quantity, customer.customerName ` +
//     `FROM orderPost ` +
//     `JOIN customerOrder USING (orderID) ` +
//     `JOIN customer USING (customerID) ` +
//     `JOIN post USING (postID) ` +
//     `JOIN dishPost USING (postID) ` +
//     `JOIN dish USING (dishID) ` +
//     `WHERE orderID = ${orderID};`;
//   try {
//     const orderDetailsResults = await mysql.pool.query(orderDetailQuery);
//     console.log(orderDetailsResults);
//     res.render('orderDetails', {
//       orderDetails: orderDetailsResults
//     });
//   } catch (err) {
//     if (err) throw err;
//   }
// });

/********************************
 * Handle new post from home page
 */

app.post('/new-order', async (req, res) => {
  let orderTotal = 0;
  const orderList = req.body.orders;

  // sum up the total
  orderList.forEach(element => {
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
    // const subtotal = parseFloat(orderList[i].subtotal);
    const insertOrderPostQuery =
      `INSERT INTO orderPost (postID, orderID, quantity) VALUES(` +
      `${postID} ,(${latestOrderIDQuery}), ${quantity})`;
    try {
      await mysql.pool.query(insertOrderPostQuery);
    } catch (err) {
      throw err;
    }
  }
  res.send('OK');
});

/*********************************
 * Handle create a new dish route
 */

app.post('/create-dish', (req, res) => {
  // check if dish already exists

  let existQuery = `SELECT EXISTS(SELECT * from dish WHERE dishName='${req.body.dishName}')`;
  mysql.pool.query(existQuery, (err, results) => {
    if (err) throw err;
    const dishExists = Object.values(results[0]);
    if (dishExists == true) {
      // if yes, send error 403
      res.sendStatus('403');
    } else {
      // if no, send OK
      let query = `INSERT INTO dish (dishName) VALUES ('${req.body.dishName}');`;
      mysql.pool.query(query, (err, results) => {
        if (err) throw err;
      });
      res.send('OK');
    }
  });
});

/***************************
 * Handle new sign up
 */

app.post('/sign-up', (req, res) => {
  let query =
    `INSERT INTO ${req.body.accountType} (username, ${req.body.accountType}Name, password, email, phoneNumber) ` +
    `VALUES ("${req.body.username}", "${req.body.fullName}", "${req.body.password}", "${req.body.email}", "${req.body.phoneNumber}") ;`;
  mysql.pool.query(query, (err, results) => {
    if (err) throw err;
    res.send('OK');
  });
});

/********************************************
 * Handle delete post from manage post page
 */

app.post('/manage-post-delete', (req, res) => {
  const query = `DELETE FROM post WHERE postID = ${req.body.postID}`;
  mysql.pool.query(query, (err, results) => {
    if (err) throw err;
    res.send('OK');
  });
});

/*********************************************
 * Handle update post from manage post page
 */

app.post('/manage-post-update', (req, res) => {
  const query = `UPDATE post SET price = ${req.body.price} WHERE postID = ${req.body.postID}`;
  mysql.pool.query(query, (err, results) => {
    if (err) throw err;
    res.send('OK');
  });
});

/*****************************************
 * Handle create a new post
 */

app.post('/create-post', (req, res) => {
  // handle image upload
  upload(req, res, async err => {
    if (err) {
      throw err;
    }
    try {
      const sellerIDResults = await mysql.pool.query(
        `SELECT sellerID FROM seller WHERE sellerName = '${req.body.sellerName}'`
      );
      var newPost = {
        sellerID: sellerIDResults[0].sellerID,
        price: req.body.price,
        image: req.file.location
      };
      const insertPostResults = await mysql.pool.query(
        'INSERT INTO post SET ?',
        newPost
      );
      // const newPostID = await mysql.pool.query(
      //   'SELECT postID FROM post ORDER BY postID DESC LIMIT 1;')[0].postID;
      // const newPostID = postIDResult[0].postID;
      const insertDishPostResults = await mysql.pool.query(
        `INSERT INTO dishPost (dishID, postID)
        VALUES
        ((SELECT dishID FROM dish WHERE dishName = '${req.body.dishName}'), (select postID from post order by postID desc limit 1));`
      );
      res.send('OK');
    } catch (err) {
      throw err;
    }
  });
});

app.listen(port, () => {
  console.log('server is listening on port ', port);
});
