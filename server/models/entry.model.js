// Model for Entry
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Entry = new Schema({
  'owner': String,
  'description': String,
  'start': Date,
  'end': Date,
  'overtime': Boolean,
  'holiday': Boolean,
  'created': { type: Date, default: Date.now }
});

module.exports = mongoose.model('entries', Entry);
