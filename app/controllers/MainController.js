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

    //переместиться вверх на новой странице
    document.body.scrollTop = 0;
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

  mainCtrl.addAnim = function (e) {
    e.target.classList.add('pulse')
  };

  mainCtrl.removeAnim = function (e) {
    e.target.classList.remove('pulse')
  };

  mainCtrl.sendForm = function (e) {
    e.target.parentElement.classList.add('fadeOutRight');
    document.querySelector('.form .thanks').style.zIndex = 0;
    document.querySelector('.form .thanks').classList.add('fadeInLeft');
    // e.target.parentElement.style.display = "none";
  };

  mainCtrl.openForm = function (e) {
    var elem = document.querySelector('.pop-up');
    elem.style.zIndex = 10;
    elem.classList.remove('fadeOut');
    elem.classList.add('fadeIn');
  };

  mainCtrl.closeForm = function (e) {
    var elem = document.querySelector('.pop-up');
    elem.classList.remove('fadeIn');
    elem.classList.add('fadeOut');
    elem.addEventListener("animationend", function (e) {
      if (!e.target.classList.contains('fadeIn'))
        e.target.style.zIndex = -10;
    }, false);
  };
}]);