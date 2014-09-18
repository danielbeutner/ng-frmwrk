'use strict';

/**
 * @desc 
 * @ngInject
 */
function {{tag}}Factory(){
  var {{tag}} = {};

  
  return {{tag}};
}


/**
 * @desc module definition
 */
angular.module('{{tag}}',[])
  .factory('{{tag}}', {{tag}}Factory);
