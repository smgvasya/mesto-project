export default class UserInfo {
  constructor({nameElementSelector, infoElementSelector, avatarElementSelector, _id}){
    this._name = document.querySelector(nameElementSelector);
    this._info = document.querySelector(infoElementSelector);
    this._avatar = document.querySelector(avatarElementSelector);
  }

  getUserInfo() {
    return{
      name: this._name.textContent,
      about: this._info.textContent,
      avatar: this._avatar.src
    };
  }

  getUserId(){
    return this._id;
  }

  setUserInfo({name = this._name.textContent, about = this._info.textContent, avatar = this._avatar.src, _id = this._id}) {
    this._name.textContent = name;
    this._info.textContent = about;
    this._avatar.src = avatar;
    this._id = _id;
  }

}
