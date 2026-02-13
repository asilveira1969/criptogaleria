export function initModal() {
  const modal = document.getElementById('modal');
  const modalContent = modal?.querySelector('.modal-content');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalYear = document.getElementById('modal-year');
  const modalCaption = document.getElementById('modal-caption');
  const closeBtn = document.getElementById('modal-close');

  if (!modal || !modalContent || !modalImg || !modalTitle || !modalYear || !modalCaption || !closeBtn) {
    return {
      openModal: () => {},
      closeModal: () => {}
    };
  }

  let lastFocusedElement = null;

  const getFocusableElements = () => {
    return modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
  };

  const onModalKeyDown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeModal();
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    const focusableElements = getFocusableElements();
    if (!focusableElements.length) {
      return;
    }

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
      return;
    }

    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  function openModal(artwork, triggerElement) {
    if (!artwork) {
      return;
    }

    lastFocusedElement = triggerElement || document.activeElement;

    modalImg.src = artwork.image || '';
    modalImg.alt = artwork.alt || artwork.title || 'Artwork image';
    modalTitle.textContent = artwork.title || '';
    modalYear.textContent = artwork.year || '';
    modalCaption.textContent = artwork.caption || '';

    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onModalKeyDown);

    closeBtn.focus();
  }

  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
    document.removeEventListener('keydown', onModalKeyDown);

    if (lastFocusedElement instanceof HTMLElement) {
      lastFocusedElement.focus();
    }
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  return {
    openModal,
    closeModal
  };
}
