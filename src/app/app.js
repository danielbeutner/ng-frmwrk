require('angular');
require('angular-route');

// Relative paths to include services.js and filters.js into your bundle
require('./services');
require('./filters');

// then include them into your app
angular.module('frmwrk', ['ngRoute', 'frmwrk.filters', 'frmwrk.services'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html'});
    $routeProvider.when('/docs', {templateUrl: 'partials/docs.html'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);