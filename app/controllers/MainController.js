app.controller('MainController', ['$route', '$routeParams', '$location', function( $route, $routeParams, $location){
  var mainCtrl = this;

  mainCtrl.mobMenuState = false;

  mainCtrl.route = "";

  mainCtrl.activePost = {};

  mainCtrl.updatePath = function () {
    setTimeout(function () {
      mainCtrl.route = $location.path();
      if (mainCtrl.route == "/about") {
        $('#carousel-example-generic').carousel({ interval: 1500});
        $('#carousel-example-generic').carousel('cycle');
      }
    }, 1500);
  };
  mainCtrl.updatePath();

  mainCtrl.openPost = function (post) {
    mainCtrl.activePost = {};
    mainCtrl.activePost = post;    
  };
}]);