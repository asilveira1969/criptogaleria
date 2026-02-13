const FALLBACK_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"%3E%3Crect width="1200" height="800" fill="%231f1f1f"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle" fill="%23b0b0b0" font-size="42" font-family="Arial, sans-serif"%3EImage unavailable%3C/text%3E%3C/svg%3E';

function createArtworkCard(artwork) {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'art-card';
  card.dataset.artworkId = artwork.id;
  card.dataset.title = artwork.title;
  card.dataset.year = artwork.year;
  card.dataset.caption = artwork.caption;
  card.dataset.image = artwork.image;
  card.dataset.alt = artwork.alt;
  card.setAttribute('aria-label', `Open artwork ${artwork.title}`);

  const img = document.createElement('img');
  img.src = artwork.image;
  img.alt = artwork.alt;
  img.loading = 'lazy';
  img.addEventListener('error', () => {
    img.src = FALLBACK_IMAGE;
    img.alt = `Image not available for ${artwork.title}`;
    card.classList.add('is-fallback');
  }, { once: true });

  const cardInfo = document.createElement('div');
  cardInfo.className = 'card-info';

  const title = document.createElement('h3');
  title.textContent = artwork.title;

  const year = document.createElement('p');
  year.textContent = artwork.year;

  cardInfo.append(title, year);
  card.append(img, cardInfo);

  return card;
}

export function renderGallery(containerEl, artworks) {
  if (!containerEl || !Array.isArray(artworks)) {
    return;
  }

  const fragment = document.createDocumentFragment();
  artworks.forEach((artwork) => {
    if (!artwork || !artwork.id || !artwork.title || !artwork.image) {
      return;
    }

    fragment.appendChild(createArtworkCard(artwork));
  });

  containerEl.replaceChildren(fragment);
}

export function bindGalleryInteractions(containerEl, onOpenModal) {
  if (!containerEl || typeof onOpenModal !== 'function') {
    return;
  }

  const openFromTarget = (target) => {
    const card = target.closest('.art-card');
    if (!card || !containerEl.contains(card)) {
      return;
    }

    onOpenModal({
      title: card.dataset.title,
      year: card.dataset.year,
      caption: card.dataset.caption,
      image: card.dataset.image,
      alt: card.dataset.alt
    }, card);
  };

  containerEl.addEventListener('click', (event) => {
    openFromTarget(event.target);
  });

  containerEl.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    const card = event.target.closest('.art-card');
    if (!card) {
      return;
    }

    if (card.tagName === 'BUTTON') {
      return;
    }

    event.preventDefault();
    onOpenModal({
      title: card.dataset.title,
      year: card.dataset.year,
      caption: card.dataset.caption,
      image: card.dataset.image,
      alt: card.dataset.alt
    }, card);
  });
}
