# criptogaleria

Static front-end for the Criptogaleria website, prepared for incremental growth with vanilla HTML/CSS/JS.

## Current architecture

- `index.html`: page structure, sections, modal shell, and module entrypoint.
- `styles/base.css`: reset, CSS variables, typography, global focus styles.
- `styles/layout.css`: page layout, sections, responsive behavior.
- `styles/components.css`: buttons, gallery cards, form controls, modal UI.
- `js/main.js`: app bootstrap and module wiring.
- `js/data/artworks.js`: central artwork data source.
- `js/modules/gallery.js`: gallery rendering and delegated card interactions.
- `js/modules/modal.js`: modal open/close, Escape key, focus trap, focus restore.
- `js/modules/navigation.js`: robust in-page smooth scrolling and navbar scroll styling.
- `js/modules/contact.js`: contact form validation and simulated submit behavior.

## Data contract for artworks

Each artwork in `js/data/artworks.js` follows this shape:

```js
{
  id: string,
  title: string,
  year: string,
  caption: string,
  image: string,
  alt: string
}
```

## How to add a new artwork

1. Open `js/data/artworks.js`.
2. Add one new object to the `artworks` array using the same schema.
3. Ensure `image` points to a valid file under `assets/`.
4. Reload the page: the card appears automatically without editing HTML.

## Accessibility baseline included

- Keyboard reachable gallery cards.
- Modal closes on overlay click, close button, and `Escape`.
- Basic modal focus management (trap while open, restore on close).
- Visible focus style for interactive elements.

## Future extension points

- Replace alert-based contact submit with a real API call in `js/modules/contact.js`.
- Add gallery filters/sorting in `js/modules/gallery.js`.
- Add routing/pages while preserving modular JS/CSS layers.
