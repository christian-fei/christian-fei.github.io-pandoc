---
title: 'Easy rate limit with Promise.all and p-limit'
date: 2018-04-12
layout: post
category: posts
---

Rate limiting API calls to an HTTP service doesn't have to cumbersome and too complicated.

A simple way to achieve this (and that I use all the time) is to combine `Promise.all` with an npm package called [`p-limit`](https://www.npmjs.com/package/p-limit).

`p-limit` is used to run multiple promise-returning & async functions with limited concurrency.

## example

In the code below I want to make concurrent calls to an api (which can be an HTTP API, library call, pretty much anything that returns a `Promise`), at most 5 at a time.

```
const pLimit = require('p-limit')
const limit = pLimit(5)

const urls = ['...', '...', ...]

return Promise.all(
  urls.map(url => limit(() => request(url)))
)
```

---

## why not `p-queue`

[`p-queue`](https://www.npmjs.com/package/p-queue) would be the perfect match for a rate limited queue implementation. Altough I find it more handy, easier to read and use `p-limit` in combination with a simple `Promise.all`.

This altough applies only if you have a predefined / finite list of operations to run. If the operations are dynamic then you'll probably go with `p-queue`.