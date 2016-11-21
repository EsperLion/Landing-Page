app.service('$data', ['$http', function(){
  
  this.saveLang = function (lang) {
    localStorage.setItem('lang', lang);
  };

  this.getLang = function () {
    return localStorage.getItem('lang');
  };

  this.getPost = function () {
    return JSON.parse(localStorage.getItem('post'));
  };

  this.savePost = function (post) {
    localStorage.setItem('post', JSON.stringify(post));
  };

  this.saveComms = function (comms) {
    localStorage.setItem('comms', JSON.stringify(comms));
  };

  this.getComms = function () {
    return JSON.parse(localStorage.getItem('comms'));
  };
}]);