window.addEventListener('DOMContentLoaded', function () {
  // Remember all of the existing twits in an array that we can use for search.
  const deleteBtns = document.getElementsByClassName('delete-btn');

  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', async event => {
      const result = await axios.post('/manage-post', {
        postID: event.target.parentNode.parentNode.dataset.postid
      });
      if (result.data === 'OK') {
        event.target.parentNode.parentNode.remove();
      }
    });
  }
});
