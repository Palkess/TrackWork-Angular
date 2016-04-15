/***
 * IndexController - Controller for index.template.html
 *
 */
angular
    .module('TrackWorkApp')
    .controller('IndexController', IndexController);

function IndexController() {
  var vm = this;
  vm.message = "Hi, I'm index";
}
