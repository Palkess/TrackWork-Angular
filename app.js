// dependencies
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/TrackWork');

// create instance of express
var app = express();

// Routes
var userRoutes = require('./server/routes/user.routes.js');

app.use('/user/', userRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public', 'index.html'));
});

// error hndlers
app.use(function(req, res, next) {
  console.log(req);
  var err =  new Error('Not Found...');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.end(JSON.stringify({
    message: err.message,
    error: {}
  }));
});

module.exports = app;
