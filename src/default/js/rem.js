function fontRem() {
    var designW = 1920;
    var html = document.getElementsByTagName('html')[0];
    var winW = html.offsetWidth;
    html.style.fontSize = winW / designW * 100 + 'px';
};


fontRem();
$(window).on('resize', function () {
    fontRem();
});