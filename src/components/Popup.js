export default class Popup {
  constructor(containerSelector){
    this.container = document.querySelector(containerSelector);
  }

  open(){
    this.container.classList.add('popup_opened');
    document.addEventListener("keydown", this._handleEscClose.bind(this));
  }

  close(){
    this.container.classList.remove('popup_opened');
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt){
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    const obj = this;
    this.container.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup__button-close-icon') || evt.target.classList.contains('popup_opened')){
        obj.close();
      }
    });
  }
}
