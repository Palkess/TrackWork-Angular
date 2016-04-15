/***
 * NavigationController - Controller for the navbar in index.html
 *
 */
angular
    .module('TrackWorkApp')
    .controller('NavigationController', NavigationController);

function NavigationController($location) {
  var vm = this;

  vm.isActive = function(path) {
    return ($location.path().substr(0, path.length) === path) ? 'active' : '';
  };
}
