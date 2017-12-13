---
title: 'Building the new version of pomodoro.cc in the open'
date: 2017-10-21
layout: post
category: posts
bg_image: https://pomodoro.cc/pomodoro.cc.png
---

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Hey <a href="https://t.co/zZprrZ7UDA">https://t.co/zZprrZ7UDA</a> users, we are glad to announce a more usable and sustainable version of pomodoro.cc!</p>&mdash; Pomodoro.cc (@pomodoro_cc) <a href="https://twitter.com/pomodoro_cc/status/921782740764282880?ref_src=twsrc%5Etfw">October 21, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

using [github projects](https://github.com/christian-fei/pomodoro.cc/projects/1) to keep track of activities and being public about it has been a very pleasant experience.

in the next sections you'll understand what changed.

## cheaper maintainance costs

pomodoro.cc was hosted on [digitalocean.com](https://www.digitalocean.com/) and costed about 7€ a month to keep running. This includes domain costs, ssl certificates and hosting.

now i have slimmed down the application to a version without statistics and with authentication & export of data.
this is mainly due to cheaper costs in terms of project maintainance and actual infrastructure costs.

## monitoring

improved monitoring in place with healthchecks

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">added a healthcheck route for the auth service for pomodoro.cc <a href="https://t.co/GRsoPJLtng">https://t.co/GRsoPJLtng</a><br>with the following configured healthchecks <a href="https://t.co/4bkaDUQuhS">pic.twitter.com/4bkaDUQuhS</a></p>&mdash; Pomodoro.cc (@pomodoro_cc) <a href="https://twitter.com/pomodoro_cc/status/921933584176418817?ref_src=twsrc%5Etfw">October 22, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

### deployment with up and aws lambda, api gateway, cloudfront & route 53

these are a lot of service to get started with at first, but with [tj's apex/up](https://apex.github.io/up/) deployment tool I have found extreme productivity again, finally.

i can deploy dns changes in a matter of minutes, and i have only to update `up.json` and it takes care of pretty much everything else.

### reduced version without statistics

i decided to remove the statistics page to enable pomodoro.cc to be a small candy to make people want use [the famous new product](https://github.com/christian-fei/pomodoro.cc/issues/166) i have in mind.

the new application should be as user friendly and similar to pomodoro.cc, with a revamped statistics page and more feature that will come up in my mind.

### payments with stripe

additionally i have in mind to make a service that users want to pay for what they get.

in the meantime i built [`payments`](https://github.com/christian-fei/payments), which should be a simple way to manage stripe payment with minimal infrastructure costs.

### project & metrics

waffle.io is used to keep track of [project metrics](https://waffle.io/christian-fei/pomodoro.cc/metrics).

which gives me nice charts like this:

![waffle.io pomodoro.cc metrics](/assets/images/posts/waffle.io.pomodoro.cc.png)



## where to go from here

please check out the new version of [pomodoro.cc](https://pomodoro.cc) and give me feedback on twitter and such :) thaaanks