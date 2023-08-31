import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const galleryElem = galleryItems
    .map(({ preview, description, original }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>`)
.join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryElem);

const lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt",captionDelay: 250, captionPosition: "bottom",});


