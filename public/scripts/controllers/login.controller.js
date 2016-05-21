/***
 * LoginController - Controller for login.template.html
 *
 */
angular
    .module('TrackWorkApp')
    .controller('LoginController', ['$state', 'UserService', LoginController]);

function LoginController($state, UserService) {
  var vm = this;

  vm.login = function(){
    UserService.login(vm.user.email, vm.user.password)
      .then(function(message){
        console.log(message);
        $state.go('profile');
      }, function(message){
        console.log(message);
      });
  };
}
