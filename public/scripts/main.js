var trackworkApp = angular.module('TrackWorkApp', ['ui.router', 'ngStorage', 'chart.js']);

trackworkApp.run(['UserService', '$state', '$rootScope', function(UserService, $state, $rootScope) {

  // Checking if state is protected before entering it
  $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {

    // Check if the next state is protected by authentication
    if(toState.protected) {
      if(!UserService.isAuthenticated()){
        e.preventDefault();
        $state.go('index');
      } else {

        // Check if the next state is classified to normal users i.e only accessible to admins
        if(toState.classified){
          if(!UserService.isAdmin()){
            e.preventDefault();
            $state.go('index');
          }
        }
      }
    }
  });

}]);

trackworkApp.config(function($stateProvider, $urlRouterProvider) {

  // Default state
  $urlRouterProvider.otherwise('/home');

  // Setting up the states
  $stateProvider
    .state('index', {
      url: '/home',
      templateUrl: 'partials/index.template.html',
      controller: 'IndexController',
      controllerAs: 'index'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'partials/login.template.html',
      controller: 'LoginController',
      controllerAs: 'login'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'partials/register.template.html',
      controller: 'RegisterController',
      controllerAs: 'register'
    })
    .state('logout', {
      url: '/logout',
      templateUrl: 'partials/logout.template.html',
      controller: 'LogoutController',
      controllerAs: 'logout',
      protected: true
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'partials/profile.template.html',
      controller: 'ProfileController',
      controllerAs: 'profile',
      protected: true
    })
    .state('profile.edit', {
      url: '/edit',
      templateUrl: 'partials/profile.edit.template.html',
      protected: true
    })
    .state('schedule', {
      url: '/schedule',
      templateUrl: 'partials/schedule.template.html',
      controller: 'ScheduleController',
      controllerAs: 'schedule',
      protected: true
    })
    .state('reports', {
      url: '/reports',
      templateUrl: 'partials/reports.template.html',
      controller: 'ReportsController',
      controllerAs: 'reports',
      protected: true
    })
    .state('404', {
      url: '/404',
      template: '<h1>404 - Not found</h1>'
    });
});
