function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) {
    return;
  }

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name')?.value.trim() || '';
    const email = document.getElementById('email')?.value.trim() || '';
    const message = document.getElementById('message')?.value.trim() || '';

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });
}
