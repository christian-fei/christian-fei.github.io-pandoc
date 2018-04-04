---
title: 'Offloading my Inbox items to /discover'
date: 2018-04-05
layout: post
category: posts
---

Lately I felt overwhelmed by my *Obsessive Compulsive Reminder Disorder ™*. In other words, my [Inbox](https://inbox.google.com/) was full of interesting links that I saved as a reminder, but easily got out of hand:

![inbox-full](/assets/images/posts/inbox-full.png)


I wanted to keep track of these *discoveries* I made, so [/discover](/discover) was born.

This way I have a timeline, some kind of personal bookmarks, shared publicly on my website! Win-Win!

To add a discovery, I simply run a small script to prepend it to my [discover.yml](https://github.com/christian-fei/christian-fei.github.io/blob/master/_data/discover.yml):

```
./new-discover "TITLE" "URL" "DESCRIPTION"
```

The script can be found [here](https://github.com/christian-fei/christian-fei.github.io/blob/master/new-discover).

---

It is very much inspired by the work of my good friend [joebew42](https://github.com/joebew42), namely his [activity-log](https://github.com/joebew42/daily-activity-log) and [concept](https://github.com/joebew42/daily-activity-log-concept).

You should definitely check it out if you're interested in keeping track of notes, study topics etc.

PS: he is also [streaming great content on twitch](https://www.twitch.tv/joebew42) about Clean Code, Test-Driven Development and Refactoring. Definitely check it out!