const mongoose = require('mongoose');

const userSchama = new mongoose.Schema({
  userName:{
    type: String,
    required: true
  },
  hashedPass:{
    type: String,
    required: true
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
