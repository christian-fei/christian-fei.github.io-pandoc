---
desc: "Replace links and special characters in files Regular Expressions and sed"
layout: post
category: posts
title: "Replace links in files with Regular Expressions"
date: 2013-03-29 17:07:07
---


You need to replace a string with special characters (like http://) and don't want to do that manually?

I've found the solution.

________________

I tried to escape each '/' with '\/' but ``` sed ``` didn't like that.

Instead of replacing each '/' just replace the placeholders for the regular expression with '#'!

Like this :

<br/>

```
$ sed -i.bak s#http://your-address.com/images/#https://s3-eu-west-1.amazonaws.com/cf.img/posts/#g *
```

<br/>

Explanation:

- -i.bak is need, to prevent sed to cry around, it will make a backup of the files that you can simply remove with ``` rm *.bak ```

- * at the end means 'search all files'

<br/>
<br/>
<br/>
I found the solution on this [forum](http://www.linuxforums.org/forum/newbie/102173-help-w-sed-parsing-special-characters.html)
