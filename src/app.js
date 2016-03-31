import PuppyView from 'puppy-view';

export default class ApplicationView {
  constructor() {
    this.puppyinfo = [];
  fetch(`http://tiny-tn.herokuapp.com/collections/ryan-puppy`)
    .then(r => r.json())
    .then(data => {
      this.data = data;
      this.renderapp();
      })

  }
  renderapp() {
    this.data.forEach(puppy => {
      let x = new PuppyView(puppy._id, puppy.name, puppy.age, puppy.photoUrl, puppy.profile);
    });
  }
}
