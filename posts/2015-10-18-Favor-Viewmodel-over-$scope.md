---
title: "Favor Viewmodel over $scope"
date: 2015-10-18
layout: post
category: posts
---

As you may be accustomed by now, in the JavaScript scene there is *almost never* a single way to program. I think it`s very difficult to find an idiomatic styleguide for the language/framework.

What I found is that [lots of](https://github.com/johnpapa/angular-styleguide) [intelligent people](https://github.com/toddmotto/angularjs-styleguide) were talking about idiomatic solutions they found to write maintainable AngularJS applications, and some similarities caught my attention.

One of them was the preference to use the [controller as](https://docs.angularjs.org/api/ng/directive/ngController) syntax, I definitely do too, and here is why.

### Often unneeded $scope gets injected to conform to the rest of the controller definitions

For example, if you do not need to watch for changes on a model or viewmodel object, the $scope object is totally useless and litters the whole controller.

```
function RootCtrl($scope){
  $scope.foo = 'bar'
  $scope.$watch('foo', function(){})
}

function FooCtrl($scope){
  $scope.foo = 'bar' // could have written "this.foo = 'bar'"
}
```


### The controller seen as a Viewmodel is easier to test

You can save yourself headaches by not needing to inject the $scope for testing purposes in each test, but simply makes the assertions on the instance of the controller (that is represented by the Viewmodel):

```
// implementation
function FooCtrl(){
   this.foo = 'bar'
   this.submit = submit

   function submit(){/* |c?o.d:e*/ }
}

// test
FooCtrl = $controller('FooCtrl', {})  // instead of $controller('FooCtrl', {$scope:$scope})
expect( FooCtrl.foo ).to.eql( 'bar' ) // instead of expect( $scope.foo ).to.eql( 'bar' )

FooCtrl.submit('baz')
expect( FooCtrl.foo ).to.eql( 'baz' )
```

It may be a personal thing, but I prefer to have clean test with as little as possible indirection.


### No collision/masking of primitives due to inheritance

There is a dedicated video [about "the dot"](https://www.youtube.com/watch?v=DTx23w4z6Kc), so this is an often overlooked issue one may face during their first steps in Angular.

The "problem" is that when you create a new scope (with a controller, isolate scope in directive, etc.) you create a new prototypal "scope" for the variables defined inside. If you use primitives on each scope and the variables have the same name, you break the inheritance chain, and you get undesired results:

```
<div ng-controller="FooCtrl">
  <input ng-model="foo"/>
  <div ng-controller="BarCtrl">
    <input ng-model="foo"/>
  </div>
</div>
```

Both controller definitions cannot communicate with each other through the property "foo", although at first sight it might seem.


#### dot notation and VM solution

By using the dot you explicitly define the source of the data for the model, it is the vm.

You can take a look at an [example application](http://codepen.io/christian-fei/pen/vNWzZw/) that makes the behaviour clear.




## Conclusion

The point I made are mere preferences, so I would like to get into a discussion about what you think on [Twitter](https://twitter.com/christian_fei).
