---
title: "The simplest way to set vagrant default directory"
date: 2015-07-07
layout: post
---

Here the oneliner, add it to the end of your Vagrantfile

```
config.vm.provision "shell", inline: "echo 'cd /MY_DIRECTORY' >> /home/vagrant/.bashrc"
```
