// Routes for user
var express = require('express');
var router = express.Router();
var User = require('../models/user.model.js');
var md5 = require('md5');

router.post('/create', function(req, res){
  var salt = Math.random();

  var newUser = new User({
    "email": req.body.email,
    "firstname": req.body.firstname,
    "lastname": req.body.lastname,
    "password": md5(req.body.password + salt),
    "salt": salt,
    "accesstoken": md5(req.body.email + salt),
    "isAdmin": false
  });

  newUser.save();

  res.status(200).json({
    "message": "The user has been created!"
  });
});

router.post('/login', function(req, res){
  User.findOne({ "email": req.body.email }, function(err, document){
    if(err){
      res.status(500).json({
        "data": {
          "message": err
        }
      });
    } else if(document != {}) {
      if(md5(req.body.password + document.salt) == document.password){
        res.status(200).json({
          "data": {
            "message": "The user was successfully recognized.",
            "accesstoken": document.accesstoken
          }
        })
      } else {
        res.status(401).json({
          "data": {
            "message": "Wrong password."
          }
        });
      }
    } else {
      res.status(404).json({
        "data": {
          "message": "User not found."
        }
      });
    }
  });
});

module.exports = router;
