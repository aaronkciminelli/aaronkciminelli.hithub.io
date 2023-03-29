// JavaScript Document

const form = document.querySelector('#contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  // perform form validation here
  // send form data to server using fetch() or XMLHttpRequest()
});