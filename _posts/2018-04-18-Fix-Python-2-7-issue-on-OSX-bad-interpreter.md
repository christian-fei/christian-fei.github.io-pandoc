---
title: 'Fix Python 2.7 issue on OSX: bad interpreter'
date: 2018-04-18
layout: post
category: posts
---

Today I encountered an issue with Ansible and my python installation.

The error was the following: 

```
/usr/local/bin/ansible-playbook: /usr/local/opt/python/bin/python2.7: bad interpreter: No such file or directory
```

I tried reinstall `python@2`, linking the python installation again with `brew link python`, also unlinking and linking it again `brew unlink python; brew link python`.

And the most hilarious thing is that I had python2.7 install:

```
$ which python
/usr/local/bin/python
```

The only workaround I found to work for me, was to create a symbolic link to satisfy the path Ansible was expecting:

```
ln -s /usr/local/bin/python /usr/local/opt/python/bin/python2.7
```

Hope this helps :)
