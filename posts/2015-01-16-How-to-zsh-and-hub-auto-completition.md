---
title: "How to zsh and hub auto completition"
date: 2015-01-16
layout: post
category: posts
---

Recently I installed hub and couldn't get zsh git auto-complete to work.

After some research I found [this gem](https://github.com/github/hub/issues/231#issuecomment-65781899), so the only thing you need to do is to:

```
mkdir -p ~/.oh-my-zsh/plugins/hub
curl https://raw.githubusercontent.com/github/hub/master/etc/hub.zsh_completion > ~/.oh-my-zsh/plugins/hub/_hub
```
