import { hideAllResults, showSuccess, showError } from '/utilities.js';

let signUpForm = document.getElementById('sign-up-form');
let submitBtn = document.getElementsByClassName('submit-btn')[0];

hideAllResults();

const handleSubmit = async event => {
  event.preventDefault();
  let fullName = document.getElementById('full-name-input').value;
  let username = document.getElementById('username-input').value;
  let password = document.getElementById('password-input').value;
  let email = document.getElementById('email-input').value;
  let phone = document.getElementById('phone-input').value;
  let accountCustomer = document.getElementById('account-customer');
  let accountType = accountCustomer.checked ? 'customer' : 'seller';
  try {
    const res = await axios.post('/sign-up', {
      fullName: fullName,
      username: username,
      password: password,
      email: email,
      phone: phone,
      accountType: accountType
    });

    console.log(res);
    if (res.status === 200) {
      signUpForm.reset();
      showSuccess();
    } else {
    }
  } catch (err) {
    showError();
  }
};

signUpForm.addEventListener('submit', handleSubmit);
