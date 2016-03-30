
export default class ApplicationView {
  constructor() {
    let puppyinfo = [];
  fetch(`http://tiny-tn.herokuapp.com/collections/ryan-puppy`)
    .then(r => r.json())
    .then(data => {
      console.log(data); //delete after working
      data.forEach(puppy => {
        this.name = puppy.name;
        this.age = puppy.age;
        this.photoUrl = puppy.photoUrl;
        this.profile = puppy.profile;
        puppyinfo.push(this.name, this.age, this.photoUrl, this.profile); //pushes all details to puppyinfo array
        this.render();
      });
    })
  }

  render(){
    let pupcard = document.querySelector('.puppy-card');
    pupcard.innerHTML = ``;
    pupcard.innerHTML = `
    <div class="puppy-card__image">
      <img src="${this.photoUrl}" alt="" className="puppy-card__pic"/>
    </div>
    <div class="puppy-card__form">
      <ul class="puppy-card__form-inputs">
        <li class="puppy-card__form-inputs-item">
          <h6 class="inputs-item__label">Name</h6>
          <input type="text" class="inputs-item__input" value="${this.name}">
        </li>
        <li class="puppy-card__form-inputs-item">
          <h6 class="inputs-item__label">Age</h6>
          <input type="text" class="inputs-item__input" value="${this.age}">
        </li>
        <li class="puppy-card__form-inputs-item">
          <h6 class="inputs-item__label">Photo URL</h6>
          <input type="text" class="inputs-item__input" value="${this.photoUrl}">
        </li>
        <li class="puppy-card__form-inputs-item">
          <h6 class="inputs-item__label">Profile</h6>
          <input type="text" class="inputs-item__input" value="${this.profile}">
        </li>
      </ul>
    </div>`
  }
}
