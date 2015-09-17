---
title: "Conforming to protocols in JavaScript"
date: 2015-07-04
layout: post
---

Did you ever find yourself in need to check if a specific interface/protocol is satisfied by a function in JavaScript?

If you did, you know how difficult it can be to maintain checks like 'obj && obj.foo && obj.bar"..

Lately I stumbled on some ancient posts where they used an "Interface" type to implement a certain protocol for a type in JavaScript.

I throw up a little bit, but then I thought that sure they must have had their reasons to do it.

One possible use case that I came up with is when maintainability strikes. I don't like to work with "types" or "classes" in JavaScript, but rather with protocols and duck typing.

And not to mention functional programming.

So I thought it would be interesting to check for protocol conformance in this way:

```
function conformsTo(object, protocol) {
  /* pseudo code, not tested */
  var methods = Object.keys(object)
  return protocol.every(function(key){
    return methods[key]
  })
}
```

How do you keep your JavaScript maintainable if you do quite some duck typing?
