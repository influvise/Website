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
  