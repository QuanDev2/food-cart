// make dropdowns work
$(document).ready(function () {
  $('.ui.dropdown').dropdown();
});

// get info of all posts
let numPosts = document.getElementsByClassName('dish').length;

function insertOrderItem(dishName, price, quantity) {
  var orderItemContext = {
    dishName: dishName,
    price: price,
    quantity: quantity
  };
  var orderItemHTML = Handlebars.templates.orderItem(orderItemContext);
  var orderContainer = document.querySelector('.order-items');
  orderContainer.insertAdjacentHTML('beforeend', orderItemHTML);
}

function addToCart() {
  insertOrderItem('Pho', '12', '1');
}

// Event listeners
window.addEventListener('DOMContentLoaded', function () {
  var orderList = [];
  // test adding item to order
  var loginBtn = document.getElementById('login-btn');
  loginBtn.addEventListener('click', addToCart);

  // add event listener to every add-to-card button
  for (let i = 0; i < numPosts; i++) {
    cartBtn = document.getElementsByClassName('cart-btn')[i];

    cartBtn.addEventListener('click', event => {
      let dishElement = event.target.parentNode.parentNode;
      let dishName = dishElement.getElementsByClassName('dish-name')[0]
        .textContent;
      let dishPrice = dishElement.getElementsByClassName('dish-price')[0]
        .textContent;
      let imgUrl = dishElement.getElementsByTagName('img')[0].src;
      let qty = dishElement
        .getElementsByClassName('qty-dropdown')[0]
        .getElementsByClassName('text')[0].textContent;
      let cartObject = {
        dishName: dishName,
        price: dishPrice,
        quantity: qty,
        imgUrl: imgUrl
      };
      axios
        .get('/add-to-cart', {
          params: {
            dishName: dishName,
            price: dishPrice,
            quantity: qty,
            imgUrl: imgUrl
          }
        })
        .then(res => {
          location.reload();
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  }
});
