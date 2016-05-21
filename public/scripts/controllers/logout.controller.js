/***
 * LogoutController - Controller for logout.template.html
 *
 */
angular
    .module('TrackWorkApp')
    .controller('LogoutController', ['$state', '$timeout', '$location', 'UserService', LogoutController]);

function LogoutController($state, $timeout, $location, UserService) {
  var vm = this;

  vm.counter = 10;
  UserService.logout();

  function countDown(){
    if(vm.counter == 0){
      if($state.current.name == 'logout'){
        $location.path('/home');
      }
    } else {
      vm.counter--;
      myTimeout = $timeout(countDown, 1000);
    }
  }

  var myTimeout = $timeout(countDown, 1000);
}
