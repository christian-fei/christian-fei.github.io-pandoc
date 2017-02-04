const gulp = require('gulp')
const postcss = require('gulp-postcss')
const concatCss = require('gulp-concat-css')

const autoprefixer = require('autoprefixer')
const cssnext = require('cssnext')
const precss = require('precss')
const clean = require('postcss-clean')

gulp.task('css', function () {
  const processors = [
    autoprefixer({browsers: ['last 1 version']}),
    cssnext,
    clean,
    precss
  ]
  return gulp.src('./assets/css/*.css')
    .pipe(postcss(processors))
    .pipe(concatCss('main.min.css'))
    .pipe(gulp.dest('./dest'))
  })
