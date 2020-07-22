// make dropdowns work
$(document).ready(function () {
  $('.ui.dropdown').dropdown();
});

$('.ui.checkbox').checkbox();

$('.ui .item').on('click', function () {
  $('.ui .item').removeClass('active');
  $(this).addClass('active');
});

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
// let ordersTable = document.getElementById('orders-table');
// let sellersTable = document.getElementById('sellers-table');
// let customersTable = document.getElementById('customers-table');
// function showOrders(){
//   ordersTable.style.display = 'block';
//   sellersTable.style.display = 'none';
//   customersTable.style.display = 'none';
// }
// function showSellers(){
//   sellersTable.style.display = 'block';
//   ordersTable.style.display = 'none';
//   customersTable.style.display = 'none';
// }
// function showCustomers(){
//   customersTable.style.display = 'block';
//   sellersTable.style.display = 'none';
//   ordersTable.style.display = 'none';
// }

// Event listeners
window.addEventListener('DOMContentLoaded', function () {
  var total = 0.0;
  var orderList = [];

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
      // show error if user hasn't chosen quantity

      let qty = parseFloat(
        dishElement
          .getElementsByClassName('qty-dropdown')[0]
          .getElementsByClassName('text')[0].textContent
      );
      if (isNaN(qty)) {
        alert('Error: User has to pick quantity to Add to cart');
        return;
      }
      let lineTotal = dishPrice * qty;
      total += lineTotal;
      console.log(total);
      insertOrderItem(dishName, lineTotal, qty, imgUrl);
      updateTotal(total);
    });
  }
  // let ordersBtn = document.getElementsByClassName('orders-btn')[0];
  // ordersBtn.addEventListener('click', showOrders);
  // let sellersBtn = document.getElementsByClassName('sellers-btn')[0];
  // sellersBtn.addEventListener('click', showSellers);
  // let customersBtn = document.getElementsByClassName('customers-btn')[0];
  // customersBtn.addEventListener('click', showCustomers);
});
