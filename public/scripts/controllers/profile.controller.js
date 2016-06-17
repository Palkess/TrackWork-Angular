/***
 * ProfileController - Controller for the profile-template
 *
 */
angular
    .module('TrackWorkApp')
    .controller('ProfileController', ['UserService', ProfileController]);

function ProfileController(UserService) {
  var vm = this;
  vm.user = {
    'firstname': UserService.user().firstname,
    'lastname': UserService.user().lastname
  };

  vm.user.birthday = "12-02-1984";
  vm.user.bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet massa ac molestie accumsan. Nulla velit purus, aliquet nec felis nec, pulvinar placerat est. Vivamus dapibus sapien eu nunc bibendum laoreet. Fusce molestie erat sapien, id scelerisque urna maximus ut.";

  /* Reset firstname and lastname when exiting edit */

  vm.save = function() {
    UserService.update({
      'firstname': vm.user.firstname,
      'lastname': vm.user.lastname
    })
      .then(function(message){
        alert(message);
      }, function(message){
        alert(message);
      });
  };

}
