---
title: "Always $digest after you expect"
date: 2015-10-15
layout: post
category: posts
---

> Angular`s digest loop is like a baby: you need to take care of it and feed it well, or it will puke all over your nice shirt.
> Actually, it will probably, eventually do it anyway.


I lost count on how many times I stumbled upon this hurdle when using `chai-as-promised` and Angular (more specific in the digest loop):

```
...
$rootScope.$digest() // here? [case 1]
expect( promise ).to.eventually.be.rejectedWith( rejection )
$rootScope.$digest() // or here? [case 2]
...
```

In the first case the promise will resolve right away before the expectation is even registered, and the expectation will fail miserably.

In the second case the digest loop will run after the expectation has been registered and the promise will be resolved (or rejected, depending on the test context).

Letting Angular`s digest loop run after the expectation is registered will result in meaningful tests.

---

You could also make the test a bit more explicit about that it handles an async task, by using `notify`:

```
it('resolves with processed data', function(done){
  ...
  expect( promise ).to.eventually.be.rejectedWith( rejection ).and.notify(done)
  $rootScope.$digest()
  ...
})
```
