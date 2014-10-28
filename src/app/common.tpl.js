angular.module('frmwrk.common.tpl', ['common/elements/grid/grid.jade', 'common/modules/grid/grid.jade']);

angular.module("common/elements/grid/grid.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/elements/grid/grid.jade",
    "<h1>grid</h1>\n" +
    "<div>Please add a tempalte to your new tag grid</div>");
}]);

angular.module("common/modules/grid/grid.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/modules/grid/grid.jade",
    "<div>Inner content:\n" +
    "  <div ng-transclude=\"ng-transclude\"></div>\n" +
    "</div>");
}]);
