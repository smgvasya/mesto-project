export default class Popup {
constructor(){

}
open(){

}
close(){

}
_handleEscClose(){
//Функция закрытия мадальных окон по esc
// function closePopupEsc (evt) {
//   if (evt.key === 'Escape') {
//     const popup = document.querySelector('.popup_opened');
//     closePopup(popup);
//  }
// };
}

 setEventListeners() {
    //Содержит публичный метод setEventListeners, который добавляет слушатель клика
    //иконке закрытия попапа. Модальное окно также закрывается при клике на затемнённую
    //область вокруг формы.
  }
}


//   //Функция открытие модальных окон
// function openPopup(popup)  {
//   popup.classList.add('popup_opened');
//   document.addEventListener("keydown", closePopupEsc);
// }

// //Функция закрытия модальных окон
// function closePopup(popup)  {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener("keydown", closePopupEsc);
// }

// //Функция закрытия мадальных окон при клике на оверлей
// function closePopupOverlay (popup) {
//   popup.addEventListener('mousedown', (evt) => {
//     if(evt.target === evt.currentTarget){
//       closePopup(popup);
//     };
//   });
// }

// export { openPopup, closePopup, closePopupEsc, closePopupOverlay };
