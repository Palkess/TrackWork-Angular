var trackworkApp = angular.module('TrackWorkApp', ['ui.router']);

trackworkApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/home');
  //
  // Now set up the states
  $stateProvider
    .state('index', {
      url: '/home',
      templateUrl: 'partials/index.template.html',
      controller: 'IndexController',
      controllerAs: 'index'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'partials/profile.template.html',
      controller: 'ProfileController',
      controllerAs: 'profile'
    })
    .state('profile.edit', {
      url: '/edit',
      templateUrl: 'partials/profile.edit.template.html'
    })
    .state('schedule', {
      url: '/schedule',
      templateUrl: 'partials/schedule.template.html',
      controller: 'ScheduleController',
      controllerAs: 'schedule'
    })
    .state('reports', {
      url: '/reports',
      templateUrl: 'partials/reports.template.html',
      controller: 'ReportsController',
      controllerAs: 'reports'
    })
    .state('404', {
      url: '/404',
      template: '<h1>404 - Not found</h1>'
    });
});
