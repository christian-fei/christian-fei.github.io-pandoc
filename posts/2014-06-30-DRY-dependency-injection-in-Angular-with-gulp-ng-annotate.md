---
title: "DRY dependency injection in Angular with gulp-ng-annotate"
date: 2014-06-30
layout: post
category: posts
desc: "DRY dependency injection in Angular with gulp-ng-annotate"
---

In a previous post I dug into [Angular DI and how it's done](/a-closer-look-at-angular-s-dependency-injection/).
The most common way how you'll see dependencies annotated is with the inline array notation, like this:

```javascript
angular.module('app').service('TheService',['$http',function($http){
	// a-ok
}]);
```

Nothing weird here. To be able to minify your code you'll most likely end up annotating the dependencies of a module like this.
You'll agree that that it can be a tedious copy'n'paste operation, and can quickly get out of control.

Fortunately there are people and tools that make this process very seamless with build tools.

One build tool that I really like is [gulp](http://gulpjs.com). If you're not familiar with gulp, the cool thing about it is that it uses node's streams as a performant piping mechanism to connect multiple tiny modules that do one thing, and one thing well.

An example of a gulp [task](https://github.com/gulpjs/gulp/blob/master/README.md):

```
gulp.task('javascript', function() {
  return gulp.src([
	'app/js/controllers/**/*.js',
	'app/js/services/**/*.js' // ...
  ])
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('build/js'));
});
```

It's essentially like the pipe (|) in the shell to *pipe* the output of one program to another.

### DRY DI with gulp-ng-annotate

Now back to Angular and the tedious process I explained before.
With [**ng-annotate**](https://github.com/sindresorhus/gulp-ngAnnotate()) the inline array annotation becomes unnecessary, even though your code can still be minified.

With ngAnnotate() you would simply write the dependencies as function arguments without further annotation, like this:

```javascript
angular.module('app').service('TheService',function($http){
	// a-ok
});
```

The gulp task to use ngAnnotate() could look like this:

```
//require the dependencies
var gulp = require('gulp'),
    //...
    ngAnnotate = require('gulp-ng-annotate')

gulp.task('javascript', function() {
  return gulp.src([
	'app/js/controllers/**/*.js',
	'app/js/services/**/*.js' // ...
  ])
    .pipe(ngAnnotate()()) //ngAnnotate() before uglify!
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('build/js'));
});
```


One of the cool things about ng-annotate is that if it can't figure out the injections, you can help with with a simple annotation before the function definition:

```
angular.module('app')
.config( /*@ngInject*/ function($routeProvider, $locationProvider){
	// a-ok
});
```
