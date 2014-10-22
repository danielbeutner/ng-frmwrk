angular.module('templates-views', ['app/about/about.jade', 'app/home/home.jade']);

angular.module("app/about/about.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/about/about.jade",
    "<h1>About</h1>\n" +
    "<h2>About underline</h2>\n" +
    "<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae commodi cum, ipsa ipsam obcaecati dolore reprehenderit incidunt nam est! Ipsam quidem esse cumque asperiores sunt eius, cupiditate dolorum ratione eum.</p>\n" +
    "<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae commodi cum, ipsa ipsam obcaecati dolore reprehenderit incidunt nam est! Ipsam quidem esse cumque asperiores sunt eius, cupiditate dolorum ratione eum.</p>");
}]);

angular.module("app/home/home.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/home/home.jade",
    "<h1>Home</h1>\n" +
    "<h2>Home underline</h2>\n" +
    "<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae commodi cum, ipsa ipsam obcaecati dolore reprehenderit incidunt nam est! Ipsam quidem esse cumque asperiores sunt eius, cupiditate dolorum ratione eum.</p>\n" +
    "<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae commodi cum, ipsa ipsam obcaecati dolore reprehenderit incidunt nam est! Ipsam quidem esse cumque asperiores sunt eius, cupiditate dolorum ratione eum.</p>");
}]);
