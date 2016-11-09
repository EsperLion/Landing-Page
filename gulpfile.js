var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');



gulp.task('default', ['compile-sass', 'concat-js', 'watch']);


//sass compile task
gulp.task('compile-sass', function () {
  return gulp.src('scss/home.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'));
});

//js task
gulp.task('concat-js', function () {
  return gulp.src('js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('build/js'));
});


//watcher
gulp.task('watch', function () {
  gulp.watch('scss/*.scss', ['compile-sass']);
  gulp.watch('js/*.js', ['concat-js']);
});