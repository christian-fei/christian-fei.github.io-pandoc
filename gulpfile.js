const gulp = require('gulp')
const postcss = require('gulp-postcss')
const concatCss = require('gulp-concat-css')
const autoprefixer = require('autoprefixer')
const livereload = require('gulp-livereload')
const uncss = require('gulp-uncss')
const stylus = require('gulp-stylus')

const srcFiles = [
  './assets/css/*.styl'
]

gulp.task('default', ['css:watch'])

gulp.task('css:watch', function () {
  livereload({start: true})
  livereload.listen()
  return gulp.watch(srcFiles, ['stylus:watch'])
})

gulp.task('stylus:watch', function () {
  return gulp.src(srcFiles)
  .pipe(stylus())
  .pipe(concatCss('main.min.css'))
  .pipe(gulp.dest('./dest'))
  .pipe(livereload({ reloadPage: '/' }))
})

gulp.task('css', function () {
  const processors = [
    require('postcss-clean'),
    autoprefixer({browsers: ['last 2 version']})
  ]
  return gulp.src(srcFiles)
  .pipe(postcss(processors))
  .pipe(uncss({
    html: ['index.html', '_site/**/*.html']
  }))
  .pipe(concatCss('main.min.css'))
  .pipe(gulp.dest('./dest'))
})
