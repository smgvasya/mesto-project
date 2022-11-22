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

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
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
