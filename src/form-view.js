

export default class FormView {
  constructor(el, app) {
    const formviewbutton = document.querySelector(`.fa-plus-circle`);
    formviewbutton.addEventListener(`click`, () => {
      this.renderForm();
    });
    this.el = el;
    this.app = app;

    this.el.addEventListener(`submit`, (ev) => {
      ev.preventDefault();

      const name = this.el.querySelector(`#POST-name`).value;
      const age = this.el.querySelector(`#POST-age`).value;
      const photoUrl = this.el.querySelector(`#POST-photoUrl`).value;
      const profile = this.el.querySelector(`#POST-profile`).value;

      const puppy = { name, age, photoUrl, profile };
      this.app.add(puppy);

      this.el.querySelector(`#POST-name`).value = ``;
      this.el.querySelector(`#POST-age`).value = ``;
      this.el.querySelector(`#POST-photoUrl`).value = ``;
      this.el.querySelector(`#POST-profile`).value = ``;
    });
  }
  renderForm() {
    const topnavform = document.querySelector(`.top-nav-form`);
    topnavform.innerHTML = `
    <div class="top-nav-form__container">
      <h1 class="top-nav-form__heading">Add a new puppy</h1>
      <form class="top-nav-form__inputs">
        <label class="top-nav-form__inputs__label" for="POST-name">Name</label>
        <input class="top-nav-form__inputs__input" id="POST-name" type="text" name="name">
        <label class="top-nav-form__inputs__label" for="POST-age">Age</label>
        <input class="top-nav-form__inputs__input" id="POST-age" type="text" name="age">
        <label class="top-nav-form__inputs__label" for="POST-photoUrl">Photo Url</label>
        <input class="top-nav-form__inputs__input" id="POST-photoUrl" type="text" name="photoUrl">
        <label class="top-nav-form__inputs__label" for="POST-profile">Profile</label>
        <input class="top-nav-form__inputs__input" id="POST-profile" type="text" name="profile">
        <input type="submit" class="top-nav-form__save-button" id="POST-submit"></button>
    </form>`;
  }
}
