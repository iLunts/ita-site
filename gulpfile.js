var gulp = require('gulp');
// var uglify = require('gulp-uglifyjs');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var concatCss = require('gulp-concat-css');
var concat = require('gulp-concat');

gulp.task('default', ['scripts', 'minify-css'], function() {});

gulp.task('scripts', function() {
  return gulp.src(['scripts/*.js', 'view/**/*.js'])
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('web-src/js/'));
});

gulp.task('minify-css', function() {
    return gulp.src('content/css/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(concatCss('style.min.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('web-src/css/'));
});

gulp.task('watch', function() {
    gulp.watch(['content/less/**/*.less', 'view/**/*.*', 'scripts/**/*.*'], ['default']);
});

// Watch
// gulp.task('watch-less', 'minify-css', function() {});
// gulp.task('watch-all', ['minify-css', 'uglify-js'], function() {});
