let signUpForm = document.getElementById('sign-up-form');
let submitBtn = document.getElementsByClassName('submit-btn')[0];

const showSuccess = () => {
  let resultDiv = document.getElementById('post-result');
  resultDiv.innerHTML = '<h3>Your account was created!</h3>';
};

const handleSubmit = async event => {
  event.preventDefault();
  let fullName = document.getElementById('full-name-input').value;
  let username = document.getElementById('username-input').value;
  let password = document.getElementById('password-input').value;
  let email = document.getElementById('email-input').value;
  let phone = document.getElementById('phone-input').value;
  let accountCustomer = document.getElementById('account-customer');
  let accountSeller = document.getElementById('account-seller');
  let accountDriver = document.getElementById('account-driver');
  let accountType = '';
  document
    .getElementsByClassName('user-type-btn')[0]
    .querySelectorAll('input')
    .forEach(element => {
      if (element.checked === true) {
        accountType = element.value;
      }
    });
  try {
    const res = await axios.post('/sign-up', {
      fullName: fullName,
      username: username,
      password: password,
      email: email,
      phoneNumber: phone,
      accountType: accountType
    });

    console.log(res);
    if (res.status === 200) {
      signUpForm.reset();
      showSuccess();
    }
  } catch (err) {
    console.log(err);
  }
};

signUpForm.addEventListener('submit', handleSubmit);
