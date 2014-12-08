angular.module('frmwrk.app.tpl', ['app/components/components.jade', 'app/home/home.jade']);

angular.module("app/components/components.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/components/components.jade",
    "<div class=\"container-fluid\">\n" +
    "  <h1>Components</h1>\n" +
    "</div>");
}]);

angular.module("app/home/home.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/home/home.jade",
    "<div class=\"container-fluid\">\n" +
    "  <div class=\"jumbotron\">\n" +
    "    <h1>ng-frmwrk</h1>\n" +
    "    <p>Angluar JS / CSS / Framework</p><a href=\"#/components\" class=\"btn btn-primary\">I want more!</a>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"panel panel-info\">\n" +
    "        <div class=\"panel-heading\">Angular JS inside</div>\n" +
    "        <div class=\"panel-body\">The most flexible JavaScript MVW-Framework. Made for performance and nice apps.</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"panel panel-info\">\n" +
    "        <div class=\"panel-heading\">Bootstrap GUI</div>\n" +
    "        <div class=\"panel-body\">The most powerful and sleek CSS Framework. With native Angular JS support.</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"panel panel-info\">\n" +
    "        <div class=\"panel-heading\">Grunt / Express support</div>\n" +
    "        <div class=\"panel-body\">The most famous task runner and built in http server. Right at your hands. Everything's automatic.</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);
