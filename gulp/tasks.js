const port =  7001; //请对不同的项目设置不同的端口

let paths = require('./paths');
let pipes = require('./pipes');

let gulp = require('gulp');
let $$ = require('gulp-load-plugins')();
let runSequence = require('run-sequence');

let browserSync = require('browser-sync').create();
let reload = browserSync.reload;
let stream = browserSync.stream;

gulp.task('server', ()=> {
    browserSync.init({
        port: port,
        server: {
            baseDir: './dest/'
        }
    });
});

gulp.task('default:html:combine',()=>{
    return gulp.src(paths.dest.default.dir + '*.html')
        .pipe(pipes.plumber())
        .pipe(pipes.html.combine())
        .pipe(gulp.dest(paths.dest.default.dir));
});

gulp.task('mobile:html:combine',()=>{
    return gulp.src(paths.dest.mobile.dir + '*.html')
        .pipe(pipes.plumber())
        .pipe(pipes.html.combine())
        .pipe(gulp.dest(paths.dest.mobile.dir));
});

gulp.task('default:html',(cb)=>{
    return runSequence('default:html:include','default:html:combine',cb);
});

gulp.task('mobile:html',(cb)=>{
    return runSequence('mobile:html:include','mobile:html:combine',cb);
});

gulp.task('default:html:include',()=>{
    return gulp.src(paths.src.default.dir + '*.html')
        .pipe(pipes.plumber())
        .pipe(pipes.html.include())
        .pipe(gulp.dest(paths.dest.default.dir))
});

gulp.task('mobile:html:include',()=>{
    return gulp.src(paths.src.default.dir + '*.html')
        .pipe(pipes.plumber())
        .pipe(pipes.html.include())
        .pipe(gulp.dest(paths.dest.default.dir))
});

// gulp.task('default:css:clean',()=>{
//     return gulp.src(paths.dest.default.css)
//         .pipe(pipes.clean());
// });
//
// gulp.task('default:js:clean',()=>{
//     return gulp.src(paths.dest.default.js)
//         .pipe(pipes.clean());
// });
//
// gulp.task('mobile:css:clean',()=>{
//     return gulp.src(paths.dest.mobile.css)
//         .pipe(pipes.clean());
// });
//
// gulp.task('mobile:js:clean',()=>{
//     return gulp.src(paths.dest.mobile.js)
//         .pipe(pipes.clean());
// });

// gulp.task('default:clean',(cb)=>{
//     return runSequence(['default:css:clean','default:js:clean'],cb);
// });

// gulp.task('mobile:clean',(cb)=>{
//     return runSequence(['mobile:css:clean','mobile:js:clean'],cb);
// });

gulp.task('default:img',()=>{
    return gulp.src(paths.src.default.img + '**/*.*')
        .pipe(pipes.plumber())
        .pipe(gulp.dest(paths.dest.default.img));
});

gulp.task('mobile:img',()=>{
    return gulp.src(paths.src.mobile.img + '**/*.*')
        .pipe(pipes.plumber())
        .pipe(gulp.dest(paths.dest.mobile.img));
});

gulp.task('default:less',()=>{
    return gulp.src(paths.src.default.css + paths.entry.css)
        .pipe(pipes.plumber())
        .pipe(pipes.css.css())
        .pipe(gulp.dest(paths.dest.default.css))
        .pipe(stream());

});

gulp.task('mobile:less',()=>{
    return gulp.src(paths.src.mobile.css + paths.entry.css)
        .pipe(pipes.plumber())
        .pipe(pipes.css.css())
        .pipe(gulp.dest(paths.dest.mobile.css))
        .pipe(stream());
});

gulp.task('default:js',()=>{
    return gulp.src(paths.src.default.js + paths.entry.js)
        .pipe(pipes.plumber())
        .pipe(pipes.js.js())
        .pipe(gulp.dest(paths.dest.default.js));
});

