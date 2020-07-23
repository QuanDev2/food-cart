var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var mysql = require('./dbcon');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

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
  res.render('homepage', {
    dishes: allDishData
    // orderItems: orderList,
  });
});

app.post('/sign-up', (req, res) => {
  console.log(req.body);
  if (req.body.fullName !== '') {
    res.send('OK');
  } else {
    res.status('403').send('post failed');
  }
});

// testing db
// app.get('/createdb', (req, res) => {
//   let query =
//     'CREATE TABLE client (id INT(11) AUTO_INCREMENT NOT NULL ,first_name VARCHAR(255) NOT NULL,	last_name VARCHAR(255) NOT NULL,	dob DATE NOT NULL,	PRIMARY KEY (id),	CONSTRAINT full_name UNIQUE (first_name, last_name));';
//   let query2 = 'select * from client';
//   mysql.pool.query(query2, (err, results, fields) => {
//     if (err) throw err;
//     // console.log(results);

//     res.send('database created successfully!');
//   });
// });

app.get('/sell-dish', (req, res) => {
  res.render('sellDish');
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
