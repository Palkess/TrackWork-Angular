/**
* @desc images slideshow using FlexSlider 2
* @example <flex-slideshow></div>
*/
angular
    .module('TrackWorkApp')
    .directive('flexSlideshow', flexSlideShow);

function flexSlideShow() {
  function drawSlideshow() {
    var element = $("slideshow-image");
    var attrs = element[0].attributes;
    console.log(attrs.src.value);
  }
  return {
    restrict: 'EA',
    link: drawSlideshow
  };
}
