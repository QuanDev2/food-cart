import { hideAllResults, showSuccess, showError } from '/utilities.js';

function isNumeric(value) {
  return /^\d+$/.test(value);
}

const priceElem = document.getElementById('price-input');
const qtyElem = document.getElementById('qty-input');
const form = document.getElementById('sell-dish-form');
// hideAllResults();
priceElem.parentElement.removeAttribute('data-error');
document.querySelectorAll('.field input').forEach(elem => {
  elem.addEventListener('input', () => {
    elem.parentElement.removeAttribute('data-error');
  });
});
form.addEventListener('submit', async event => {
  let hasError = false;

  event.preventDefault();
  const dishName = $('#dishMenu').dropdown('get text');
  // validate price as number
  // console.log(type(qtyElem.value));
  if (isNaN(priceElem.value) || priceElem.value == '') {
    priceElem.parentElement.setAttribute('data-error', 'Invalid price');
    hasError = true;
  }
  if (!isNumeric(qtyElem.value) || qtyElem.value == '0') {
    qtyElem.parentElement.setAttribute('data-error', 'Invalid quantity');
    hasError = true;
  }
  if (hasError == true) return;
  try {
    const res = await axios.post('/create-post', {
      dishName: dishName,
      price: priceElem.value,
      quantity: qtyElem.value
    });
  } catch (err) {
    throw err;
  }
  form.reset();
});
