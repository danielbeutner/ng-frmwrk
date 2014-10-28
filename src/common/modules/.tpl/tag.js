'use strict';

/**
 * @desc
 * @ngInject
 */
function {{tag}}Directive() {
  return {
    restrict: 'E',
    controller: function(){},
    transclude:true,
    replace:true,
    scope: {
        product: '@',
        title: '@',
        ctrl: '=',
        searchCtrl: '='
    },

    templateUrl: 'common/modules/{{tag}}/{{tag}}.jade'
  };
}


angular.module('frmwrk.module.{{tag}}', [])
  .directive('{{tag}}', {{tag}}Directive);
