// app.js - JavaScript for Abstract Art Portfolio

// Modal functionality
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalYear = document.getElementById('modal-year');
const modalCaption = document.getElementById('modal-caption');
const closeBtn = document.querySelector('.close');

// Open modal when clicking on art card
document.querySelectorAll('.art-card').forEach(card => {
  card.addEventListener('click', () => {
    const imgSrc = card.querySelector('img').src;
    const title = card.dataset.title;
    const year = card.dataset.year;
    const caption = card.dataset.caption;

    modalImg.src = imgSrc;
    modalTitle.textContent = title;
    modalYear.textContent = year;
    modalCaption.textContent = caption;

    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  });
});

// Close modal
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

function closeModal() {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = 'auto'; // Restore scrolling
}

// Contact form functionality
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Basic validation
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Simulate form submission (front-end only)
  alert('Thank you for your message! I will get back to you soon.');

  // Reset form
  contactForm.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Sticky navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
  } else {
    navbar.style.backgroundColor = '#1a1a1a';
  }
});