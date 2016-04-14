/**
* @desc images slideshow using FlexSlider 2
* @example <flex-slideshow></div>
*/
angular
    .module('TrackWorkApp')
    .directive('flexSlideshow', flexSlideShow);

function flexSlideShow() {
  function drawSlideshow($scope, element, attrs) {
    console.log(element);

    element.flexslider({
      animation: "slide"
    });
  }

  return {
    restrict: 'EA',
    link: drawSlideshow
  };
}
