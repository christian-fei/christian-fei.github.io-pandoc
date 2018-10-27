---
title: 'Make Anaconda executables available in your PATH (fish shell)'
date: 2018-10-06
layout: post
category: posts
---

To make Anaconda executables like `conda` or `anaconda-navigator` available in your shell, you'll need to edit your `~/.config/fish/fish.config` and add the directory where the commands are located.

If you're using Anaconda with Python 2.x, the path will be `/anaconda2/bin/`.

For Python 3.x and up: `/anaconda3/bin/`

--- 

Just add a line the following line to your `~/.config/fish/fish.config`:

```
set -gx PATH $PATH /anaconda2/bin/
```
