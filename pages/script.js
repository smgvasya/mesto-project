const container = document.querySelector('.page');
const addButtonProfile = container.querySelector('.profile__button');
const addButtonPhoto = container.querySelector('.profile__button-photo');
const elementsContainer = container.querySelector('.elements__container');
const profileName = container.querySelector('.profile__name');
const profileAbout = container.querySelector('.profile__about');
const nameInput = document.querySelector('#edit-profile-name');
const aboutInput = document.querySelector('#edit-profile-about');
const closePopupProfile = document.querySelector('#popup-profile-close');
const closePopupMesto = document.querySelector('#popup-mesto-close');
const popupProfile = container.querySelector('#popup-profile');
const popupMesto = container.querySelector('#popup-mesto');
const popupPhoto = container.querySelector('#popup-photo');
const popupProfileSubmit = container.querySelector('#popup-submit-profile');
const popupMestoSubmit = container.querySelector('#popup-submitmesto');
const popups = container.querySelector('.popup');
const formProfile = container.querySelector('#form-profile');
const formMesto = container.querySelector('#edit-mesto');
const elements = container.querySelector('.element');
const elementLike = container.querySelector('.element__button-like');
const deleteCard = container.querySelector('.element__button-trash');
const mestoName = container.querySelector('#edit-mesto-title');
const mestoLink = container.querySelector('#edit-mesto-link');
const popupImg = container.querySelector('.popup__img');
const popupPhotoTitle = container.querySelector('.popup__photo-title');

// открытие модального окна
function popupOpened(popup)  {
    popup.classList.add('popup_opened')
};

// закрытие модального окна
function popupClose(popup)  {
    popup.classList.remove('popup_opened');
};


// при сохранении нового места мелькают все формы
function formSubmitProfile (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    popupClose(popupProfile); 
}
formProfile.addEventListener('submit', formSubmitProfile);


addButtonProfile.addEventListener('click', function(){
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
    popupOpened(popupProfile);
});


closePopupProfile.addEventListener('click', function(){
popupClose(popupProfile);
});


addButtonPhoto.addEventListener('click', function(){
    popupOpened(popupMesto);
});


closePopupMesto.addEventListener('click', function(){
popupClose(popupMesto);
});


//работает только для первой карточки
elementLike.addEventListener('click', function (evt) {
    elementLike.classList.toggle('element__button-like_active');
 });


//работает только для первой карточки
deleteCard.addEventListener('click', (evt) => {
    evt.target.closest(".element").remove();
});


const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
    ];


function addCard(name, link) {
const cardTemplate = document.querySelector('#card-template').content;
const cardElements = cardTemplate.querySelector('.element').cloneNode(true);

const photo = cardElements.querySelector('element__photo');
const title = cardElements.querySelector('element__title');


photo.src = link;
title.textContent = name;

elementLike.addEventListener('click', function (evt) {
    elementLike.classList.toggle('element__button-like_active');
 });

deleteCard.addEventListener('click', (evt) => {
    evt.target.closest(".element").remove();
});

photo.addEventListener("click", (event) => {
    popupOpened(popup-photo);
    popupImg.src = link;
    popupPhotoTitle.textContent = name;
  });
  return cardElements;
  elementsContainer.prepend(cardElements);
};


// function formSubmitMesto (evt) {
//     evt.preventDefault();
//     profileName.textContent = mestoName.value;
//     profileAbout.textContent = mestolink.value;
//     popupClose(popupProfile); 
// }
// formMesto.addEventListener('submit', formSubmitMesto);


// addButtonProfile.addEventListener('click', function(){
//     nameInput.value = profileName.textContent;
//     aboutInput.value = profileAbout.textContent;
//     popupOpened(popupProfile);
// });
