document.querySelectorAll('.image-container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.pop-image').style.display = 'block';
        document.querySelector('.pop-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.pop-image span').onclick = () => {
    document.querySelector('.pop-image').style.display = 'none';
}
function showModal() {
    var modal = document.getElementById('successModal');
    modal.style.display = 'block';
  }

  // Function to close the modal
  function closeModal() {
    var modal = document.getElementById('successModal');
    modal.style.display = 'none';
  }

  // Close the modal if the user clicks outside of it
  window.onclick = function(event) {
    var modal = document.getElementById('successModal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
 