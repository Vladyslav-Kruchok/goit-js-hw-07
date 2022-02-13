/*
+Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
+Реалізація делегування на div.gallery і отримання url великого зображення.
+Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.
+Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
+Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
+Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. +Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
+Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно. Бібліотекаи basicLightbox містить метод для програмного закриття модального вікна.
*/
import { galleryItems } from './gallery-items.js';
// Change code below this line

//create gallery
const GALLERY = document.querySelector('.gallery');
const createGallery = (galleryItems) => {
    const str = galleryItems
        .map(({ preview, original, description }) =>
            `
            <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
            </div>
        `
        )
        .join('\n');
    return str;
};
GALLERY.insertAdjacentHTML('beforeend', createGallery(galleryItems));

// modal wnd
// e = event
const KEY = 'Escape';
const onClick = (instance, e, key) => {
    if(e.code === key)
    {
        instance.close();
    }
};

const modalWndCreate = (e) => {
    if (e.target.tagName === 'IMG')
    {
        const instance = basicLightbox.create(
            `
                <img src="${e.target.dataset.source}">
            `,
            {
                //Atr when modal wnd is open
                onShow: instance => {
                    window.addEventListener('keydown', e => onClick(instance, e, KEY));
                    //console.log(window.event.type);
                },
                //Atr when modal wnd is close
                onClose: instance => {
                    window.removeEventListener('keydown', e => onClick(instance, e, KEY));
                   //console.log(window.event.type);
                }
            }
        );
        instance.show();
    };
};

//main 
GALLERY.addEventListener('click', e => {
    e.preventDefault();
    modalWndCreate(e);
});

