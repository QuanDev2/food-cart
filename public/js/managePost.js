function showSuccess(msg) {
  document.getElementById('update-result').innerText = msg;
  setTimeout(() => {
    document.getElementById('update-result').innerText = '';
  }, 1500);
}

window.addEventListener('DOMContentLoaded', function () {
  // Remember all of the existing twits in an array that we can use for search.
  const deleteBtns = document.getElementsByClassName('delete-btn');
  const updateBtns = document.getElementsByClassName('update-btn');

  // attach event listeners to delete buttons
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', async event => {
      const result = await axios.post('/manage-post-delete', {
        postID: event.target.parentNode.parentNode.dataset.postid
      });
      if (result.data === 'OK') {
        event.target.parentNode.parentNode.remove();
      }
    });
  }

  // attach event listeners to update buttons
  for (let i = 0; i < updateBtns.length; i++) {
    updateBtns[i].addEventListener('click', async event => {
      // grab quantity and price values
      const result = await axios.post('/manage-post-update', {
        postID: event.target.parentNode.parentNode.dataset.postid,
        price: event.target.parentNode.parentNode.getElementsByTagName(
          'input'
        )[0].value
      });
      if (result.data === 'OK') {
        showSuccess('Your post was updated!');
      }
    });
  }
});
