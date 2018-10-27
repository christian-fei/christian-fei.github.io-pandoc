---
title: "Keep Docker container running with upstart and Docker's restart policy"
date: 2014-12-23
layout: post
category: posts
---

Upstart is a tool which manages the start/stop/restart of processes on given events from the OS (like boot, shutdown, etc.).
It's simple to set up, unobtrusive and it comes out of the box with Ubuntu.

You could manage the docker process with more sophisticated tools like supervisor, but upstart suited my needs to keep up a Docker container very well.

Without further ado, here's the modified upstart script from the [official docker website](https://docs.docker.com/articles/host_integration/) with docker's [restart policy](https://docs.docker.com/reference/commandline/cli/):

```
description "Your docker container"
author "Your name"
start on filesystem and started docker
stop on runlevel [!2345]
respawn
script
  /usr/bin/docker run --restart=always -d your/image
end script
```
