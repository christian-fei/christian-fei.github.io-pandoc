---
title: 'Start an npm script with pm2'
date: 2018-10-18
layout: post
category: posts
---

Today I needed to run a long running `npm` script with pm2, but it wasn't immediate how to run it.

`pm2 start --help` shows how the start command works:

```
pm2 start --help

  Usage: start [options] <file|json|stdin|app_name|pm_id...>

  start and daemonize an app
```

What I wanted to use is a file/program, namely `npm`.

The most common use case is to run `npm start`.

To run `npm start` with pm2 I needed to run it the following way:

```
NODE_ENV=production pm2 start --no-autorestart --name LONG_RUNNING_TASK npm -- start
```

Similarly, to run any `npm` script, you can run it the following way:

```
NODE_ENV=production pm2 start --no-autorestart --name LONG_RUNNING_TASK npm -- run some-script
```
