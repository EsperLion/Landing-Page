app.service('$data', ['$http', function(){
  
  this.saveLang = function (lang) {
    localStorage.setItem('lang', lang);
  };

  this.getLang = function () {
    return localStorage.getItem('lang');
  };

  this.getPost = function () {
    return localStorage.getItem('postId');
  };

  this.savePost = function (postId) {
    localStorage.setItem('postId', postId);
  };

}]);