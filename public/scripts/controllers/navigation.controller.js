/***
 * NavigationController - Controller for the navbar in index.html
 *
 */
angular
    .module('TrackWorkApp')
    .controller('NavigationController', ['$scope', '$sessionStorage', 'UserService', NavigationController]);

function NavigationController($scope,$sessionStorage, UserService) {
  var vm = this;
  vm.isLoggedIn = false;

  $scope.$watch(function(){ return $sessionStorage.user }, function(){
    if(UserService.isAuthenticated()){
      vm.isLoggedIn = true;
      vm.user = UserService.user();
    } else {
      vm.isLoggedIn = false;
    }
  });
}
