// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Tab functionality for workout plans
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-tab');

    tabButtons.forEach(btn => {
      btn.classList.remove('border-indigo-600', 'text-indigo-600');
      btn.classList.add('text-gray-600');
    });
    button.classList.add('border-indigo-600', 'text-indigo-600');
    button.classList.remove('text-gray-600');

    tabContents.forEach(content => {
      if (content.id === target) {
        content.classList.remove('hidden');
      } else {
        content.classList.add('hidden');
      }
    });
  });
});

// Contact form submission (basic validation and alert)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for contacting us! We will get back to you soon.');
  contactForm.reset();
});
