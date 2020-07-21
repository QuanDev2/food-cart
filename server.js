var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
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

// serve static files from public/

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'public/js')));
app.use(express.static(path.join(__dirname, 'public/src/img')));
// serve the landing page route
app.get('/', (req, res) => {
  res.render('homepage', {
    dishes: allDishData
    // orderItems: orderList,
  });
});

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
