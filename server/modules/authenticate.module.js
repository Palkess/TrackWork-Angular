/**
 * AuthenticateModule - Module for authenticating users through their accesstoken
 *
 *
 */
var User = require('../models/user.model.js');

var exports = module.exports;

exports.isValid = function(accessToken) {
  var query = User.findOne({accessToken: accessToken});
  return query.exec();
};
