var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  donations: String
});

var UserDonations = mongoose.model('UserDonations', userSchema);

module.exports = UserDonations;
