require('angular');
require('angular-route');

// Relative paths to include services.js and filters.js into your bundle
require('./services');
require('./filters');
require('./common.js');
require('./templates.js');

// then include them into your app
angular.module('frmwrk', ['ngRoute', 'frmwrk.templates', 'frmwrk.filters', 'frmwrk.services'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'app/home/home.jade'});
    $routeProvider.when('/about', {templateUrl: 'app/about/about.jade'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);