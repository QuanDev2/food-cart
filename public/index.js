$(document).ready(function () {
  $('.ui.dropdown').dropdown();
});

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
var loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', addToCart);
