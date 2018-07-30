var src = {
    svg: "svg/",
    scss: "scss/"
}

var dest = {
    css: "css/",
    fonts: "fonts/",
    png: "png/"
}


var gulp = require("gulp"),
  svg2png = require('gulp-svg2png-update'),
  sass = require('gulp-sass');
 
gulp.task('svg2png', function () {
    gulp.src(src.svg + '**/*.svg')
        .pipe(svg2png({
            width:192,
            height:192
        }))
        .pipe(gulp.dest(dest.png + '/192x192'));

    gulp.src(src.svg + '**/*.svg')
        .pipe(svg2png({
            width:96,
            height:96
        }))
        .pipe(gulp.dest(dest.png + '/96x96'));
        
    gulp.src(src.svg + '**/*.svg')
        .pipe(svg2png({
            width:48,
            height:48
        }))
        .pipe(gulp.dest(dest.png + '/48x48'));
});

gulp.task('sass', function () {
    return gulp.src(src.scss + 'stc-icons.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(dest.css));
});

/**
 * Watch SASS files 
 */
gulp.task('sass:watch', function () {
    gulp.watch(src.scss, ['sass']);
});