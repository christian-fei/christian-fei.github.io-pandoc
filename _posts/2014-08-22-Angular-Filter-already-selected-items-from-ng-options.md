---
title: "Angular: Filter already selected items from ng-options"
date: 2014-08-22
layout: post
---

Let's say you have an array of things.

You want to provide to your user the ability to select two things from this array.

If you use the `<select>` tag you won't be able to select multiple options from this list unfortunately. You can either come up with a new directive that handles this, use somebody else's plugin, or roll your own Angular filter (probably for learning purposes).

I would like to share a solution to the latter option.

What you'll get is two select menus, whereas one filters out the already selected option from the other menu.

To accomplish this we will take advantage of Angular's [filters](https://docs.angularjs.org/api/ng/filter/filter).


## Preparation

To get things started here is the boilerplate from which we will start:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Angular filters FTW</title>
  </head>
  <body ng-app="app" ng-init="things=[{id:0,name:'thing1'},{id:1,name:'thing2'}]">
    <select ng-model="fields.option1" ng-options="thing.name for thing in things"></select>
    <select ng-model="fields.option2" ng-options="thing.name for thing in things"></select>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular.min.js"></script>
    <script>
      /* THE CODE */
      angular.module('app',[])
    </script>
  </body>
</html>
```

If you save this snippet in a file and open it in your browser you'll notice that both select menus can potentially have the same selected item.
That's exactly what we want to avoid.



## Angular filters to the rescue

Filters in Angular are functions that can take values as input (filter criteria) and spit out a new, filtered set of items.

Let's define the filter that excludes an Object present in Array:

```
.filter('excludeFrom',function(){
});
```

We see that it is called 'excludeFrom', thus, reading the Angular docs, we know that it will be used like this as part of a ng-repeat (or in our case ng-options) directive

```
... ng-options="thing in things | excludeFrom" ...
```

As I mentioned earlier, written like this the filter doesn't know *what* values to filter, since we don't pass it the current value of the other select menu.

You may have noticed that the value of the select menu is bound through **ng-model** to a property of the object `fields` called `option1` and `option2` respectively.
So it's two-way bound for free and we can pass this property to the filter.

Let's extend the ng-options directive a little bit, by passing it the value of the other select menu (respectively):


```
... ng-options="thing in things | excludeFrom:fields.option2" ...
```

Now the filter knows **what** value to filter from the things array.
And now we can implement the actual filter function:

```
.filter('excludeFrom',function(){
  return function(inputArray,filterCriteria){
    return inputArray.filter(function(item){
      // if the value of filterCriteria is "falsy", retain the inputArray as it is
      // then check if the currently checked item in the inputArray is different from the filterCriteria,
      // if so, keep it in the filtered results
      return !filterCriteria || !angular.equals(item,filterCriteria);
    });
  };
}])
```



-----


# A working example


<div ng-app="app" ng-init="things=[{id:0,name:'thing1'},{id:1,name:'thing2'},{id:2,name:'thing3'},{id:3,name:'thing4'}]">
  <select ng-model="fields.option1" ng-options="thing.name for thing in things | excludeFrom:fields.option2"></select>
  <select ng-model="fields.option2" ng-options="thing.name for thing in things | excludeFrom:fields.option1"></select>
  <pre>
    debug information:

    fields.option1: {{fields.option1}}
    fields.option2: {{fields.option2}}
  </pre>
</div>


<script src="http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular.min.js"></script>
<script>
  angular.module('app',[])
    .filter('excludeFrom',[function(){
      return function(array,expression,comparator){
        return array.filter(function(item){
      return !expression || !angular.equals(item,expression);
    });
  };
}])
</script>













