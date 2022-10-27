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
  if (evt.key === 'Escape') {
    const popup = document.querySelectorAll('.popup');
    popup.forEach((popup) =>  closePopup(popup))
  }
};


//Функция закрытия мадальных окон при клике на оверлей
function closePopupOverlay (popup) {
  popup.addEventListener('click', (evt) => {
    if(evt.target === evt.currentTarget){
      closePopup(popup);
    };
  });
}

  export { openPopup, closePopup, closePopupEsc, closePopupOverlay };

