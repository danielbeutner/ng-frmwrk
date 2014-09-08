'use strict';

var angular = require('angular');

angular.module('app', [
      require('./modules/login').name,
      require('./modules/charts').name,
      ...
    ])
    .config(require('./common/routes'))
    .constant('version', require('../package.json').version);