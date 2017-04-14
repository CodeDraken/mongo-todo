const mongoose = require('mongoose');

let User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

module.exports = {User};

// let newUser = new User({
//   email: 'test@gmail.com'
// });

// newUser.save().then((doc) => {
//   console.log('user added: ', doc);
// }, (e) => {
//   console.log(e);
// });
