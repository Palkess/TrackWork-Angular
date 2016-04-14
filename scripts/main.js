var trackworkApp = angular.module('TrackWorkApp', ['ui.router']);

trackworkApp.controller('IndexController', function ($scope) {
  this.message = 'Homeawdwadadadadad';

  console.log("wdawd");

});

trackworkApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/404");
  //
  // Now set up the states
  $stateProvider
    .state('index', {
      url: "/",
      templateUrl: "partials/index.html",
      controller: "IndexController",
      controllerAs: "v"
    })
    .state('404', {
      url: '/404',
      template: "<h1>404 - Not found</h1>"
    });
});
