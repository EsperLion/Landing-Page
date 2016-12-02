var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
 


gulp.task('default', ['compile-sass', 'prefix', 'watch']);


//sass compile task
gulp.task('compile-sass', function () {
  return gulp.src('scss/home.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'));
});

//watcher
gulp.task('watch', function () {
  gulp.watch('scss/*.scss', ['compile-sass']);
});


gulp.task('prefix', function () {
  gulp.src('build/css/home.css')
    .pipe(autoprefixer({
      browsers: ['last 5 versions', 'IE 10'],
      cascade: false
    }))
    .pipe(gulp.dest('build/css/'))
});