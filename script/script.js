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

const closeButtons = document.querySelectorAll('.popup__close');

const popup = document.querySelectorAll('.popup');
//Функция открытие модальных окон
function openPopup(popup)  {
  popup.classList.add('popup_opened');
}

//Функция закрытия модальных окон
function closePopup(popup)  {
  popup.classList.remove('popup_opened');
}

//Функция закрытия мадальных окон по esc
function closePopupEsc (evt) {
  const popup = document.querySelectorAll('.popup');
  if (evt.key === 'Escape') {
    popup.forEach((element) => element.classList.remove('popup_opened'))
  }
}

//Функция закрытия мадальных окон при клике на оверлей
function closePopupOverlay (popup) {
  popup.addEventListener('click', (evt) => {
    if(evt.target === evt.currentTarget){
      closePopup(popup);
    };
  });
}

//Функция формы редактирования профиля
function submitFormProfile (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(popupProfile);
}
formProfile.addEventListener('submit', submitFormProfile);

//Открытие окна редактирования профиля
addButtonProfile.addEventListener('click', function (){
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  openPopup(popupProfile);
});

//Закрытие всех модальных окон

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
  closePopupOverlay (popupProfile);
  closePopupOverlay (popupMesto);
  closePopupOverlay (popupPhoto);
  document.addEventListener('keydown', closePopupEsc);
});

//Открытие окна добавление карточки
  addButtonPhoto.addEventListener('click', function (){
    openPopup(popupMesto);
  });

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
  const deleteElement = cardElement.querySelector('.element__button-trash');

  deleteElement.addEventListener('click', (evt) => {
      cardElement.remove();
  });

   //Лайк карточки
  const elementLikes = cardElement.querySelector('.element__button-like');

  elementLikes.addEventListener('click', (evt) => {
     evt.target.classList.toggle('element__button-like_active');
  });

   //Открытие модального окна/фото карточки
    photoElement.addEventListener("click", () => {
      popupImg.src = element.link;
      popupPhotoTitle.textContent = element.name;
      popupImg.alt = element.name;
      openPopup(popupPhoto);
    });
    return cardElement;
  }

  //Функция формы
  function displayCard(element) {
    elementsContainer.prepend(addCard(element));
  }

  //Добавление карточек из кода
  initialCards.forEach(displayCard);

// Функция формы добавления карточки/очистка инпутов
function SubmitFormMesto(evt) {
  evt.preventDefault ();

  const newElement = {
    name: mestoName.value,
    link: mestoLink.value
  };

  displayCard(newElement);
  closePopup(popupMesto);

  evt.target.reset()

}
formMesto.addEventListener ('submit', SubmitFormMesto);


