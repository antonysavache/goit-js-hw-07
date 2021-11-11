import { galleryItems } from './gallery-items.js';
// Change code below this line

const galereya = document.querySelector('.gallery')



galleryItems.forEach(
    item=>{
        let ashka = document.createElement('a');
        ashka.classList.add('gallery__link');
        ashka.href=item.original;
        let imgshka = document.createElement('img');
        imgshka.src = item.preview;
        imgshka.alt = item.description;
        imgshka.dataset.source=item.original;
        imgshka.classList.add('gallery__image');

        ashka.addEventListener('click',(event)=>{
            event.preventDefault();
            const instance = basicLightbox.create(
                `<img src="${imgshka.dataset.source}" width="100%" height="100%">`)
                
                instance.show()
        })


        window.addEventListener('keydown', (event)=>{
            event.code === 'Escape'
            instance.close()
        })
        })

        ashka.append(imgshka);
        galereya.append(ashka)

    }
)





