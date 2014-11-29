---
title: "A closer look at Angular's dependency injection"
layout: post
date: 2014-05-26
---

Angular's DI in combination with lazy loading of dependencies is one of my favourite features of Angular.

I was fascinated about the simplified API that Angular provides to make DI happen and the ability to create testable, modular code out of the box.

Anyways we are here to look what's behind Angular's DI, so here we go.

-----------

Angular's DI is done through a techique called [dependency annotation](https://docs.angularjs.org/guide/di#inlineannotation). There are three ways to to let Angular know which dependencies to inject. I will go into each one and show you how it's done under the hood. For simplicity's sake I will use a simple service and inject dependencies into it.

The "source" of my knowledge about this comes from... well... from [Angular's source code](https://github.com/angular/angular.js/blob/master/src/auto/injector.js)

# Implicit dependencies

One way to inject dependencies in Angular is by providing each one as parameter names.

```
function TheService(dep1, dep2){
  ...
}
```

One thing to note that this approach will break when the code is minified. Why? Here is why:

What Angular *tries* to do in this case is to interpret the function literally with `toString()`, extract the parameters and look up the dependencies in its own "Instance Cache", where the defined providers,services,factories,decorators, etc. are stored.

Essentially what Angular does is stringify the function and strip out the function arguments with a regex, like this:

```
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;


var fnText = fn.toString().replace(STRIP_COMMENTS, ''),
      args = fnText.match(FN_ARGS);
```

args in our case results in the following Array:

```
["function TheService(dep1, dep2)", "dep1, dep2"]
```

The first item will be ignored when defining the injected dependencies with $inject. Ha, that reminds me of the next option you have to inject dependencies in Angular!

# $inject

You can explicitly define which dependencies to inject, by supplying an additional property on the function: `$inject`.

This kind of annotation expects an array of dependencies, like this:

```
function TheService(customNameForDep){} //name of the dep won't be interpreted literally, but injected in the order they are defined in the $inject property
TheService.$inject = ['dep1'];
```

With this approach you can minify your code to the last Byte, and Angular will still be able to process the dependencies. In this case the $inject property of the module is already defined, so Angular just skips the initialization of it:

```
// angular internal function to determine annotation
function annotate(fn, strictDi, name) {
  var $inject,
      fnText,
      argDecl,
      last;

  if (typeof fn == 'function') {
    if (!($inject = fn.$inject)) { // it will just skip this if and return the dependency with the populated $inject property
      ...

```

# Explicit DI

To keep things simple and clear, my favourite option is to use the inline array annotation:

```
angular.module('app',[]).service('TheService', ['dep1', function(customNameForDep){}]);
```

Under the hood Angular will handle things quite similarly, assigning to the property $inject the array of dependencies:

```
...
else if (isArray(fn)) {
    last = fn.length - 1; // last is the actual function
    assertArgFn(fn[last], 'fn');
    $inject = fn.slice(0, last); // cut out only the array of dependecies
  }
...
```

That's all.
-------

I would love to know if you found something really stupid in this tutorial and help me to enlighten my path towards a (partial) understanding of Angular.
