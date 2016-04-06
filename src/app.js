import PuppyView from 'puppy-view';
import FormView from 'form-view';

export default class ApplicationView {
  constructor() {
    this.form = document.querySelector(`.top-nav-form__inputs`);
    this.list = document.querySelector(`.row`);
    this.url = `http://tiny-tn.herokuapp.com/collections/jf-puppies`;
    this.puppyinfo = [];

    fetch(this.url)
    .then((r) => r.json())
    .then((data) => {
      this.data = data;
      this.renderapp();
    });

    this.formview = new FormView(this.form, this);
    this.renderapp();
  }

  renderapp() {
    this.list.innerHTML = ``;
    this.data.forEach((puppy) => {
      const x = new PuppyView(puppy, this);

      this.list.appendChild(x.el);
    });
  }

  add(puppy) {
    fetch(this.url, {
      method: `POST`,
      headers: {
        Accept: `application/JSON`,
        'Content-type': `application/JSON`,
      },
      body: JSON.stringify(puppy),
    })
    .then((r) => r.json())
    .then((result) => {
      this.data = [result, ...this.data];
      this.renderapp();
    });
  }

  remove(puppy) {
    this.data = this.data.filter((current) => {
      return current !== puppy;
    });
    this.renderapp();
  }
}
