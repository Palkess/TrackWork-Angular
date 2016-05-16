#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
global.webPort = argv.webport ? argv.webport : 3000;

var app = require('./app');

app.set('port', process.env.PORT || global.webPort);

var server = app.listen(app.get('port'), function() {
  console.log('Web port: ' + server.address().port);
});
