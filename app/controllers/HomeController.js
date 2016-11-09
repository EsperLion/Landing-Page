app.controller('HomeController',['$route', '$routeParams', '$location', function( $route, $routeParams, $location) {
  var gallCtrl = this;

  gallCtrl.images = [
    {
      url: "img/portfolio/port1.jpg",
      topic: "iron"
    },
    {
      url: "img/portfolio/port2.jpg",
      topic: "black"
    },
    {
      url: "img/portfolio/port3.jpg",
      topic: "white"
    },
    {
      url: "img/portfolio/port4.jpg",
      topic: "busy"
    },
    {
      url: "img/portfolio/port5.jpg",
      topic: "lazy"
    },
    {
      url: "img/portfolio/port6.jpg",
      topic: "lazy"
    },
    {
      url: "img/portfolio/port7.jpg",
      topic: "busy"
    },
    {
      url: "img/portfolio/port8.jpg",
      topic: "white"
    },
    {
      url: "img/portfolio/port9.jpg",
      topic: "black"
    },
    {
      url: "img/portfolio/port2.jpg",
      topic: "iron"
    },
    {
      url: "img/portfolio/port5.jpg",
      topic: "busy"
    },
    {
      url: "img/portfolio/port3.jpg",
      topic: "white"
    }
  ];
  gallCtrl.uniqImgs = [];

  // Начальная инициализация галлереи
  gallCtrl.showGallery = function (imgs) {
    var cols = document.querySelectorAll('.portfolio .wrap .col');
    console.log(imgs);
    if (cols.length > 0) {;
      for(var i = 0; i < imgs.length; i++){
        for(var j = 0; j < cols.length; j++){
          var img = document.createElement('img');
          img.setAttribute('src', imgs[i]['url']);
          img.setAttribute('class', 'show');
          cols[j].appendChild(img);
          i++;
        }
        i--;
      }    
    }
  };
  gallCtrl.showGallery(gallCtrl.images);



  gallCtrl.chooseTopic = function (e) {
    var data = e.currentTarget.dataset;
    
    //добавляем стили к элементу списка
    var lis = document.querySelectorAll('.cats li');
    for(var i = 0; i < lis.length; i++){
      lis[i].classList.remove('active');
    }
    e.currentTarget.classList.add('active');
    
    //удаление старых картинок
    var imgs = document.querySelectorAll('.wrap .col img');
    for(var i = 0; i < imgs.length; i++){
      imgs[i].closest('.col').removeChild(imgs[i]);
    }
    
    //отбор картинок
    gallCtrl.uniqImgs = [];
    for(var i = 0; i < gallCtrl.images.length; i++){
      if(data.topic == gallCtrl.images[i]['topic']){
        gallCtrl.uniqImgs.push(gallCtrl.images[i]);
      }
    }
    
    if(gallCtrl.uniqImgs.length == 0){
      gallCtrl.uniqImgs = gallCtrl.images;
    }
    
    //вывод картинок
    gallCtrl.showGallery(gallCtrl.uniqImgs);
  };

}]);