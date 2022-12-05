/** @format */

var btnBars = document.querySelector('.fa-bars');
var divLink = document.querySelector('.div-link');
var slide1 = document.querySelector('#div-client-slide1');
var slide2 = document.querySelector('#div-client-slide2');
var slide3 = document.querySelector('#div-client-slide3');
var txtCount = document.querySelector('#txt-count');
var loader = document.querySelector('#loader');
var body = document.body;

var none = 'none';
var block = 'block';
var count = 0;

var isToggle = false;
var isToggleText = '';

//for fade effect
var fadeInInterval;
var fadeOutInterval;

slide1.style.display = block;
txtCount.style.display = none;

btnBars.addEventListener('click', function () {
  isToggleText = isToggle.toString();
  if (isToggleText === 'false') {
    btnBars.classList.replace('fa-bars', 'fa-times');
    divLink.classList.remove('div-link');
    divLink.classList.add('div-link-show');
    isToggle = true;
  } else if (isToggleText === 'true') {
    btnBars.classList.replace('fa-times', 'fa-bars');
    divLink.classList.remove('div-link-show');
    divLink.classList.add('div-link');
    isToggle = false;
  }
});

//To return first Div clients1
slide1.fadeIn = function (timing) {
  var newValue = 0;

  slide1.style.display = none;
  slide2.style.display = block;
  slide3.style.display = none;
  slide1.style.opacity = 1;
  slide2.style.opacity = 1;
  slide3.style.opacity = 1;

  fadeInInterval = setInterval(function () {
    if (newValue < 1) {
      newValue += 0.01;
    } else if (newValue === 1) {
      clearInterval(fadeInInterval);
    }

    slide1.style.opacity = 2;
    slide2.style.opacity = 2;
    slide3.style.opacity = 2;
  }, timing);
};

//To return second Div clients2
slide2.fadeIn = function (timing) {
  var newValue = 0;

  slide1.style.display = none;
  slide2.style.display = none;
  slide3.style.display = block;
  slide1.style.opacity = 1;
  slide2.style.opacity = 1;
  slide3.style.opacity = 1;

  fadeInInterval = setInterval(function () {
    if (newValue < 1) {
      newValue += 0.01;
    } else if (newValue === 1) {
      clearInterval(fadeInInterval);
    }

    slide1.style.opacity = 2;
    slide2.style.opacity = 2;
    slide3.style.opacity = 2;
  }, timing);
};

//To return third Div clients3
slide3.fadeIn = function (timing) {
  var newValue = 0;

  slide1.style.display = block;
  slide2.style.display = none;
  slide3.style.display = none;
  slide1.style.opacity = 1;
  slide2.style.opacity = 1;
  slide3.style.opacity = 1;

  fadeInInterval = setInterval(function () {
    if (newValue < 1) {
      newValue += 0.01;
    } else if (newValue === 1) {
      clearInterval(fadeInInterval);
    }

    slide1.style.opacity = 2;
    slide2.style.opacity = 2;
    slide3.style.opacity = 2;
  }, timing);
};

function animateImage() {
  count++;
  var countText = 0 + count;
  txtCount.textContent = countText + ' %';
  loader.style.width = 0 + count + '%';
  if (countText === 100 && slide1.style.display === block) {
    slide1.style.display = none;
    slide2.style.display = block;
    slide3.style.display = none;
    count = 0;
  } else if (countText === 100 && slide2.style.display === block) {
    slide1.style.display = none;
    slide2.style.display = none;
    slide3.style.display = block;
    // alert("slide 2");
    count = 0;
  } else if (countText === 100 && slide3.style.display === block) {
    slide1.style.display = block;
    slide2.style.display = none;
    slide3.style.display = none;
    // alert("slide 3");
    count = 0;
  }
}

window.setInterval(function () {
  animateImage();
}, 150);

