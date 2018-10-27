---
title: "How to use morgan with node-simple-router"
date: 2015-02-23
layout: post
category: posts
---

You can use it like a middleware as it is supposed to be used in combination with `router.any` to log any reqeust of the web server.

Here a simple example:

```
var http = require('http')
  , router = require('node-simple-router')()
  , morgan = require('morgan')
  , logger = morgan('combined')

router.any(function(){
  logger.apply(this,arguments)
})

router.get('/hook',function(req, res) {
  res.end('incoming hook')
})


http
.createServer(router)
.listen(3000)
```
