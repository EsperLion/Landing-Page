app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: "views/home.html",
      controller: "HomeController as homeCtrl"
    })
    .when('/service', {
      templateUrl: "views/service.html"
    })
    .when('/about', {
      templateUrl: "views/about.html"
    })
    .when('/blog', {
      templateUrl: "views/blog.html",
      controller: "BlogController as blogCtrl"
    })
    .when('/contact', {
      templateUrl: "views/contact.html"
    })
    .otherwise('/', {
      templateUrl: "views/home.html",
      controller: "HomeController as homeCtrl"
    });
}]);