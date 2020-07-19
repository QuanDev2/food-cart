var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;

var allDishData = require('./dishData');

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

// serve the landing page route
app.get('/', (req, res) => {
  res.render('homepage', {
    dishes: allDishData
    // orderItem
    // orderItemExists: false
  });
});

app.listen(port, () => {
  console.log('server is listening on port ', port);
});
