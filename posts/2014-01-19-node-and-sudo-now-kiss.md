---
layout: post
category: posts
title: "node and sudo: now kiss"
date: 2014-01-19 23:02:14
category: articles
---


Getting permission errors when installing a module?

Are 'sudo: node: command not found' errors taking away your precious sleeping hours?

______________

Remove any trace of node on your system, and reinstall it. It will suit your pain:

```bash
echo 'export PATH=$HOME/local/bin:$PATH' >> ~/.bashrc
. ~/.bashrc
mkdir ~/local && ~/node-latest-install && ~/node-latest-install
curl http://nodejs.org/dist/node-latest.tar.gz | tar xz --strip-components=1
./configure --prefix=~/local && make install
curl https://npmjs.org/install.sh | sh
rm -rf ~/node-latest-install
```

<small><a href="https://gist.github.com/isaacs/579814#file-node-and-npm-in-30-seconds-sh">adapted from here</a></small>

Your one/two steps/commands away from success. Just replace `/path/to/your/home/` with the **absolute** path to your home directory (leaving the rest of the path as is):

```bash
sudo ln -s /path.to/your/home/local/bin/node /usr/local/bin/
sudo ln -s /path.to/your/home/local/bin/npm /usr/local/bin/
```

<img src="http://weknowmemes.com/wp-content/uploads/2012/01/fap-now-kiss.png" alt="now kiss">
