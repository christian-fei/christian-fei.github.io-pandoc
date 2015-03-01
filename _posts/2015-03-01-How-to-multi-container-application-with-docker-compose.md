---
title: "Write your first multi-container application with docker compose"
date: 2015-03-01
layout: post
---

[Docker compose](https://docs.docker.com/compose/) is Docker's own tool for structuring and running multi-container applications with Docker.

It uses a file (`docker-compose.yml`) to define the structure of your application in terms of Docker containers.

---

We'll build a simple node applications that interacts with redis to keep track of how many times the page has been visited.

For this we'll need two containers: 

- the node application running an HTTP server listening on port 80, communicating with Redis

- a Redis instance listening on the default port 6379

The `docker-compose.yml` file for this project is defined as follows:

```
web:
  build: .
  command: node index.js
  ports:
    - "8080:80"
  links:
    - redis
redis:
  image: redis:latest
  ports:
    - "6379"
```

## Building the web application

The node application is built from the latest stable version of node:

```
FROM node:0.10.34

RUN ["mkdir", "-p", "/app"]
ADD . /app
WORKDIR /app
RUN ["npm", "install"]

EXPOSE 80
```

The application itself is a simple web server incrementing the number of hits each time a request comes in and responds with the current hit count:

```
var HTTP_PORT = 80
  , REDIS_HOST  = process.env.REDIS_PORT_6379_TCP_ADDR
  , REDIS_PORT  = 6379

var redis = require('redis')
  , http = require('http')
  , redisClient = redis.createClient(REDIS_PORT, REDIS_HOST)

redisClient.on('error', function (err) {
  console.log(err)
})

redisClient.set('hits', 0, redis.print)

http.createServer(function(req, res) {
  if( /favicon\.ico$/.test(req.url) ) return res.end()
  redisClient.incr('hits', function(err,hits){
    console.log( 'incremting hits', hits )
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello World * ' + hits)
  })
}).listen(HTTP_PORT, '0.0.0.0', function() {
  console.log('Server running at http://127.0.0.1:'+HTTP_PORT)
})
```


## Running the application with docker-compose

First of all, you'll need to [install docker and docker-compose](https://docs.docker.com/compose/install/).

When you're all set up, you can spin up your application with:

```
docker-compose up
```

and see the application running on `http://127.0.0.1:8080`!


###### note for Mac OS users

You'll need to run boot2docker, and to access the application you can run the following command:

```
open http://$(boot2docker ip):8080
```

## Github project

You can find the source code of the project on [GitHub](https://github.com/christian-fei/docker-compose-playground).