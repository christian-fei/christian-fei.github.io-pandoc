---
title: "My current blogging setup"
layout: post
date: 2014-05-23
---

From Wordpress to Jekyll, from Jekyll to Wintersmith.
I'm eager to play with shiny new toys, I admit it.

After Jekyll I wanted my new static site generator to be highly customizable, fast, and built with node. I got into Jade and Stylus lately, so I wanted this technologies built in. [Wintersmith](http://wintersmith.io/) to the rescue.

The KISS principle was omnipresent when I started from scratch to redesign this blog. This mindset should be reflected while designing, viewing and writing content.

So, here is my current blogging setup, in all of it's subtle details.

---------

# The setup

## Indentation FTW

Jade for clean markup, Stylus for linear stylesheets. Keeping it simple, DRY and clean is very motivating and important for me. I know I can modify an element, post, typographic property etc. with very little overhead.

## Vim FTW

Keeping it simple all the way down. Back to the roots with vim. I feel way more focussed, unlike in Sublime text with all the plugins, popups, menu options, git gutter hints etc.

## Makefile FTW

Yes, a makefile. Targets (or tasks in terms of Gulp or Grunt) to install dependencies, build, preview,  create a new post, push to github, and deploy on my own server. Back to the roots, I told you.

My makefile is an adapted version of Nicolas Gallagher's [one](http:nicolasgallagher.com/simple-git-deployment-strategy-for-static-sites/).

Some convenient tasks:

- `make preview`
- `make post "My new post"`
- `make deploy`
- `make build`
- `make install`

Here is the [Makefile](https://github.com/christian-fei/cf/blob/master/Makefile).

## Single dependency FTW

Node all the way. Stylus stylesheets, Jade templates and mixins, preview server via connect middleware.


# Perks

## No compromises FTW

A workflow with a makefile and vim doesn't seem to be 'modern' at first glance.
Wrong.
Livereload is included with wintersmith, as well as asset minification through plugins. Deploying to my own server with one command seems to be reasonably modern to me.

## PageSpeed FTW

<figure>
  <img src="https://s3-eu-west-1.amazonaws.com/cf.img/posts/2014/05/pagespeed97_100.png" alt="pagespeed 97/100" class="extend"/>
</figure>
<br>

I don't want to brag, but 97/100 seems good to me. I know it's essentially a white canvas with some text on it. But that's exactly what I wanted to achieve: simple, uncluttered reading. It's also an experiment with Google analytics to see how user engagement and visitor flow is affected by the new design.

----------------

PS: if you're interested, here is the project's [github repo](https://github.com/christian-fei/cf).

Hit me up on twitter to tell me what you think!
