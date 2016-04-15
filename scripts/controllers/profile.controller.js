/***
 * ProfileController - Controller for the profile-template
 *
 */
angular
    .module('TrackWorkApp')
    .controller('ProfileController', ProfileController);

function ProfileController() {
  var vm = this;

  vm.message = "Hi, I'm profile";
}
