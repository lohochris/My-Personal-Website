let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');

menu.onclick = () => {
    (document.querySelector('.navbar')).classList.toggle('active')
}


  
document.addEventListener('DOMContentLoaded', () => {
    // JavaScript for Responsive Navigation Menu
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
  
    if (menuIcon) {
      menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
      });
    }
  
    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
      });
    }
  
    // JavaScript for Dark Mode Toggle
    const darkModeButton = document.getElementById('darkmode');
  
    if (darkModeButton) {
      darkModeButton.addEventListener('click', () => {
        document.body.classList.toggle('active');
        if (document.body.classList.contains('active')) {
          darkModeButton.classList.replace('bx-moon', 'bx-sun');
        } else {
          darkModeButton.classList.replace('bx-sun', 'bx-moon');
        }
      });
    }
  
    // JavaScript for Contact Form Validation
    const contactForm = document.querySelector('.contact-form form');
    const nameInput = contactForm.querySelector('input[type="text"]');
    const emailInput = contactForm.querySelector('input[type="email"]');
    const messageInput = contactForm.querySelector('textarea');
    const contactButton = contactForm.querySelector('.contact-button');
  
    if (contactButton) {
      contactButton.addEventListener('click', (e) => {
        e.preventDefault();
  
        let valid = true;
  
        // Validate name
        if (nameInput.value.trim() === '') {
          alert('Please enter your name.');
          valid = false;
        }
  
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
          alert('Please enter a valid email address.');
          valid = false;
        }
  
        // Validate message
        if (messageInput.value.trim() === '') {
          alert('Please enter a message.');
          valid = false;
        }
  
        // If all fields are valid, submit the form
        if (valid) {
          alert('Message sent successfully!');
          contactForm.reset();
        }
      });
    }
  
    // JavaScript for Scroll to Section Smoothly
    document.querySelectorAll('.navbar a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        window.scrollTo({
          top: targetElement.offsetTop - 50, // Adjust for header height
          behavior: 'smooth'
        });
      });
    });
  });
  