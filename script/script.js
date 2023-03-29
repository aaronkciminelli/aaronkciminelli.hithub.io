// JavaScript Document
// Get the current page's URL
var currentPageUrl = window.location.href;

// Get the link elements in the navigation
var navLinks = document.querySelectorAll('.nav a');

// Loop through the link elements
for (var i = 0; i < navLinks.length; i++) {
  var linkUrl = navLinks[i].href;

  // Check if the link's URL matches the current page's URL
  if (linkUrl === currentPageUrl) {
    // Add the active class to the link element
    navLinks[i].classList.add('active');
  }
}