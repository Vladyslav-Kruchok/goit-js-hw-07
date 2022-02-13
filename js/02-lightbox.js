/*
+Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання.
+Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs.
+Необхідно додати посилання на два файли: simple-lightbox.min.js і simple-lightbox.min.css.
+Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery. Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
+Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.
*/
import { galleryItems } from './gallery-items.js';
// Change code below this line

//#region Create gallery #
const GALLERY = document.querySelector('.gallery');
const createGallery = (galleryItems) => {
    const str = galleryItems
        .map(({ preview, original, description }) =>
            `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
            </a>
            `
        )
        .join('\n');
    return str;
};
GALLERY.insertAdjacentHTML('beforeend', createGallery(galleryItems));
//#endregion #

//#region SimpleLightbox
let gallery = new SimpleLightbox('.gallery a', {
        captionType: 'attr',
        captionsData: 'title',
        captionPosition: 'top',
        captionDelay: 250,
    });
//#endregion #
