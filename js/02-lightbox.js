import { galleryItems } from './gallery-items.js';

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');

  function createGalleryItem(item) {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item');

    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = item.original;

    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.src = item.preview;
    image.alt = item.description;

    link.appendChild(image);
    galleryItem.appendChild(link);

    return galleryItem;
  }

  function renderGallery() {
    const items = galleryItems.map(item => createGalleryItem(item));
    gallery.append(...items);
  }

  renderGallery();

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
  });
});
