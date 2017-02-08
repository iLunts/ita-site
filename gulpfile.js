var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('uglify-js', function (cb) {
  pump([
        gulp.src('view/**/*.js'),
        uglify(),
        gulp.dest('dist')
    cb
  );
});
