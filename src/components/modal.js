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
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};


//Функция закрытия мадальных окон при клике на оверлей
function closePopupOverlay (popup) {
  popup.addEventListener('mousedown', (evt) => {
    if(evt.target === evt.currentTarget){
      closePopup(popup);
    };
  });
}

  export { openPopup, closePopup, closePopupEsc, closePopupOverlay };