gulp.task('default:js:minify',()=>{
    return gulp.src(paths.dest.default.js + '*.js')
        .pipe(pipes.plumber())
        .pipe(pipes.js.minify())
        .pipe(gulp.dest(paths.dest.default.js));
});

gulp.task('default:css:minify',()=>{
    return gulp.src(paths.dest.default.css + '*.css')
        .pipe(pipes.plumber())
        .pipe(pipes.css.minify())
        .pipe(gulp.dest(paths.dest.default.css));
});

gulp.task('mobile:js',()=>{
    return gulp.src(paths.src.mobile.js + paths.entry.js)
        .pipe(pipes.plumber())
        .pipe(pipes.js.js())
        .pipe(gulp.dest(paths.dest.mobile.js));
});

gulp.task('mobile:js:minify',()=>{
    return gulp.src(paths.dest.mobile.js + '*.js')
        .pipe(pipes.plumber())
        .pipe(pipes.js.minify())
        .pipe(gulp.dest(paths.dest.mobile.js));
});

gulp.task('mobile:css:minify',()=>{
    return gulp.src(paths.dest.mobile.css + '*.css')
        .pipe(pipes.plumber())
        .pipe(pipes.css.minify())
        .pipe(gulp.dest(paths.dest.mobile.css));
});

gulp.task('init:default',(cb)=>{
    return runSequence([
        'default:html:include',
        'default:less',
        'default:js',
        'default:img'
    ],'default:html:combine',cb);
});
gulp.task('init:mobile',(cb)=>{
    return runSequence([
        'mobile:html:include',
        'mobile:less',
        'mobile:js',
        'mobile:img'
    ],'mobile:html:combine',cb);
});

gulp.task('default:build',(cb)=>{
    return runSequence([
        'default:html:include',
        'default:less',
        'default:js',
        'default:img'
    ],['default:html:combine','default:css:minify','default:js:minify'],cb);
});

gulp.task('mobile:build',(cb)=>{
    return runSequence([
        'mobile:html:include',
        'mobile:less',
        'mobile:js',
        'mobile:img'
    ],['mobile:html:combine','mobile:css:minify','mobile:js:minify'],cb);
});

gulp.task('build',(cb)=>{
    return runSequence(['default:build','mobile:build'],cb);
});

gulp.task('init',(cb)=>{
    return runSequence(['init:default','init:mobile'],cb);
});

gulp.task('default:reload',['init:default','server'],()=>{
    gulp.watch(paths.src.default.dir + '**/*.html',['default:html']);
    gulp.watch(paths.dest.default.dir + '*.html').on('change',()=>{
        reload();
    });
    gulp.watch(paths.src.default.img + '**/*.*',['default:img']);
    gulp.watch(paths.src.default.css + '*.less',['default:less']);
    gulp.watch(paths.src.default.js + '*.js',['default:js']);
    gulp.watch(paths.dest.default.js + '*.js').on('change',()=>{
        reload();
    });
    gulp.watch(paths.dest.default.dir + '*.html').on('change',()=>{
        reload();
    });
});

gulp.task('mobile:reload',['init:mobile','server'],()=>{
    gulp.watch(paths.src.mobile.dir + '**/*.html',['mobile:html']);
    gulp.watch(paths.dest.mobile.dir + '*.html').on('change',()=>{
        reload();
    });
    gulp.watch(paths.src.mobile.img + '**/*.*',['mobile:img']);
    gulp.watch(paths.src.mobile.css + '*.less',['mobile:less']);
    gulp.watch(paths.src.mobile.js + '*.js',['mobile:js']);
    gulp.watch(paths.dest.mobile.js + '*.js').on('change',()=>{
        reload();
    });
    gulp.watch(paths.dest.mobile.dir + '*.html').on('change',()=>{
        reload();
    });
});

gulp.task('reload',['init','default:reload','mobile:reload'],()=>{
});
