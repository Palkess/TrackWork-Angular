// Routes for entries
var express = require('express');
var router = express.Router();
var Entry = require('../models/entry.model.js');

router.post('/add', function(req, res){

  var newEntry = new Entry(req.body);

  newEntry.save();

  res.status(200).json({
    'message': 'Complete'
  });
});

router.post('/getAll', function(req, res){
  Entry.find({ owner: req.body.owner }, function(err, documents){
    if(err){
      res.status(500).json({
        'message': err
      });
    } else {
      res.status(200).json({
        'documents': documents
      });
    }
  });
});

module.exports = router;
