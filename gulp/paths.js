var paths = {
    src: {
        dir: './src/',
        default: {
        },
        mobile: {
        },
    },
    dest: {
        dir: './dest/',
        default: {
        },
        mobile: {
        },
    },
    entry: {},
};

paths.src.default.dir = paths.src.dir + 'default/';
paths.src.default.css = paths.src.default.dir + 'css/';
paths.src.default.js = paths.src.default.dir + 'js/';
paths.src.default.img = paths.src.default.dir + 'img/';
paths.src.default.component = paths.src.default.dir + 'component/';

paths.src.mobile.dir = paths.src.dir + 'mobile/';
paths.src.mobile.css = paths.src.mobile.dir + 'css/';
paths.src.mobile.js = paths.src.mobile.dir + 'js/';
paths.src.mobile.img = paths.src.mobile.dir + 'img/';
paths.src.mobile.component = paths.src.mobile.dir + 'component/';

paths.dest.default.dir = paths.dest.dir + 'default/';
paths.dest.default.css = paths.dest.default.dir + 'css/';
paths.dest.default.img = paths.dest.default.dir + 'img/';
paths.dest.default.js = paths.dest.default.dir + 'js/';

paths.dest.mobile.dir = paths.dest.dir + 'mobile/';
paths.dest.mobile.css = paths.dest.mobile.dir + 'css/';
paths.dest.mobile.img = paths.dest.mobile.dir + 'img/';
paths.dest.mobile.js = paths.dest.mobile.dir + 'js/';

// 入口文件路径
//js
paths.entry.js =  './app.js'; //根据项目的实际情况修改

// 入口css
paths.entry.css= './style.less'; //根据项目的实际情况修改

module.exports = paths;