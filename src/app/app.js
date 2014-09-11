require('angular');
require('angular-route');

// Relative paths to include services.js and filters.js into your bundle
require('./services');
require('./filters');
require('./home/home.js');
require('./about/about.js');

// then include them into your app
angular.module('frmwrk', ['ngRoute', 'frmwrk.filters', 'frmwrk.services'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'app/home/home.tpl.html'});
    $routeProvider.when('/about', {templateUrl: 'app/about/about.tpl.html'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);