var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var mysql = require('./dbcon');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

// base url for images
const imgBaseUrl = 'https://food-cart-images.s3-us-west-2.amazonaws.com/';

var allDishData = require('./data/postData');
// set up handlebars and view engine
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main'
  })
);
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('mysql', mysql);
// serve static files from public/

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../public/css')));
app.use(express.static(path.join(__dirname, '../public/js')));
app.use(express.static(path.join(__dirname, '../public/src/img')));
// serve the landing page route
app.get('/', (req, res) => {
  let query =
    'select dish.dishName, seller.sellerName, post.price, post.quantity from dish ' +
    'join dishPost using (dishID) ' +
    'join post using (postID) ' +
    'join seller using (sellerID)';

  mysql.pool.query(query, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.render('homepage', {
      dishes: results
    });
  });
});

app.post('/new-order', (req, res) => {
  console.log(req.body.orderList);
  res.send('OK');
});

app.post('/create-dish', (req, res) => {
  console.log(req.body);
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

app.post('/sign-up', (req, res) => {
  console.log(req.body);
  let query =
    `INSERT INTO ${req.body.accountType} (username, ${req.body.accountType}Name, password, email, phoneNumber) ` +
    `VALUES ("${req.body.username}", "${req.body.fullName}", "${req.body.password}", "${req.body.email}", "${req.body.phoneNumber}") ;`;

  mysql.pool.query(query, (err, results) => {
    if (err) throw err;
    res.send('OK');
  });
});
app.post('/create-post', (req, res) => {
  console.log(req.body);
  res.send('OK');
});

app.get('/sell-dish', (req, res) => {
  let query = `SELECT sellerName from seller`;
  let query2 = `SELECT dishName from dish`;
  mysql.pool.query(query, (err, sellerNames) => {
    if (err) throw err;
    console.log(sellerNames);

    mysql.pool.query(query2, (err, dishNames) => {
      if (err) throw err;
      console.log(dishNames);
      res.render('sellDish', {
        allSellers: sellerNames,
        allDishes: dishNames
      });
    });
  });
});

app.get('/create-dish', (req, res) => {
  res.render('createDish');
});

app.get('/sign-up', (req, res) => {
  res.render('signUp');
});

app.get('/manage-posts', (req, res) => {
  res.render('managePosts');
});

app.get('/admin-portal', (req, res) => {
  res.render('adminPortal');
});

app.listen(port, () => {
  console.log('server is listening on port ', port);
});

// testing db
app.get('/viewdb', (req, res) => {
  // let query =
  //   'CREATE TABLE client (id INT(11) AUTO_INCREMENT NOT NULL ,first_name VARCHAR(255) NOT NULL,	last_name VARCHAR(255) NOT NULL,	dob DATE NOT NULL,	PRIMARY KEY (id),	CONSTRAINT full_name UNIQUE (first_name, last_name));';
  let query2 = 'select * from customer';
  mysql.pool.query(query2, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send('database created successfully!');
  });
});
