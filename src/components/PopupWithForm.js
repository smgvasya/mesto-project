// Кроме селектора попапа принимает в конструктор колбэк сабмита формы. В этом колбэке содержится метод класса Api.

// Содержит приватный метод _getInputValues, который собирает данные всех полей формы.

// Перезаписывает родительский метод setEventListeners.
// Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.

// Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.

// Для каждого попапа создавайте свой экземпляр класса PopupWithForm.

import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(containerSelector, handleSubmitForm){
    super(containerSelector);
    this._handleSubmitForm = handleSubmitForm.bind(this);
    this.form = this._container.querySelector('.form');
    this._inputList = this._container.querySelectorAll('.form__input');
  }

  _getInputValues(){
    const formValues = {};
    this._inputList.forEach(input => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener('submit', (evt)=>{
      this._handleSubmitForm(evt, this._getInputValues());
    });
  }

  close() {
    this.form.reset();
    super.close();
  }
}
