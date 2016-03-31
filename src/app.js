import PuppyView from 'puppy-view';

export default class ApplicationView {
  constructor() {
    this.savebutton = document.querySelector('#POST-submit');
    this.savebutton.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.formname = document.querySelector('#POST-name').value;
      this.formage = document.querySelector('#POST-age').value;
      this.formphotoUrl = document.querySelector('#POST-photoUrl').value;
      this.formprofile = document.querySelector('#POST-profile').value;
      this.pupinfo = {
        name: this.formname,
        age: this.formage,
        photoUrl: this.formphotoUrl,
        profile: this.formprofile,
      };
      // console.log(this.formname, this.formage, this.formphotoUrl, this.formprofile)
      fetch(`http://tiny-tn.herokuapp.com/collections/jf-puppies`, { method : `POST` })
      .then(r => r.json())
      .then((data) => {
        Object.assign(this.pupinfo, data);
      })

    })
    this.puppyinfo = [];
    fetch(`http://tiny-tn.herokuapp.com/collections/jf-puppies`)
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
