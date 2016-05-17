/***
 * ProfileController - Controller for the profile-template
 *
 */
angular
    .module('TrackWorkApp')
    .controller('ProfileController', ProfileController);

function ProfileController() {
  var vm = this;

  vm.name = "Jonas Andersson";
  vm.birthday = "12-02-1984";
  vm.email = "jonas@jonasanderssonweb.se";
  vm.bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet massa ac molestie accumsan. Nulla velit purus, aliquet nec felis nec, pulvinar placerat est. Vivamus dapibus sapien eu nunc bibendum laoreet. Fusce molestie erat sapien, id scelerisque urna maximus ut.";

  vm.save = function() {
    alert("Your profile has been saved!");
  };

}
