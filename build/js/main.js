var body = document.body;
console.log(body);
document.addEventListener('scroll', function (e) {
  var hrefs = window.location.href.split('#/');
  console.log("scroll height = " + body.scrollHeight);
  console.log("scroll Top = " + body.scrollTop);
  console.log(window.innerHeight);
  console.log(window);
  if (hrefs[1] == "") {
    showHome(body.scrollTop);
  } else if (hrefs[1] == "service") {
    console.log('2');

  } else if (hrefs[1] == "about") {
    console.log('3');

  } else if (hrefs[1] == "blog") {
    console.log('4');

  }
  showMenu();
  showBottom(body.scrollTop);
});

function showMenu () {
  var menuTop = document.querySelector('.menu-desk');
  var logo = document.querySelector('.logo');

  menuTop.classList.add('fadeInRight');
  logo.classList.add('fadeInLeft');
};

function showBottom (pos) {
  var left = document.querySelector('.form .left');
  var right = document.querySelector('.form .right');

  var bLeft = document.querySelector('footer .left');
  var bRight = document.querySelector('footer .right');

  // var maxPos = (Math.floor(body.scrollHeight / window.innerHeight) - 1) * window.innerHeight;
  var maxPos = ((body.scrollHeight / window.innerHeight) - 1) * window.innerHeight - 150;
  console.log("maxpos="+maxPos);
  if (pos >= maxPos) {
    left.classList.add('fadeInLeft');
    right.classList.add('fadeInRight');

    bLeft.classList.add('fadeInLeft');
    bRight.classList.add('fadeInRight');
  }
};

function showHome (pos) {
  var weAre = document.querySelector('.we-are');
  var img = document.querySelector('.history .image');
  var hist = document.querySelector('.history .hist');

  var cuHead = document.querySelector('.choose-us .head');
  var cuList = document.querySelector('.choose-us .lists');
  var cuImg = document.querySelector('.choose-us .image');

  var pfHead = document.querySelector('.portfolio .header');
  var pfList = document.querySelector('.portfolio .cates');
  var pfImg = document.querySelector('.portfolio .wrap');
  if (pos >= 0 && pos <= 300) {

    weAre.classList.add('fadeInDown');
    img.classList.add('fadeInLeft');
    hist.classList.add('fadeInRight');

  } else if (pos >= 400 && pos <= 500) {

    cuHead.classList.add('fadeInDown');

  } else if (pos >= 800 && pos <= 1100) {

    cuList.classList.add('fadeInLeft');
    cuImg.classList.add('fadeInRight');

  } else if (pos >= 1200 && pos <= 1300) {

    pfHead.classList.add('fadeInDown');

  } else if (pos >= 1700 && pos <= 1900) {

    pfList.classList.add('fadeInLeft');
    pfImg.classList.add('fadeInRight');

  }
};

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    showMenu ();

    showHome(body.scrollTop);

  },300);
});