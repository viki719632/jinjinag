var $$ = require('gulp-load-plugins')();
let uglifyEs = require('gulp-uglify-es').default;
var pipes = {
    sourceMap: {},
    js: {},
    css: {},
    rev: {},
    git: {},
    html: {},
};

var lazypipe = require('lazypipe');

pipes.plumber = lazypipe()
    .pipe($$.plumber);

// pipes.rev.init = lazypipe()
//     .pipe($$.rev);
//
// pipes.rev.write = lazypipe()
//     .pipe($$.rev.manifest,{
//         merge: true,
//     });
//
// pipes.rev.collector = lazypipe()
//     .pipe($$.revCollector,{
//         replaceReved: true,
//     });

pipes.sourceMap.init = lazypipe()
    .pipe($$.sourcemaps.init);

pipes.sourceMap.write = lazypipe()
    .pipe($$.sourcemaps.write,'.');

pipes.js.import = lazypipe()
    .pipe($$.imports);

pipes.js.babel = lazypipe()
    .pipe($$.babel,{
        presets: ['@babel/preset-env']
    });

pipes.js.js = pipes.sourceMap.init
    .pipe(pipes.js.import)
    .pipe(pipes.js.babel)
    // .pipe(pipes.rev.init)
    .pipe(pipes.sourceMap.write);

pipes.css.less = lazypipe()
    .pipe($$.less);

pipes.git.add = lazypipe()
    .pipe($$.git.add);

// pipes.git.rm = lazypipe()
//     .pipe($$.rm, {
//         read: false
//     });

pipes.html.combine = lazypipe()
    .pipe($$.useref);

pipes.html.include = lazypipe()
    .pipe($$.fileInclude,{
        prefix: '@@',
        basepath: '@file',
        indent: true,
        context: {
            '@@img_path': './img/',
        }
    });

pipes.git.rmFile = lazypipe()
    .pipe($$.git.rm, {args: '-f -r --ignore-unmatch -q'});

pipes.css.base64 = lazypipe()
    .pipe($$.base64,{
        maxImageSize: 20 * 1024, // bytes
    });

pipes.css.autoprefixer = lazypipe()
    .pipe($$.autoprefixer,{
        browsers: ['since 2015', 'iOS 7', 'ie 8-11'],
        emove: false, //是否去掉不必要的前缀 默认：true
        remove: false,
    });

pipes.css.css = pipes.sourceMap.init
    .pipe(pipes.css.less)
    .pipe(pipes.css.base64)
    .pipe(pipes.css.autoprefixer)
    // .pipe(pipes.rev.init)
    .pipe(pipes.sourceMap.write);

pipes.clean = lazypipe()
    .pipe($$.clean,{
        read: false
    });

pipes.css.minify = lazypipe()
    .pipe($$.cleanCss);

pipes.js.minify = lazypipe()
    .pipe(uglifyEs);

pipes.js.buildJs = lazypipe()
    .pipe(pipes.js.js)
    .pipe(pipes.js.minify);


module.exports = pipes;