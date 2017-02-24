---
title: 'Chaining and indenting after the return statement'
date: 2017-02-22
layout: post
category: posts
---

<pre class="f4">
<code>
function lookupKey (object, objectNotation) {
  return objectNotation
        .split('.')
        .reduce((context, property) => context ? context[property] : null, object)
}
</code>
</pre>

*Code from [husky-template](https://github.com/christian-fei/husky-template/blob/master/utils.js#L6).*

Lately I have been following the [Standard.JS style guide](http://standardjs.com/) (after disliking [ava](https://www.npmjs.com/package/ava) & [xo](https://www.npmjs.com/package/xo)) and took style-guides in general more seriously.

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

So the above code example shows a 100% "standard" JavaScript.

And I wanted to dig deeper on the two lines after the return statement.

## Chaining and indentation

What I found to be a sane approach to indenting when chaining method calls is indenting the chain call by 6 spaces (or 3 tabs).

### A small detail

Let's do some maths:

```javascript
assert.equal(7, 'return '.length)
assert.equal(7, '      .filter'.indexOf('.'))
```

`return ` contains 6 letters and a space afterwards.

So we can indent by aligning the dot of the chain call to the space after the return to match it up horizontally.

```javascript
return array
      .filter(...)
      .map(...)
      .reduce(...)
```

## Ternary operator

```javascript
function hasThis () {
  const or = true
  const that = false
  return this
        ? or
        : that
}
```
*Code from [has-this](https://github.com/christian-fei/has-this/blob/master/index.js#L3).*

This is a personal choice, I follow it if I feel like it. Probably it feels more natural (read: less weird) if used with longer statements. But here again: does it really make my code more readable?

---

What do you think?
