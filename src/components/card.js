// import {
//   popupMesto,
//   elementsContainer,
//   mestoName,
//   mestoLink,
// } from "./index";

// import { closePopup } from "./modal";


// const initialCards = [
//     {
//       name: 'До встречи!',
//       link: 'https://images.unsplash.com/photo-1599833975787-5c143f373c30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80'
//     },
//     {
//       name: 'Вернулись в Лондон',
//       link: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
//     },
//     {
//       name: 'Показываем Розе конец земли',
//       link: 'https://images.unsplash.com/photo-1653525749885-46a75af1eb5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80'
//     },
//     {
//       name: 'Запарковал?!',
//       link: 'https://images.unsplash.com/photo-1655315149741-177f3aad852b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
//     },
//     {
//       name: 'Никогда не надоест',
//       link: 'https://images.unsplash.com/photo-1575824928808-abc8ae6cfbfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80'
//     },
//     {
//       name: 'В пути',
//       link: 'https://img.freepik.com/free-photo/3d-hyperspace-background-with-warp-tunnel-effect_1048-12526.jpg?t=st=1661697965~exp=1661698565~hmac=e9126f3e9d8afbc6d5a1cf66aec58da0771c53ae0f8169607bc70dc1a4804657'
//     }
//     ];

//     initialCards.reverse();


//Функция формы
function displayCard(element) {
  elementsContainer.prepend(addCard(element));
}


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
};

// export { displayCard, SubmitFormMesto };
