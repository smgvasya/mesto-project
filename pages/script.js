const container = document.querySelector('.page');
const addButtonProfile = container.querySelector('.profile__button');
const addButtonPhoto = container.querySelector('.profile__button-photo');
const elementsContainer = container.querySelector('.elements__container');
const profileName = container.querySelector('.profile__name');
const profileAbout = container.querySelector('.profile__about');
const nameInput = document.querySelector('#edit-profile-name');
const aboutInput = document.querySelector('#edit-profile-about');
const closeButtonProfile = document.querySelector('.popup__button-close');
const popupProfile = container.querySelector('#popup-profile');
const popupMesto = container.querySelector('#popup-profile');
const popupProfileSubmit = container.querySelector('form__profile-submit');



function popupOpened()  {
    popupProfile.classList.add('popup_opened')
};

addButtonProfile.addEventListener('click', popupOpened);


function popupClose()  {
    popupProfile.classList.remove('popup_opened');
};
closeButtonProfile.addEventListener('click', popupClose);


addButtonProfile.addEventListener('click', function(){
    popupOpened(popupProfile);
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
});

function formSubmitHandler (evt) {evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    popupClose(popupProfile);
};

popupProfileSubmit.addEventListener('submit', formSubmitHandler);






    nameInput.value = '';
    aboutInput.value = '';



// const initialCards = [
//     {
//       name: 'Архыз',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//     },
//     {
//       name: 'Челябинская область',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//     },
//     {
//       name: 'Иваново',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//     },
//     {
//       name: 'Камчатка',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//     },
//     {
//       name: 'Холмогорский район',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//     },
//     {
//       name: 'Байкал',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//     }
//     ];
