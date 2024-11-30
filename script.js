// JavaScript to enable smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default link behavior

      const targetId = link.getAttribute('href'); // Get the href value
      const targetElement = document.querySelector(targetId); // Find the target element

      if (targetElement) {
        // Smoothly scroll to the target element
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start' // Align the element to the top of the viewport
        });
      }
    });
  });
});

// JAVASCRIPT FOR PROSPECT FORM
const form = document.getElementById('Prospect');
const input = document.getElementsByTagName('input');

function getStarted() {
  form.style.display = 'flex';
}

function clearInputs() {
  const inputs = document.querySelectorAll(".prospect");
  inputs.forEach(input => input.value = "");
}
