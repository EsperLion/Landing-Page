app.controller('MainController', ['$scope', '$route', '$routeParams', '$location', '$http', '$data', function($scope, $route, $routeParams, $location, $http, $data){
  var mainCtrl = this;

  mainCtrl.mobMenuState = false;

  mainCtrl.route = "";

  mainCtrl.lang = $data.getLang() != null ? $data.getLang() : 'en';

  mainCtrl.content = {};

  mainCtrl.updatePath = function () {
    setTimeout(function () {
      mainCtrl.route = $location.path();
      if (mainCtrl.route == "/about") {
        $('#carousel-example-generic').carousel({interval: 1500});
        $('#carousel-example-generic').carousel('cycle');
      }
    }, 1500);
  };
  mainCtrl.updatePath();

  $scope.$watch(function () {
    return mainCtrl.lang;
  }, function (newVal, oldVal) {
    
    $data.saveLang(mainCtrl.lang);

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