---
title: "How to setup Drone CI on a DigitalOcean droplet"
date: 2014-08-02
layout: post
category: posts
---

There are countless continous integration continuous integration tools: Travis, Jenkins, Shippable, Circle, CodeShip, Wercker, etc.

The one I liked most is [Drone](https://drone.io), for a couple of reasons:

- free for public projects (like many others)
- you can host a CI on your own server with **very** little effort (as you will see)
- the documentation is really great
- it supports a large variety of languages
- plus the notification mails just look slick, imo (but maybe that's just me..)




# TOC

- [Disclaimer](#disclaimer)
- [Create a droplet](#droplet)
- [Setup DNS](#dns)
- [Configure Drone](#drone)




<h2 id="disclaimer">Disclaimer</h2>
To follow along, you'll need:

- a <a target="_blank" href="https://www.digitalocean.com/?refcode=880e8f681b50">DigitalOcean droplet</a>
- a (sub)domain name (preferably)

You can skip the DNS setup if you don't own a domain and go straight to the section on how to configure [drone](#drone).




<h1 id="droplet">Create a droplet</h1>
In your DigitalOcean <a target="_blank" href="https://www.digitalocean.com/?refcode=880e8f681b50">panel</a> create a basic droplet based on the latest version of Ubuntu. Give it a name and choose the size of your droplet depending on your needs (a 512MB one will suffice for small/medium projects).
The credentials to access your droplet will be emailed to you.



<h1 id="dns">Setup DNS</h1>
To setup the DNS go to your domain registrar and create an A record to point to your droplet's IP address. This can be either a subdomain or TLD, it doesn't matter.
Like this:

<img data-echo="https://s3-eu-west-1.amazonaws.com/cf.img/posts/2014/08/dns_a_record.png" alt="dns a record">


<h1 id="drone">Configure drone</h1>

Install drone following these steps:

```
wget http://downloads.drone.io/latest/drone.deb
sudo dpkg -i drone.deb
service drone start
```

Drone's backoffice will be served on port 80, so you can access it by simple typing in your Droplet's IP or the domain name you configured earlier.

The first thing you'll want to do, is create an admin user for your CI.

To do this, navigate to `http://[ci.example.com]/install` and register your admin user.

<img data-echo="https://s3-eu-west-1.amazonaws.com/cf.img/posts/2014/08/drone_registration.png" alt="drone registration screen">


---

In the backoffice you can [configure](http://drone.readthedocs.org/en/latest/setup.html) Drone to connect to your Github, BitBucket, define the SMTP settings, as well as team members, etc.

That's all!

