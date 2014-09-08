require('angular');
require('angular-route');

// Relative paths to include services.js and filters.js into your bundle
require('./services');
require('./filters');

// then include them into your app
angular.module('myApp', ['ngRoute', 'myApp.filters', 'myApp.services'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);