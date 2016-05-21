/***
 * RegisterController - Controller for register.template.html
 *
 */
angular
    .module('TrackWorkApp')
    .controller('RegisterController', ['UserService', RegisterController]);

function RegisterController(UserService) {
  var vm = this;

  vm.complete = function(){
    // Connect to userservice and make a register function
    var user = {};
    user.email = vm.user.email.replace(/(<([^>]+)>)/ig,"");
    user.firstname = vm.user.firstname.replace(/(<([^>]+)>)/ig,"");
    user.lastname = vm.user.lastname.replace(/(<([^>]+)>)/ig,"");
    user.password = vm.user.password.replace(/(<([^>]+)>)/ig,"");

    UserService.register(user)
      .then(function(message){
        // Success
        console.log(message);

        vm.status = {
          message: message,
          type: 'success',
          icon: 'check'
        };
      }, function(message){
        // Failure
        console.log(message);

        vm.status = {
          message: message,
          type: 'danger',
          icon: 'times'
        };
      });
  };
}
