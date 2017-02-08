var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var concatCss = require('gulp-concat-css');

gulp.task('default', ['uglify-js', 'minify-css'], function() {});

gulp.task('uglify-js', function() {
    gulp.src(['scripts/*.js', 'view/**/*.js'])
        .pipe(uglify('app.min.js'))
        .pipe(gulp.dest('web-src/js/'))
});

gulp.task('minify-css', function() {
    return gulp.src('content/css/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(concatCss('style.min.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('web-src/css/'));
});

// Watch
// gulp.task('watch-less', 'minify-css', function() {});
// gulp.task('watch-all', ['minify-css', 'uglify-js'], function() {});
