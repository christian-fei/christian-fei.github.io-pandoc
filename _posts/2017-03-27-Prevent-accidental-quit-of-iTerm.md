---
title: 'Prevent accidental quit of iTerm'
date: 2017-03-27
layout: post
category: posts
---

You probably ran into a similar situation before: You *accidentaly* quit an iTerm tab with `<Command key> W` or `<Control key> D` while the tests were running, an ssh connection was open, etc..

One way to prevent this is whitelist these commands "Profiles > Session" section, like this:

![iterm prevent close](/assets/images/posts/iterm-prevent-close.png)

Simply add a command name here, and iTerm will ask for a confirmation before closing the tab.
