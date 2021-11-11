import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galereya = document.querySelector('.gallery')





galleryItems.forEach(
    item=>{
        let ashka = document.createElement('a');
        ashka.classList.add('gallery__item');
        ashka.href=item.original;
        ashka.dataset.lightbox='mygallery';
        let imgshka = document.createElement('img');
        imgshka.src = item.preview;
        imgshka.alt = item.description;
        imgshka.classList.add('gallery__image');
        ashka.append(imgshka);
        galereya.append(ashka)
    }
)

let imgg = document.querySelector('.gallery__image')

let galleryModal = new SimpleLightbox('.gallery__item', {captionsData:'alt',captionDelay:250,captionPosition:'bottom'});

console.log(imgg.alt)