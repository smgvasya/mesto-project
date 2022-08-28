const addButtonProfile = document.querySelector('.profile__button');
const addButtonPhoto = document.querySelector('.profile__button-photo');
const popupProfile = document.querySelector('#popup-profile');
const closePopupProfile = document.querySelector('#popup-profile-close');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const nameInput = document.querySelector('#edit-profile-name');
const aboutInput = document.querySelector('#edit-profile-about');
const formProfile = document.querySelector('#form-profile');
const formMesto = document.querySelector("#edit-mesto");
const popupMesto = document.querySelector('#popup-mesto');
const closePopupMesto = document.querySelector('#popup-mesto-close');

const popupPhoto = document.querySelector('#popup-photo');
const closePopupPhoto = document.querySelector('#popup-photo-close');
const popupImg = document.querySelector('.popup__img');
const popupPhotoTitle = document.querySelector('.popup__photo-title');
const elementsContainer = document.querySelector('.elements__container');
const contentElements = document.querySelector('.elements');

const mestoName = document.querySelector('#edit-mesto-title');
const mestoLink = document.querySelector('#edit-mesto-link');



//Функция открытие модальных окон
function popupOpened(popup)  {
  popup.classList.add('popup_opened')
}

//Функция закрытия модальных окон
function popupClose(popup)  {
  popup.classList.remove('popup_opened');
}

//Функция формы редактирования профиля
function formSubmitProfile (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  popupClose(popupProfile); 
}
formProfile.addEventListener('submit', formSubmitProfile);

//Открытие окна редактирования профиля
addButtonProfile.addEventListener('click', function (){
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  popupOpened(popupProfile);
});

//Закрытие окна редактирования профиля
closePopupProfile.addEventListener('click', function (){
  popupClose(popupProfile);
  });

//Открытие окна добавление карточки
  addButtonPhoto.addEventListener('click', function (){
    popupOpened(popupMesto);
  });

//Закрытие окна добавление карточки
  closePopupMesto.addEventListener('click', function (){
    popupClose(popupMesto);
  })

// Функция добавления новой карточки
  function addCard(element) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const photoElement = cardElement.querySelector('.element__photo');
    const titleElement = cardElement.querySelector('.element__title');
    
    titleElement.textContent = element.name
    photoElement.src = element.link
    photoElement.alt = element.name
 

  //Удаление карточки
  const deleteElement = cardElement.querySelectorAll('.element__button-trash');
  deleteElement.forEach(delCard => {
    delCard.addEventListener('click', (evt) => {
      evt.target.closest(".element").remove();
  });
  });

   //Лайк карточки
  const elementLikes = cardElement.querySelectorAll('.element__button-like');
  elementLikes.forEach(likeBtn => {
    likeBtn.addEventListener('click', (evt) => {
     evt.target.classList.toggle('element__button-like_active');
  });
  });

   //Открытие модального окна/фото карточки 
    photoElement.addEventListener("click", () => {
      popupImg.src = element.link;
      popupPhotoTitle.textContent = element.name;
      popupImg.alt = element.name;
      popupOpened(popupPhoto);
    });
    return cardElement;
  }


  //Закрытие попапа с фото
closePopupPhoto.addEventListener("click", function () {
  popupClose(popupPhoto);
});


  //Функция формы
  function displayCard(element) {
    elementsContainer.prepend(addCard(element));
  } 


  //Добавление карточек из кода
  initialCards.forEach ((element) => {
    displayCard(element);
  })


// Функция формы добавления карточки/очистка инпутов

function formSubmitMesto(evt) {
  evt.preventDefault ();

  const newElement = {
    name: mestoName.value, 
    link: mestoLink.value
  }; 
 
  displayCard(newElement);
  popupClose(popupMesto);

  mestoName.value = "";
  mestoLink.value = "";
}
formMesto.addEventListener ('submit', formSubmitMesto);


