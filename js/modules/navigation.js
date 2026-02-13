export function initNavigation() {
  const navbar = document.getElementById('navbar');

  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach((anchor) => {
    anchor.addEventListener('click', function onAnchorClick(event) {
      const href = this.getAttribute('href');
      if (!href || href === '#') {
        return;
      }

      const targetId = href.slice(1);
      if (!targetId) {
        return;
      }

      const target = document.getElementById(targetId);
      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  window.addEventListener('scroll', () => {
    if (!navbar) {
      return;
    }

    if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
      return;
    }

    navbar.style.backgroundColor = '#1a1a1a';
  });
}
