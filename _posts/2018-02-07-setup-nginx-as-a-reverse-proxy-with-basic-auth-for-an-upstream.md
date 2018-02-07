---
title: 'setup nginx as a reverse proxy with basic auth for an upstream'
date: 2018-02-07
layout: post
category: posts
---

> don't forget to setup ssl (of course).

this is the most barebones nginx configuration that you'll ever need.

this snippet makes nginx listen on port `80` of your server, indipendent if you want to access to your server via IP or domain name.

additionally it acts as [reverse proxy](https://en.wikipedia.org/wiki/Reverse_proxy) for your application, listening on the HTTP Port `8080`.

just setup an `/etc/nginx/.htpasswd` file with your basic auth credentials.


change these values at will.

```
worker_processes 4;

events {
  worker_connections 1024;
}

http {
  upstream app {
    server 127.0.0.1:8080;
    keepalive 64;
  }

  server {
    listen *:80;
    server_name _;
    access_log /var/log/nginx/nginx.access.log;
    error_log /var/log/nginx/nginx.error.log;
    auth_basic "Restricted Area";
    auth_basic_user_file /etc/nginx/.htpasswd;

    location / {
      proxy_pass http://app;
    }
  }
}
```
