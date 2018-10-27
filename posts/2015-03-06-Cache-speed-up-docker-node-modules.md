---
title: "Speed up your docker container by caching node_modules"
date: 2015-03-06
layout: post
category: posts
---

When following the tutorial on the [Docker's official website](https://docs.docker.com/examples/nodejs_web_app/) about *Dockerizing a Node.js Web App* I found it installs the defined npm dependencies each time you rebuild the container.

After some research I discovered this article about [Best practices for writing Dockerfiles](https://docs.docker.com/articles/dockerfile_best-practices/#build-cache) and understood *why* te node_modules are installed again each time and how to avoid this.

The key is the **build cache** of the image, as the articles states

> In the case of the ADD and COPY instructions, the contents of the file(s) being put into the image are examined. Specifically, a checksum is done of the file(s) and then that checksum is used during the cache lookup. If anything has changed in the file(s), including its metadata, then the cache is invalidated.

In fact the Dockerfile of the tutorial mentioned above contains a **COPY** directive and that's why the build cache is always invalidated.

```
...
COPY . /src

RUN cd /src; npm install
...
```

The instruction `COPY . /src` will invalidate the cache and the subsequent commands are invalidated, so the dependencies will be installed each time from scratch.

We could split the COPY command into parts: we copy the package.json file separately and if changed, we install the dependencies again. The we copy the rest of the application.

We could achieve this by defining the Dockerfile in the following way:

```
COPY package.json /src/package.json
RUN cd /src; npm install
COPY . /src
```

This will cache the dependencies until the package.json file changes :)
