// make dropdowns work
$(document).ready(function () {
  $('.ui.dropdown').dropdown();
});

$('.ui.checkbox').checkbox();

$('.ui .item').on('click', function () {
  $('.ui .item').removeClass('active');
  $(this).addClass('active');
});

var total = 0.0;
let orderList = [];

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
  document.querySelectorAll('.quantity-input').forEach(elem => {
    elem.value = '1';
  });
};

const resetOrder = () => {
  showSuccess();
  removeOrderItems();
  document.getElementById('total').textContent = '0';
  document.getElementById('customerName').innerText = 'Customer Name';
};

/**************************
 * Place Order Button
 */

placeOrderBtn = document.getElementById('place-order-btn');
placeOrderBtn.addEventListener('click', async event => {
  orderList = [];
  // collect all order items
  document.querySelectorAll('.order-items .item').forEach(elem => {
    const content = elem.children[1].children;
    const dishName = content[0].textContent;
    const subtotal = content[1].children[0].textContent.substring(1);
    const qty = content[1].children[1].textContent.substring(5);
    orderList.push({
      dishName: dishName,
      subtotal: subtotal,
      quantity: qty,
      postID: elem.dataset.postid
    });
  });

  // grab customer name
  // console.log(document.getElementById('customerName').innerText);
  // console.log(orderList);
  const customerName = document.getElementById('customerName').innerText;
  if (customerName == 'Customer Name') {
    alert('Please choose a customer name');
    return;
  }
  // send to the server
  try {
    console.log(orderList);
    const res = await axios.post('/new-order', {
      orders: orderList,
      customerName: customerName
    });
    // console.log(res);
  } catch (err) {
    throw err;
  }
  // show success
  total = 0;
  resetOrder();
});

// get info of all posts
let numPosts = document.getElementsByClassName('dish').length;

function insertOrderItem(dishName, subtotal, quantity, imgUrl, postID) {
  var orderItemContext = {
    dishName: dishName,
    subtotal: subtotal,
    quantity: quantity,
    imgUrl: imgUrl,
    postID: postID
  };
  var orderItemHTML = Handlebars.templates.orderItem(orderItemContext);
  var orderContainer = document.querySelector('.order-items');
  orderContainer.insertAdjacentHTML('beforeend', orderItemHTML);
}

function insertPostItem(dishName, price, seller, image) {
  var postItemContext = {
    dishName: dishName,
    price: price,
    sellerName: seller,
    image: image
  };
  var postItemHTML = Handlebars.templates.dish(postItemContext);
  var postContainer = document.getElementById('dishes');
  postContainer.insertAdjacentHTML('beforeend', postItemHTML);
}

function updateTotal(total) {
  // remove total before inserting

  // insert new total
  totalHtml = document.getElementById('total');
  totalHtml.innerHTML = total;
}

// Seach feature
let allPosts = [];

/*
 * This function clears the current search term, causing all posts to be
 * re-inserted into the DOM.
 */
function clearSearchAndReinsertPosts() {
  document.getElementById('nav-search-input').value = '';
  doSearchUpdate();
}

/*
 * A function that determines whether a given post matches a search query.
 * Returns true if the post matches the query and false otherwise.
 */
function postMatchesSearchQuery(post, searchQuery) {
  /*
   * An empty query matches all posts.
   */
  if (!searchQuery) {
    return true;
  }
  /*
   * The search query matches the post if either the post's text or the post's
   * author contains the search query.
   */
  searchQuery = searchQuery.trim().toLowerCase();
  return post.dishName.toLowerCase().indexOf(searchQuery) >= 0;
}

/*
 * Perform a search over over all the posts based on the search query the user
 * entered in the navbar.  Only display posts that match the search query.
 * Display all posts if the search query is empty.
 */
function doSearchUpdate() {
  /*
   * Grab the search query from the navbar search box.
   */
  var searchQuery = document.getElementById('nav-search-input').value;

  /*
   * Remove all posts from the DOM temporarily.
   */
  var postContainer = document.getElementById('dishes');
  if (postContainer) {
    while (postContainer.lastChild) {
      postContainer.removeChild(postContainer.lastChild);
    }
  }

  /*
   * Loop through the collection of all posts and add posts back into the DOM
   * if they match the current search query.
   */
  allPosts.forEach(function (post) {
    if (postMatchesSearchQuery(post, searchQuery)) {
      insertPostItem(post.dishName, post.price, post.seller, post.imgUrl);
    }
  });
}

/*
 * This function parses an existing DOM element representing a single post
 * into an object representing that post and returns that object.  The object
 * is structured like this:
 *
 * {
 *   dishName: "...",
 *   price: "..."
 * }
 */
function parsePostElem(postElem) {
  var post = {};

  var dishNameElem = postElem.querySelector('.dish-name');
  post.dishName = dishNameElem.textContent.trim();
  var priceElem = postElem.querySelector('.dish-price');
  post.price = priceElem.textContent.substring(1).trim();
  var sellerElem = postElem.querySelector('.seller-name');
  post.seller = sellerElem.textContent.trim();
  var imgUrlElem = postElem.querySelector('img');
  post.imgUrl = imgUrlElem.src;

  return post;
}

// Event listeners
window.addEventListener('DOMContentLoaded', function () {
  // Remember all of the existing twits in an array that we can use for search.
  var postElemsCollection = document.getElementsByClassName('dish');
  for (var i = 0; i < postElemsCollection.length; i++) {
    allPosts.push(parsePostElem(postElemsCollection[i]));
  }

  var searchButton = document.getElementById('nav-search-button');
  if (searchButton) {
    searchButton.addEventListener('click', doSearchUpdate);
  }

  var searchInput = document.getElementById('nav-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', doSearchUpdate);
  }

  /******************************
   * Add to Cart button
   */

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

      let qty = parseInt(
        document.getElementsByClassName('quantity-input')[i].value
      );
      if (isNaN(qty)) {
        alert('Error: User has to pick quantity to Add to cart');
        return;
      }
      let lineTotal = dishPrice * qty;
      total += lineTotal;
      // console.log(dishElement);
      const postID = dishElement.dataset.postid;
      insertOrderItem(dishName, lineTotal, qty, imgUrl, postID);
      resetQuantity();
      updateTotal(total);

      // attach event listener to x icon
      document
        .getElementsByClassName('order')[0]
        .querySelector(`[data-postid = "${postID}"]`)
        .addEventListener('click', event => {
          event.target.parentNode.remove();
          total -= lineTotal;
          updateTotal(total);
        });
    });
  }
});
