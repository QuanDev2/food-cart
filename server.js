var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;

var allDishData = require('./dishData');
var orderList = [];
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
app.use(express.static(path.join(__dirname, 'public/src/img')));

app.get('/add-to-cart', (req, res) => {
  orderList.push(req.query);
  console.log(orderList);
  res.render('homepage', {
    orderItems: orderList,
    dishes: allDishData,
    // orderItemExists: true,
    total: '20'
  });
});
// serve the landing page route
app.get('/', (req, res) => {
  res.render('homepage', {
    dishes: allDishData,
    orderItems: orderList,
    total: '40'
  });
});

app.listen(port, () => {
  console.log('server is listening on port ', port);
});
