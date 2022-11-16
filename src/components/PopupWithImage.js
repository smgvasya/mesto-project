import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(containerSelector){
    super(containerSelector);

    this._img = this._container.querySelector('.popup__img');
    this._title = this._container.querySelector('.popup__photo-title');
  }

  open({name, link}) {
    this._img.src = link;
    this._img.alt = name;
    this._title.textContent = name;
    super.open();
  }
}
