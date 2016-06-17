// Routes for user
var express = require('express');
var router = express.Router();
var User = require('../models/user.model.js');
var Authenticate = require('../modules/authenticate.module.js');
var md5 = require('md5');

router.post('/register', function(req, res){
  var error = false;

  if(!req.body.email){ error = 'Email not set'; }
  if(!req.body.firstname){ error = 'Firstname not set'; }
  if(!req.body.lastname){ error = 'Lastname not set'; }
  if(!req.body.password){ error = 'Password not set'; }

  if(!error){
    var salt = Math.random();

    User.find({ email: req.body.email }, function(err, document){
      if(err){
        res.status(500).json({
          "message": "Internal server error"
        });
      } else {
        if(document.length){
          res.status(500).json({
            "message": "Already existing email"
          });
        } else {
          var newUser = new User({
            "email": req.body.email,
            "firstname": req.body.firstname,
            "lastname": req.body.lastname,
            "password": md5(req.body.password + salt),
            "salt": salt,
            "accesstoken": md5(req.body.email + salt),
            "isAdmin": 0
          });

          newUser.save();

          res.status(200).json({
            "message": "The user has been created!"
          });
        }
      }
    });
  } else {
    res.status(500).json({
      "message": error
    });
  }
});

router.post('/update', function(req, res){
  Authenticate.isValid(req.body.accesstoken)
    .then(function(user){
      if(user === null){
        res.status(401).json({
          'message': 'Unauthorized action'
        });
      } else {
        User.findOneAndUpdate({'_id': user._id}, req.body.updatedContent, function(err, doc){
          if(err){
            res.status(500).json({
              'message': err
            });
          } else {
            res.status(200).json({
              'message': 'Your user has been updated!'
            });
          }
        })
      }
    });
});

router.post('/login', function(req, res){
  User.findOne({ "email": req.body.email }, function(err, document){
    if(err){
      res.status(500).json({
        "message": err
      });
    } else if(document) {
      if(md5(req.body.password + document.salt) == document.password){
        res.status(200).json({
          "message": "The user was successfully recognized.",
          "firstname": document.firstname,
          "lastname": document.lastname,
          "isAdmin": document.isAdmin,
          "created": document.created,
          "accesstoken": document.accesstoken
        })
      } else {
        res.status(401).json({
          "message": "Wrong password."
        });
      }
    } else {
      res.status(404).json({
        "message": "User not found."
      });
    }
  });
});

module.exports = router;
