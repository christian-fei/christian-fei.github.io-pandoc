---
title: "Introduction to AngularJS"
date: 2015-10-20
layout: post
---

Angular is a JavaScript framework for creating modern web applications,
which are inherently declarative, modular, with testability in mind.

Angular brings along its great ecosystem of modules and third party libraries,
a templating engine for view manipulations, a modules concept, XHR/AJAX library,
slimmed down Promises and jqlite implementations, and much, much more.

# Table of contents

- [Modules](#modules)


# Modules

Modules are Angular`s way of grouping user defined services. 
Modules can require other modules and are resolved asynchronously without
worrying about execution order etc. Your service will be instanciated when all
its collaborators/dependencies are loaded.

For example here I`m defining tiny namespaced modules that I can require in others:

```
angular.module('app.modules.auth',[])
angular.module('app.modules',['app.modules.auth'])
angular.module('app.controllers',[])

angular.module('app',[
  'app.modules',
  'app.controllers',
  'ui.router' // third party dependency
])
```


# ng-app and Angular startup phase

Defines the namespace (scope) of an Angular application.
*Note: a page can contain multiple Angular application, although they cannot be not nested*

`ng-app` is a so called `directive`, which we will later talk about what it means.
The `ng-app` directive registers the Angular application scope and starts the application
configuration and run phase.

Imagine you have the following markup that represent your single page application written in Angular:

```
<!DOCTYPE html>
<html lang="en" ng-app="app">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    
  </body>
</html>
```

You can see that the page contains the `ng-app` directive on the `html` element,
so the whole page is the scope of our Angular application.

The corresponding JavaScript to define the application:

```
angular.module('app',[])
angular.module('app').config(function(){ /*config phase*/ })
angular.module('app').run(function(){ /*run phase*/ })
```

This is everything you need to wire app your Angular application. From here we can iterate.


# data-binding and the digest loop

Angular adopted the concept called "data-binding".
Put simply it means:
- you declare in your views what you want to be displayed
- in your model you have the data that needs to be displayed
- both are kept in sync (user input changes the model, and model updates change the view)


