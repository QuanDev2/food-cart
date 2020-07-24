let postSuccess = document.getElementById('post-success');
let postError = document.getElementById('post-error');

export const hideAllResults = () => {
  postSuccess.style.display = 'none';
  postError.style.display = 'none';
};

export const showSuccess = () => {
  postSuccess.style.display = 'block';
  postError.style.display = 'none';
};
export const showError = () => {
  postSuccess.style.display = 'none';
  postError.style.display = 'block';
};
