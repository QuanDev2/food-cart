// make dropdowns work
$(document).ready(function () {
  $('.ui.dropdown').dropdown();
});

$('.ui.checkbox').checkbox();

// get info of all posts
let numPosts = document.getElementsByClassName('dish').length;

function insertOrderItem(dishName, price, quantity, imgUrl) {
  var orderItemContext = {
    dishName: dishName,
    price: price,
    quantity: quantity,
    imgUrl: imgUrl
  };
  var orderItemHTML = Handlebars.templates.orderItem(orderItemContext);
  var orderContainer = document.querySelector('.order-items');
  orderContainer.insertAdjacentHTML('beforeend', orderItemHTML);
}

function updateTotal(total) {
  // remove total before inserting

  // insert new total
  totalHtml = document.getElementById('total');
  totalHtml.innerHTML = total;
}

// Event listeners
window.addEventListener('DOMContentLoaded', function () {
  var total = 0.0;
  var orderList = [];
  // test adding item to order
  var loginBtn = document.getElementById('login-btn');

  // add event listener to every add-to-card button

  for (let i = 0; i < numPosts; i++) {
    cartBtn = document.getElementsByClassName('cart-btn')[i];
    cartBtn.addEventListener('click', event => {
      let dishElement = event.target.parentNode.parentNode;
      let dishName = dishElement.getElementsByClassName('dish-name')[0]
        .textContent;
      let dishPrice = parseFloat(
        dishElement
          .getElementsByClassName('dish-price')[0]
          .textContent.substr(1)
      );
      let imgUrl = dishElement.getElementsByTagName('img')[0].src;
      let qty = parseFloat(
        dishElement
          .getElementsByClassName('qty-dropdown')[0]
          .getElementsByClassName('text')[0].textContent
      );
      let lineTotal = dishPrice * qty;
      total += lineTotal;
      console.log(total);
      insertOrderItem(dishName, lineTotal, qty, imgUrl);
      updateTotal(total);
    });
  }
});
