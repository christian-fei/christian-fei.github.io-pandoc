---
title: "Functional JavaScript: Write your own negate/not function"
date: 2015-05-09
layout: post
category: posts
---

Let's say you want to filter odd numbers from a list of numbers, like `[1,2,3,4,5,6]` should become `[1,3,5]`.

One way to solve this problem in a functional fashion is to provide an `odd` filter function, that is internally composed by a negation of an `even` filter on those numbers.

So, let's define these functions step by step:

```
function odd(number){
  return not(even)
}

function not(predicate){
  return function(){
    return !predicate.apply(this, arguments)
  }
}

function even(number){
  return number % 2 == 0
}
```

The `even` function needs no explaination, where the `functional magic ®` happens is in the `odd` and `not` functions.

`odd` takes a number and uses the `even` filter, by negating it with `not`, to determine whether a number is odd or not.

`not` just wraps the `predicate` function passed in and negates its application. Note that this application makes sense with functions that return boolean values, thus the name `predicate`.

---

One use case could be in combination with `Array.prototype.filter`:

```
[1,2,3,4,5,6].filter(not(even))

// or

[1,2,3,4,5,6].filter(odd)
```
