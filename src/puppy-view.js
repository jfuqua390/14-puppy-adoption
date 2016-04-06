
export default class PuppyView {
  constructor(puppy, app) {
    this.puppy = puppy;
    this.app = app;

    this.el = document.createElement(`li`);
    this.el.classList.add(`puppy-card`);

    this.createPupcard();
    this.renderpup();
    this.deletepup();
    this.updatepup();
  }

  createPupcard() {
    this.el.innerHTML = `
    <div class="puppy-card__image">
      <img src="" alt="" class="puppy-card__pic"/>
    </div>
    <div class="puppy-card__form">
      <ul class="puppy-card__form-inputs">
        <li class="puppy-card__form-inputs-item">
          <h6 class="inputs-item__label">Name</h6>
          <input type="text" class="puppy-card__inputs-item__input puppy-name" value="">
        </li>
        <li class="puppy-card__form-inputs-item">
          <h6 class="inputs-item__label">Age</h6>
          <input type="text" class="puppy-card__inputs-item__input puppy-age" value="">
        </li>
        <li class="puppy-card__form-inputs-item">
          <h6 class="inputs-item__label">Photo URL</h6>
          <input type="text" class="puppy-card__inputs-item__input puppy-photo" value="">
        </li>
        <li class="puppy-card__form-inputs-item">
          <h6 class="inputs-item__label">Profile</h6>
          <input type="text" class="puppy-card__inputs-item__input puppy-profile" value="">
        </li>
      </ul>
      <div class ="button-row">
      <button class ="puppy-card__button delete-button">Delete</button>
      <button class ="puppy-card__button update-button">Update</button>
      </div>
    </div>`;
  }

  renderpup() {
    this.el.querySelector(`.puppy-card__pic`).src = this.puppy.photoUrl;
    this.el.querySelector(`.puppy-name`).value = this.puppy.name;
    this.el.querySelector(`.puppy-age`).value = this.puppy.age;
    this.el.querySelector(`.puppy-photo`).value = this.puppy.photoUrl;
    this.el.querySelector(`.puppy-profile`).value = this.puppy.profile;
  }

  deletepup() {
    this.el.querySelector(`.delete-button`).addEventListener(`click`, () => {
      fetch(`${this.app.url}/${this.puppy._id}`, {
        method: `Delete`,
      }).then(() => {
        this.app.remove(this.puppy);
      });
    });
  }

  updatepup() {
    this.el.querySelector(`.update-button`).addEventListener(`click`, () => {
      const values = {
        name: this.el.querySelector(`.puppy-name`).value,
        age: this.el.querySelector(`.puppy-age`).value,
        photoUrl: this.el.querySelector(`.puppy-photo`).value,
        profile: this.el.querySelector(`.puppy-profile`).value,
      };
      console.log(values);
      fetch(`${this.app.url}/${this.puppy._id}`, {
        method: `PUT`,
        headers: {
          Accept: `application/JSON`,
          'Content-type': `application/JSON`,
        },
        body: JSON.stringify(values)
      })
    .then((r) => r.json())
    .then((data) => {
      Object.assign(data, values);
      this.renderpup();
    });
    });
  }
}
