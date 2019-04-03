var src = {
    svg: "svg/",
    scss: "scss/",
    js: "js/src/"
}

var dest = {
    css: "css/",
    fonts: "fonts/",
    png: "png/"
}


var gulp = require("gulp"),
  svg2png = require('gulp-svg2png-update'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  each = require('gulp-each');
 
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


 
gulp.task('svgtojson', function() {
    var json = {};
    var fs = require('fs');
    return gulp.src(src.svg + '*.svg')
        .pipe(each(function(content, file, callback) {
            // content is a string containing the code
            // do with it as you'd like
            var rx = /^.+\\([\w\-\_]+)\.\w+$/;
            var arr = rx.exec(file.path);
            console.log(file.path);
            var title = arr[1];
            content = content.replace(/(\r|\n|\r\n)/gm, " ");
            var rx = /^.+path d\=\"(.+)\".*$/ig;
            var arr = rx.exec(content);
            json[title] = [192, 192, [], "f26e", arr[1]];
 
            // file is the original Vinyl file object
 
            // return the new content using the callback
            // the first argument is an error, if you encounter one
            callback(null, json);

            fs.writeFileSync('js/src/fstc-icons.js', 'var icons = ' + JSON.stringify(json) + ';')
        }))
});

gulp.task('concat', ['svgtojson'], function() {
    return gulp.src([
        src.js + 'fstc-start.js',
        src.js + 'fstc-icons.js',
        src.js + 'fstc-end.js',
        src.js + 'fontawesome.js',
    ])
    .pipe(concat('fstc.js'))
    .pipe(gulp.dest('js'))
    .pipe(rename('fstc.min.js'))
    .pipe(uglify())
.pipe(gulp.dest('js'));
});

/**
 * Watch SASS files 
 */
gulp.task('sass:watch', function () {
    gulp.watch(src.scss, ['sass']);
});