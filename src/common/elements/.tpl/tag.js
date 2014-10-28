
'use strict';

/**
 * @desc
 * @ngInject
 */
function {{tag}}Directive() {
  return {
    restrict: 'E',
    scope: {
        product: '@',
        title: '@',
        ctrl: '=',
        searchCtrl: '='
    },
    templateUrl: 'common/elements/{{tag}}/{{tag}}.jade'
  };
}


angular.module('frmwrk.element.{{tag}}', [])
  .directive('{{tag}}', {{tag}}Directive);
