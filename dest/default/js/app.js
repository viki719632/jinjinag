"use strict";

if (!window.vars) {
  window.vars = {};
}

if (!window.utils) {
  window.utils = {};
}

utils.encodeHtml = function (str) {
  var div = document.createElement('div');
  div.innerHTML = str;
  return div.innerText;
};

if (!window.functions) {
  window.functions = {};
}

function fontRem() {
  var designW = 1920;
  var html = document.getElementsByTagName('html')[0];
  var winW = html.offsetWidth;
  html.style.fontSize = winW / designW * 100 + 'px';
}

;
fontRem();
$(window).on('resize', function () {
  fontRem();
});
$(function () {
  new Swiper('.index-swiper .swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.page-index .swiper-button-next',
      prevEl: '.page-index .swiper-button-prev'
    },
    effect: 'flip',
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  });
});
//# sourceMappingURL=app.js.map
