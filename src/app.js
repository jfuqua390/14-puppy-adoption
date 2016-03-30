import PuppyView from 'puppy-view';

export default class ApplicationView {
  constructor() {
    this.puppyinfo = [];
  fetch(`http://tiny-tn.herokuapp.com/collections/ryan-puppy`)
    .then(r => r.json())
    .then(data => {
      console.log(data); //delete after working
      data.forEach(puppy => {
        console.log(puppy); //delete after complete
        let x = new PuppyView(puppy._id, puppy.name, puppy.age, puppy.photoUrl, puppy.profile);
        // console.log(x);
      })
    })
  }

  }
