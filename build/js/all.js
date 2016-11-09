var app = angular.module('App', ['ngRoute']);
//галерея
var images = [
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

window.onload = function () {
    
    //начальна инициализация галереи
    showGallery(images);
    
    //присваиваем обработчики событий
    addTopicListeners();

    //обработчик мобильного меню
    addMenuListener()

    console.log("Page loaded!");
}

function showGallery(imgArr) {
    var cols = document.querySelectorAll('.portfolio .wrap .col');
    if (cols.length > 0) {;
        for(var i = 0; i < imgArr.length; i++){
            for(var j = 0; j < cols.length; j++){
                var img = document.createElement('img');
                img.setAttribute('src',imgArr[i]['url']);
                img.setAttribute('class','show');
                cols[j].appendChild(img);
                i++;
            }
            i--;
        }    
    }
}

function addTopicListeners(){
    var lis = document.querySelectorAll('.cats li');
    if (lis.length > 0) {
        for(var i = 0; i < lis.length; i++){
            lis[i].onclick = chooseTopic;
        }
    }
}

function chooseTopic(){
    var data = this.dataset;
    
    //добавляем стили к элементу списка
    var lis = document.querySelectorAll('.cats li');
    for(var i = 0; i < lis.length; i++){
        lis[i].classList.remove('active');
    }
    this.classList.add('active');
    
    //удаление старых картинок
    var imgs = document.querySelectorAll('.wrap .col img');
    for(var i = 0; i < imgs.length; i++){
        imgs[i].closest('.col').removeChild(imgs[i]);
    }
    
    //отбор картинок
    var uniqImsg = [];
    for(var i = 0; i < images.length; i++){
        if(data.topic == images[i]['topic']){
            uniqImsg.push(images[i]);
        }
    }
    
    if(uniqImsg.length == 0){
        uniqImsg = images;
    }
    
    //вывод картинок
    var cols = document.querySelectorAll('.potrfolio .wrap .col');
    showGallery(uniqImsg);
    
}

function addMenuListener() {
    var menuIco = document.querySelector('header .menu-mob .mob-menu-img');
    menuIco.onclick = tapMenu();
}

function tapMenu() {
    var state = false;
    return function () {
        state = !state;
        var menu = document.querySelector('header .menu-mob');
        console.log(menu.style.height);
        if (state) {
            menu.style.height = '260px';
        } else {
            menu.style.height = '100px';
        }
    } 
}
app.config(['$routeProvider',function($routeProvider) {
  $routeProvider
    .when('/', {
      templateurl: "index.html"
    })
    .when('/service', {
      templateUrl: "service.html"
    })
    .when('/about', {
      templateUrl: "about.html"
    })
    .when('/blog', {
      templateUrl: "blog.html"
    })
    .when('/contact', {
      templateUrl: "contact.html"
    })
}]);