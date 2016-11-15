var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  userName: String,
  password: String,
  city: String,
  zipCode: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;
