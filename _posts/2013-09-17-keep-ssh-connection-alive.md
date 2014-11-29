---
desc: "Keep SSH connection to server VPS alive. Solution SSH hanging up, freezing, problem remote SSH"
layout: post
title: "Keep SSH connection alive"
date: 2013-09-17 18:49:15
---

Let's get straight to the point.

1) Open `/etc/ssh/ssh_config` with nano, vi, or whatever editor you prefer.

2) Uncomment or add the line `ConnectTimeout 0` and `ServerAliveInterval 30`

Boom.
