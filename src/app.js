import PuppyView from 'puppy-view';

export default class ApplicationView {
  constructor() {
    this.puppyinfo = [];
    fetch(`http://tiny-tn.herokuapp.com/collections/ryan-puppy`)
    .then((r) => r.json())
    .then((data) => {
      this.data = data;
      this.renderapp();
    });
  }

  renderapp() {
    const puppylist = document.querySelector(`.row`);
    puppylist.innerHTML = ``;
    this.data.forEach((puppy) => {
      new PuppyView(puppy._id, puppy.name, puppy.age, puppy.photoUrl, puppy.profile);
    });
  }
}
