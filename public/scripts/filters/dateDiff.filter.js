/***
 * DateDiff - A filter for comparing two dates and return the difference
 *
 */
angular
    .module('TrackWorkApp')
    .filter('dateDiff', DateDiff);

function DateDiff() {
  var millisecondsPerDay = 1000*60*60*24;

  return function(startDate, endDate, property) {
    if(startDate && endDate){
      var diff = 0;
      var start = new Date(startDate);
      var end = new Date(endDate);

      var diff = (start - end) / 1000;
      var diff = Math.abs(Math.floor(diff));

      var days = Math.floor(diff / (24 * 60 * 60));
      var leftSec = diff - days * 24*60*60;

      var hrs = Math.floor(leftSec / (60 * 60));
      var leftSec = leftSec - hrs * 60 * 60;

      var min = Math.floor(leftSec / (60));
      var leftSec = leftSec - min * 60;

      if(property == 'd') {
        diff = days;
      } else if(property == 'h') {
        diff = hrs;
      } else if(property == 'm') {
        diff = min;
      } else if(property == 's') {
        diff = leftSec;
      } else {
        throw "Error dateDiff-filter: No valid property selected! {d, h, m, s}";
      }

      return diff;
    }
  }
}
