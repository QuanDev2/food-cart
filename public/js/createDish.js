// import { hideAllResults, showSuccess, showError } from '/utilities.js';

const btn = document.getElementById('submit-btn');
const form = document.getElementById('create-dish-form');

const showSuccess = () => {
  let resultDiv = document.getElementById('post-result');
  resultDiv.innerHTML =
    '<h3>Your dish was created! <br> You can create a new one or go back to start your post</h3>';
};

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
