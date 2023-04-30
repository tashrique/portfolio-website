const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('name', nameInput.value);
  formData.append('email', emailInput.value);
  formData.append('message', messageInput.value);

  fetch('/submit-contact-form', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      alert('Thanks for contacting me!');
      form.reset();
    } else {
      alert('Oops! Something went wrong. Please try again later.');
    }
  })
  .catch(error => {
    alert('Oops! Something went wrong. Please try again later.');
    console.error(error);
  });
});
