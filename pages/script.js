const container = document.querySelector('.page');

const addButtonProfile = container.querySelector('.profile__button');
const addButtonPhoto = container.querySelector('.profile__button-photo');

const popups = container.querySelector('.popup');

const popupProfile = container.querySelector('#popup-profile');
const closePopupProfile = document.querySelector('#popup-profile-close');
const popupProfileSubmit = container.querySelector('#popup-submit-profile');
const profileName = container.querySelector('.profile__name');
const profileAbout = container.querySelector('.profile__about');
const nameInput = document.querySelector('#edit-profile-name');
const aboutInput = document.querySelector('#edit-profile-about');
const formProfile = container.querySelector('#form-profile');


const popupMesto = container.querySelector('#popup-mesto');
const closePopupMesto = document.querySelector('#popup-mesto-close');
const popupMestoSubmit = container.querySelector('#popup-submit-mesto');
const formMesto = container.querySelector('#edit-mesto');
const mestoName = container.querySelector('#edit-mesto-title');
const mestoLink = container.querySelector('#edit-mesto-link');


const popupPhoto = container.querySelector('#popup-photo');
const closePopupPhoto = popupPhoto.querySelector('#popup-photo-close');
const popupImg = popupPhoto.querySelector('.popup__img');
const popupPhotoTitle = popupPhoto.querySelector('.popup__photo-title');

const elementsContainer = container.querySelector('.elements__container');
const elements = container.querySelector('.element');
const clickPhotoCard = container.querySelectorAll('.element__photo');
const elementLikes = container.querySelectorAll('.element__button-like');
const deleteCards = container.querySelectorAll('.element__button-trash');
const elementTitle = container.querySelectorAll('.element__title');

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


  // function addCard (element) {
  //   const cardTemplate = document.querySelector('#card-template').content;
  //   const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  //   const photo = cardElement.querySelector('element__photo');
  //   const title = cardElement.querySelector('element__title');
    
  //   photo.src = element.link;
  //   photo.alt = element.name;
  //   title.textContent = element.name;
  
  //   photo.addEventListener('click', () => openLargePhoto(element));
  //   return cardElement;
  // };


//лайк карточек
elementLikes.forEach(likeBtn => {
  likeBtn.addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__button-like_active');
  });
  });
  
  //удаление карточек
  deleteCards.forEach(delCard => {
    delCard.addEventListener('click', (evt) => {
      evt.target.closest(".element").remove();
  });
  });

  clickPhotoCard.addEventListener('click', function(){
    // popupImg.src = clickPhotoCard.link;
    // popupImg.alt = clickPhotoCard.name;
    // popupPhotoTitle.textContent = elementTitle.name;
    popupOpened(popupPhoto);
  });
  
  closePopupPhoto.addEventListener('click', function(){
  popupClose(popupPhoto);
  });
  

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
  // popupMesto.reset();
  popupOpened(popupMesto);
});


closePopupMesto.addEventListener('click', function(){
popupClose(popupMesto);
});


closePopupPhoto.addEventListener('click', function(){
  popupClose(popupPhoto);
  });

  

 function formSubmitMesto (evt) {
  evt.preventDefault();
  const element = {
    name: mestoName.value,
    link: mestoLink.value,
  };
  elementsContainer.prepend(addCard(element));
  popupClose(popupMesto);
}
popupMestoSubmit.addEventListener('submit', formSubmitMesto);




