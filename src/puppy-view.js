
export default class PuppyView {
  constructor(id, name, age, photoUrl, profile) {
    this.pupcard = document.querySelector('.puppy-card');
    this.newcard = document.createElement('div');
    this.newcard.classList.add('puppy-card')
    this.row = document.querySelector('.row');
    this.newcard.innerHTML = `
    <div class="puppy-card__image">
      <img src="${photoUrl}" alt="" className="puppy-card__pic"/>
    </div>
    <div class="puppy-card__form">
      <ul class="puppy-card__form-inputs">
        <li class="puppy-card__form-inputs-item">
          <h6 class="inputs-item__label">Name</h6>
          <input type="text" class="puppy-card__inputs-item__input" value="${name}">
        </li>
        <li class="puppy-card__form-inputs-item">
          <h6 class="inputs-item__label">Age</h6>
          <input type="text" class="puppy-card__inputs-item__input" value="${age}">
        </li>
        <li class="puppy-card__form-inputs-item">
          <h6 class="inputs-item__label">Photo URL</h6>
          <input type="text" class="puppy-card__inputs-item__input" value="${photoUrl}">
        </li>
        <li class="puppy-card__form-inputs-item">
          <h6 class="inputs-item__label">Profile</h6>
          <input type="text" class="puppy-card__inputs-item__input" value="${profile}">
        </li>
      </ul>
    </div>`;
    this.row.appendChild(this.newcard);
    console.log(this.newcard);
  }
  renderpup(){
      }

}
