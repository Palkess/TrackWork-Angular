// Model for User
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  "email": String,
  "firstname": String,
  "lastname": String,
  "password": String,
  "salt": String,
  "accesstoken": String,
  "isAdmin": Boolean,
  "created": { type: Date, default: Date.now }
});

module.exports = mongoose.model('users', User);
