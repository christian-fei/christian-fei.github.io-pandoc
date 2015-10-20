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

Model and View are kept in sync via a mechanism called "dirty checking", and in Angular this *dirty work*
is handled by the [*digest loop*](https://www.ng-book.com/p/The-Digest-Loop-and-apply/).

# Provider, Factory, Service, Value and Constant

Application services in Angular are defined by registering them in a module. The registration (and later injection)
is done by the injector, and follows a recipe to create them.

You can define what "type" of Application service you want to define, there is one (+3 with syntactic sugar):

## The provider

It is used for application wide configuration of a later injectable service.
You can register a provider like this:

```
module.provider('Logger', function(){
  var enabled = true
  this.enable = function(_enabled){enabled = !!_enabled}
  this.$get = function(){
    return new Logger(enabled)
  }

  function Logger(enabled){/*...*/}
})
```

## The factory

Creates an injectable service which returns the value it has been instructed to:

```
module.factory('MyFactory', function(){
  return new Factory()
})
```

## The service

You will be provided by an instance of the function:

```
module.service('MyService', function(){
})
```

## The value and constant

Returns the value. The difference between the two is that a constant can only be injected
during the configuration phase and in providers. The value can be injected expect in those cases.

```
module.value('MyValue', 42)
module.constant('MyValue', 42)
```


# Directives

Angular directives have been introduced to create new semantically meaningful components with custom behaviour, or augmenting
behaviour of existing tags.

An example I like to make is the `<profile>` component.

```
module.directive('profile', function(){
  return {
    restrict: 'EA',
    template: 'profile.html',
    controller: function($scope, AuthService){
      /* display profile if authenticated, hide if not authenticated.. */
    }
  }
})
```

We introduced a `<profile>` component that is easily testable in isolation and does one thing very well, 
showing the currently logged in user.

As we said a directive can also be used to introduce custom behaviour on an element.
Let`s take a look at some directives Angular ships with, for example `ng-click`:

```
<span ng-click="click()">click me</span>
```

As you might expect with this directive a function `click()` is called when the element is clicked,
nothing surprising but extremely powerful. Think about analytics tracking, communication between components,
custom behaviour, input validation, etc..



# Filters

Filters are used to format and apply transformations to user input.
Some example are currency, json formatting, etc.

```
module.filter('camelCase', function(){
  return function( input ){
    if( !input ) return input
    return input[0].toUpperCase() + input.substr(1)
  }
})
```


# Interceptors

Interceptors operate at the http request/response level. You could use them for 
Authorization handling, logging, error handling, etc.

```
module.factory('AuthHeaderInterceptor', function(token){
  return {
    request: function(config){
      config.headers.Authorization = 'Bearer ' + token
      return config
    })
  }
})
```


---

To conclude this article I reccommend you to check out my repo to start a new Angular project from scratch!
It includes testing framework already setup with examples and basic structure to get going fast:

[angular-start](https://github.com/christian-fei/angular-start)
