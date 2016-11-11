app.controller('MainController', ['$scope', '$route', '$routeParams', '$location', '$http', function($scope, $route, $routeParams, $location, $http){
  var mainCtrl = this;

  mainCtrl.mobMenuState = false;

  mainCtrl.route = "";

  mainCtrl.activePost = {};

  mainCtrl.activeComms = [];

  mainCtrl.lang = "en";

  mainCtrl.content = {};

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

  $scope.$watch(function () {
    return mainCtrl.lang;
  }, function (newVal, oldVal) {
    $http.get('app/lang/' + mainCtrl.lang + ".json")
      .success(function (data, status) {
        console.log("http request succeed");
        console.log(status);
        console.log(data);
        mainCtrl.content = data;
      })
      .error(function (data, status) {
        console.log("http request has an error");
        console.log(status);
        console.log(data);
      });
  });
}]);