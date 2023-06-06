import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// change1
const gallery = document.querySelector('.gallery');

function createGalleryItemMarkup(item) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>
  `;
}

function renderGalleryItems(items) {
  const galleryItemsMarkup = items.map(createGalleryItemMarkup).join('');
  gallery.innerHTML = galleryItemsMarkup;
}

renderGalleryItems(galleryItems);

// Change2
gallery.addEventListener('click', handleGalleryClick);

function handleGalleryClick(event) {
  event.preventDefault();

  const target = event.target;
  if (target.classList.contains('gallery__image')) {
    const largeImageUrl = target.dataset.source;
    openModal(largeImageUrl);
  }
}

// Відкриття модального вікна та заміна значення атрибута src:
function openModal(largeImageUrl) {
    const instance = basicLightbox.create(`
      <img src="${largeImageUrl}" width="800" height="600">
    `);
  
    instance.show();

//   Закриття модального вікна за допомогою клавіші Escape:
    document.addEventListener('keydown', handleModalClose);
  
    function handleModalClose(event) {
      if (event.key === 'Escape') {
        instance.close();
        document.removeEventListener('keydown', handleModalClose);
      }
    }
  
    function closeModal() {
      instance.close();
      document.removeEventListener('keydown', handleKeyDown);
    }
  
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closeModal();
      }
    }
  
    document.addEventListener('keydown', handleKeyDown);
  }
  