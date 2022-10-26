import "../pages/index.css";
import {enableValidation, selectors} from "./validate";
// import { SubmitFormMesto } from "./card";
// import { openPopup } from "./modal";
// import { submitFormProfile } from "./utils";


export const addButtonProfile = document.querySelector('.profile__button');
export const addButtonPhoto = document.querySelector('.profile__button-photo');
export const popupProfile = document.querySelector('#popup-profile');
export const closePopupProfile = document.querySelector('#popup-profile-close');

export const profileName = document.querySelector('.profile__name');
export const profileAbout = document.querySelector('.profile__about');
export const nameInput = document.querySelector('#input-name');
export const aboutInput = document.querySelector('#input-about');
export const formProfile = document.querySelector('#form-profile');
export const formMesto = document.querySelector("#edit-mesto");
export const popupMesto = document.querySelector('#popup-mesto');
export const closePopupMesto = document.querySelector('#popup-mesto-close');

export const popupPhoto = document.querySelector('#popup-photo');
export const closePopupPhoto = document.querySelector('#popup-photo-close');
export const popupImg = document.querySelector('.popup__img');
export const popupPhotoTitle = document.querySelector('.popup__photo-title');
export const elementsContainer = document.querySelector('.elements__container');
export const contentElements = document.querySelector('.elements');

export const mestoName = document.querySelector('#mesto-title');
export const mestoLink = document.querySelector('#mesto-link');


export const closeButtons = document.querySelectorAll('.popup__close');

const initialCards = [
  {
    name: 'До встречи!',
    link: 'https://images.unsplash.com/photo-1599833975787-5c143f373c30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80'
  },
  {
    name: 'Вернулись в Лондон',
    link: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
  },
  {
    name: 'Показываем Розе конец земли',
    link: 'https://images.unsplash.com/photo-1653525749885-46a75af1eb5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80'
  },
  {
    name: 'Запарковал?!',
    link: 'https://images.unsplash.com/photo-1655315149741-177f3aad852b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
  },
  {
    name: 'Никогда не надоест',
    link: 'https://images.unsplash.com/photo-1575824928808-abc8ae6cfbfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80'
  },
  {
    name: 'В пути',
    link: 'https://img.freepik.com/free-photo/3d-hyperspace-background-with-warp-tunnel-effect_1048-12526.jpg?t=st=1661697965~exp=1661698565~hmac=e9126f3e9d8afbc6d5a1cf66aec58da0771c53ae0f8169607bc70dc1a4804657'
  }
];

initialCards.reverse();


//Функция открытие модальных окон
function openPopup(popup)  {
  popup.classList.add('popup_opened');
  document.addEventListener("keydown", closePopupEsc);
}

//Функция закрытия модальных окон
function closePopup(popup)  {
  popup.classList.remove('popup_opened');
  document.removeEventListener("keydown", closePopupEsc);
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
  closePopupOverlay (popup);
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

enableValidation(selectors);



