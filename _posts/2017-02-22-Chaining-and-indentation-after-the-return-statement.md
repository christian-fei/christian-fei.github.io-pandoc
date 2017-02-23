---
title: 'Chaining and indentation after the return statement'
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
assert.equal(7, '       .filter'.indexOf('.'))
```

`return ` contains 6 letters and a space afterwards.

So we can indent by aligning the dot of the chain call to the space after the return to match up it up horizontally.

```javascript
return array
      .filter(...)
      .map(...)
      .reduce(...)      
```

---

What do you think?
