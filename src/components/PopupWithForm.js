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
    this.handleSubmitForm = handleSubmitForm;
    this._form = this.containerSelector.querySelector('.form');
    this._inputList = this.containerSelector.querySelectorAll('.form__input');
  }
  _getInputValues(){
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._submit = this._setSubmitForm.bind(this);
    this.containerSelector.addEventListener('submit', this._submit);
    super.setEventListeners();
  }

  close() {
    evt.preventDefault();
    this._form.reset();
    super.close();
  }
}
