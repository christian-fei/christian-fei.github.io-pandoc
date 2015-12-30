---
title: "How to configure Drone behind an nginx proxy on a subdomain"
date: 2014-08-03
layout: post
category: posts
---


Drone listens on port `80` by default.
If you want to host your application on the same server, then that's an issue.

One solution that worked for me is to

1. configure Drone to listen on another port
2. accept requests with nginx and proxy pass them to Drone





## Drone on another port

Let's say `1337` because it's most likely to be free.
To do that we need to open the file `/etc/default/drone` and change the **DRONED_OPTS** to `--port=:1337`, like this:

```
DRONED_OPTS="--port=:1337 --workers=4"
```

Restart drone and you should be able to access the dashboard through the port `1337` of your server: `service drone restart`.





## nginx proxy

Though it's not really reccommended by Drone, I don't really see an issue with it. You lose a small performance hit, which is originally gained by using go's `net/http`. But that's fine, imo.

Anyways, to complete this task we need to create a new nginx configuration for a specific subdomain on which runs our CI (typically `ci.example.com`).
Let's create a file called `ci.example.com.conf` (name it with your own domain) in the folder `/etc/nginx/conf.d/` with the following content:

```
server {
  listen 80;
  server_name ci.example.com;

  access_log /var/log/nginx/ci.example.com.access.log;
  error_log /var/log/nginx/ci.example.com.access.log;

  location / {
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $remote_addr;
    proxy_set_header Host $http_host;

    proxy_pass http://127.0.0.1:1337;
    proxy_redirect off;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

Replace all the occurrencies of `ci.example.com` with your (sub)domain.

What this does is putting nginx in front of your CI, handle the requests and pass them to the local service running on port 1337 (which is Drone itself).

---

Restart nginx and you're good to go. :)
