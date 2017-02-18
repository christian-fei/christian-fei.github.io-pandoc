const gulp = require('gulp')
const postcss = require('gulp-postcss')
const concatCss = require('gulp-concat-css')
const cssnano = require('gulp-cssnano')
const autoprefixer = require('autoprefixer')


var cssFiles = [ './assets/css/*.css', './node_modules/normalize.css/normalize.css', './assets/fontello-cf/css/fontello.css' ]

gulp.task('default', ['css:watch'])

gulp.task('css:watch', function () {
  gulp.watch(cssFiles, ['css'])
})

gulp.task('css', function () {
  const processors = [
    require('precss'),
    require('cssnext'),
    require('postcss-clean'),
    autoprefixer({browsers: ['last 1 version']})
  ]
  return gulp.src(cssFiles)
  .pipe(concatCss('main.min.css'))
  .pipe(postcss(processors))
  .pipe(cssnano())
  .pipe(gulp.dest('./dest'))
})
