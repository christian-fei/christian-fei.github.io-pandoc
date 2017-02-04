const gulp = require('gulp')
const postcss = require('gulp-postcss')
const concatCss = require('gulp-concat-css')
const cssnano = require('gulp-cssnano')
const autoprefixer = require('autoprefixer')

gulp.task('css', function () {
  const processors = [
    require('precss'),
    require('cssnext'),
    require('postcss-clean'),
    autoprefixer({browsers: ['last 1 version']})
  ]
  return gulp.src(['./assets/css/*.css','./assets/fontello-cf/css/fontello.css'])
    .pipe(concatCss('main.min.css'))
    .pipe(postcss(processors))
    .pipe(cssnano())
    .pipe(gulp.dest('./dest'))
})
