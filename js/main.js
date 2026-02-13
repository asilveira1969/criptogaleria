import { artworks } from './data/artworks.js';
import { renderGallery, bindGalleryInteractions } from './modules/gallery.js';
import { initModal } from './modules/modal.js';
import { initNavigation } from './modules/navigation.js';
import { initContactForm } from './modules/contact.js';

export function initApp() {
  const galleryContainer = document.getElementById('gallery-grid');

  renderGallery(galleryContainer, artworks);

  const modalController = initModal();
  bindGalleryInteractions(galleryContainer, modalController.openModal);

  initNavigation();
  initContactForm();
}

document.addEventListener('DOMContentLoaded', initApp);
