const gulp = require('gulp')
const postcss = require('gulp-postcss')
const concatCss = require('gulp-concat-css')
const cssnano = require('gulp-cssnano')
const autoprefixer = require('autoprefixer')
const livereload = require('gulp-livereload')

var cssFiles = [ './assets/css/tachyons-build-optimal.css', './assets/css/main.css', './assets/fontello-cf/css/fontello.css' ]

gulp.task('default', ['css', 'css:watch'])

gulp.task('css:watch', function () {
  livereload({start: true})
  livereload.listen()
  return gulp.watch(cssFiles, ['css'])
})

gulp.task('css', function () {
  const processors = [
    require('precss'),
    require('cssnext'),
    require('postcss-clean'),
    autoprefixer({browsers: ['last 2 version']})
  ]
  return gulp.src(cssFiles)
  .pipe(concatCss('main.min.css'))
  .pipe(postcss(processors))
  .pipe(cssnano())
  .pipe(gulp.dest('./dest'))
  .pipe(livereload({ reloadPage: true }))
})
