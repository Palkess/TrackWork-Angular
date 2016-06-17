/**
 * AuthenticateModule - Module for authenticating users through their accesstoken
 *
 *
 */
var User = require('../models/user.model.js');

var exports = module.exports;

exports.isValid = function(accessToken) {
  var query = User.findOne({accesstoken: accessToken});
  return query.exec();
};
