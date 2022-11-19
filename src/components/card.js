export default class Card {
  static cardTemplate = document.querySelector('#card-template').content;

  constructor({cardId, owner, link, name, likes}, userId, cardTemplate, handleCardClick, handleDelCard, handleLikeClick) {
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDelCard = handleDelCard;
    this._userId = userId;
    this._cardTemplate = cardTemplate;
    this.id = cardId;
    this._isMine = this._checkIsOurCard(owner);
    this._link = link;
    this._name = name;
    this._likes = likes;
    this._cardElement = this._cardTemplate.querySelector('.element').cloneNode(true);
    this.photoElement = this._cardElement.querySelector('.element__photo');
    this._titleElement = this._cardElement.querySelector('.element__title');
    this._likeElementCount = this._cardElement.querySelector('.element__like-count');
    this._deleteElement = this._cardElement.querySelector('.element__button-trash');
    this._elementLikes = this._cardElement.querySelector('.element__button-like');
    this._generateCard();
  }

  _removeElement = () => {
    this._deleteElement.remove();
  }

  _checkIsOurCard(owner){
    return this._userId === owner._id;
  }

  _listenerDelCard = this._handleDelCard;//.bind(this);

  _listenerClickCard = this._handleCardClick;//.bind(this);

  _listenerLikeCard = this._handleLikeClick;//.bind(this);

  _showDelBtn = () =>{
    if (this._isMine) {
      this._deleteElement.addEventListener('click', () => this._listenerDelCard);
    } else {
      this._removeElement();
    }
  }

  _hasMineLike = () =>{
    const likeUser = this._likes.some((userInfo) => {
      return userInfo._id === this._userId;
    });
    return likeUser;
  }

  _showLikeCount = () => {
    this._likeElementCount.textContent = this._likes.length;
  }

  _toggleLikeActive = (element) => {
    element.classList.toggle('element__button-like_active');
  }

  setLikeCount(newLikes){
    this._elementLikes = newLikes;
    this._showLikeCount();
    this._toggleLikeActive(elementLikes);
  }

  _generateCard(){
    this._titleElement.textContent = this._name
    this.photoElement.src = this._link
    this.photoElement.alt = this._name
    this.photoElement.addEventListener("click", this._listenerClickCard);
    this._showLikeCount();
    this._showDelBtn();
    if (this._hasMineLike()) {
      toggleLikeActive(elementLikes);
    }
    this._elementLikes.addEventListener('click', this._listenerLikeCard);
  }

  getCard(){
    return this._cardElement;
  }

}
