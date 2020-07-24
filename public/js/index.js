// make dropdowns work
$(document).ready(function () {
  $('.ui.dropdown').dropdown();
});

$('.ui.checkbox').checkbox();

$('.ui .item').on('click', function () {
  $('.ui .item').removeClass('active');
  $(this).addClass('active');
});

const showSuccess = () => {
  let resultDiv = document.getElementById('post-result');
  resultDiv.innerHTML = '<h3>Your order was placed!</h3>';
};

const removeOrderItems = () => {
  document.querySelectorAll('.order-items .item').forEach(elem => {
    elem.remove();
  });
};

const resetQuantity = () => {
  document
    .querySelectorAll('.ui.compact.selection.dropdown.qty-dropdown')
    .forEach(elem => {
      elem.children[1].textContent = 'Quantity';
    });
};

const resetOrder = () => {
  showSuccess();
  removeOrderItems();
  document.getElementById('total').textContent = '0';
};

placeOrderBtn = document.getElementById('place-order-btn');
placeOrderBtn.addEventListener('click', async event => {
  orderList = [];
  // collect all order items
  document.querySelectorAll('.order-items .item').forEach(elem => {
    const content = elem.children[1].children;
    const dishName = content[0].textContent;
    const price = content[1].children[0].textContent.substring(1);
    const qty = content[1].children[1].textContent.substring(5);
    orderList.push({
      dishName: dishName,
      price: price,
      quantity: qty
    });
  });
  // send to the server
  try {
    const res = await axios.post('/new-order', {
      orderList
    });
    // console.log(res);
  } catch (err) {
    throw err;
  }
  // show success

  resetOrder();
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
      // console.log(total);
      insertOrderItem(dishName, lineTotal, qty, imgUrl);
      resetQuantity();
      updateTotal(total);
    });
  }
});
