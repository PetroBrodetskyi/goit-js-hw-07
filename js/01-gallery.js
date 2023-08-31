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

galleryContainer.insertAdjacentHTML('beforeend', galleryElem)

galleryContainer.addEventListener('click', imgClick)

function imgClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    const modal = basicLightbox.create(
        `<img src="${evt.target.dataset.source}" width="800" height="600">`,

        {   onShow: () => window.addEventListener('keydown', onEscKeyPress),
            onClose: () => window.removeEventListener('keydown', onEscKeyPress),
        }
    );
    
    modal.show();

    function onEscKeyPress(evt) {   
        if (evt.code === "Escape") {
            modal.close();
        }
    }
};






