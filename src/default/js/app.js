//import("vars.js");
//import("utils.js");
//import("functions.js");
//import("rem.js");


$(function () {
    new Swiper('.index-swiper .swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.page-index .swiper-button-next',
            prevEl: '.page-index .swiper-button-prev',
        },
        effect : 'flip',
        flipEffect: {
            slideShadows : true,
            limitRotation : true,
        }
    });
});