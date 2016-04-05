

export default class FormView {
  constructor(el, app) {
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
}
