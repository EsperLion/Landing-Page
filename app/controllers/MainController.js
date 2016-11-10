app.controller('MainController', ['$route', '$routeParams', '$location', function( $route, $routeParams, $location){
  var mainCtrl = this;

  mainCtrl.mobMenuState = false;

  mainCtrl.route = "";

  mainCtrl.activePost = {};

  mainCtrl.activeComms = [];

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

  mainCtrl.openPost = function (post, comms) {

    mainCtrl.activePost = {};
    mainCtrl.activePost = post;

    mainCtrl.activeComms = [];
    for (var i = 0; i < comms.length; i++) {
      if (post.post_id == comms[i].post_id) {
        mainCtrl.activeComms.push(comms[i]);
      }
    }
  };
}]);