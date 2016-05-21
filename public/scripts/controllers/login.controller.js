/***
 * LoginController - Controller for login.template.html
 *
 */
angular
    .module('TrackWorkApp')
    .controller('LoginController', ['UserService', LoginController]);

function LoginController(UserService) {
  var vm = this;

  vm.login = function(){
    UserService.login(vm.user.email, vm.user.password)
      .then(function(message){
        console.log(message);
      }, function(message){
        console.log(message);
      });
  };
}
