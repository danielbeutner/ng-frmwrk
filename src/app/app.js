require('angular');
require('angular-route');

// Relative paths to include required templates into your bundle
require('./common.tpl.js');
require('./app.tpl.js');

// then include them into your app
angular.module('frmwrk',
                [
                  'ngRoute',
                  'frmwrk.app.tpl',
                  'frmwrk.common.tpl'
                ]
              )
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'app/home/home.jade'
      })
      .when('/components', {
        templateUrl: 'app/components/components.jade'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }]);