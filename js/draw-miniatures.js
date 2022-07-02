import { getBigViewDisplay } from './big-image-display.js';

const drawMiniaturesTemplate = document.querySelector('#picture').content.querySelector('.picture'); //создаю элемент шаблона picture
const picturesContainer = document.querySelector('.pictures');

const renderPhoto = (photo) => {
  const pictureElement = drawMiniaturesTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = photo.url;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;

  pictureElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    getBigViewDisplay(photo.url, photo.likes, photo.comments, photo.description);
  });

  return pictureElement;
};

const renderPhotos = (photos) => {
  const fragment = document.createDocumentFragment(); // Создаю "коробочку"

  photos.forEach((photo) => {
    const photoElement = renderPhoto(photo);

    fragment.appendChild(photoElement);
  });

  picturesContainer.appendChild(fragment);
};

export {renderPhotos};