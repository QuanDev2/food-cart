import { hideAllResults, showSuccess, showError } from '/utilities.js';

const btn = document.getElementById('submit-btn');
const form = document.getElementById('create-dish-form');

hideAllResults();

// event listener
form.addEventListener('submit', async event => {
  event.preventDefault();
  const nameInput = document.getElementById('dish-name').value;
  const res = await axios.post('/create-dish', {
    dishName: nameInput
  });
  if (res.data === 'OK') {
    form.reset();
    showSuccess();
  } else {
    console.log(res);
    showError();
  }
});
