import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(containerSelector){
    super(containerSelector);

    this._img = this._container.querySelector('.popup__img');
    this._title = this._container.querySelector('.popup__photo-title');
  }

  open({src, alt}) {
    this._img.src = src;
    this._img.alt = alt;
    this._title.textContent = alt;
    super.open();
  }
}
