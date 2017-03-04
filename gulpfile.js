const gulp = require('gulp')
const postcss = require('gulp-postcss')
const concatCss = require('gulp-concat-css')
const autoprefixer = require('autoprefixer')
const livereload = require('gulp-livereload')
const uncss = require('gulp-uncss')
const sass = require('gulp-sass')

var cssFiles = [
  './assets/css/*.css',
  './assets/css/*.scss',
  './assets/fontello-cf/css/fontello.css'
]

gulp.task('default', ['css', 'css:watch'])

gulp.task('css:watch', function () {
  livereload({start: true})
  livereload.listen()
  return gulp.watch(cssFiles, ['css'])
})

gulp.task('css', function () {
  const processors = [
    require('postcss-clean'),
    autoprefixer({browsers: ['last 2 version']})
  ]
  return gulp.src(cssFiles)
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(concatCss('main.min.css'))
  .pipe(postcss(processors))
  .pipe(uncss({
    html: ['index.html', '_site/**/*.html']
  }))
  .pipe(gulp.dest('./dest'))
  .pipe(livereload({ reloadPage: true }))
})
