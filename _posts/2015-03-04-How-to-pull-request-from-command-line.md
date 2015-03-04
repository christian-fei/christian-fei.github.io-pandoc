---
title: "How to make a pull request on GitHub from the command line"
date: 2015-03-04
layout: post
---

I hope this will help you to push your productivity level to the edge and to find the ultimate flow to contribute to open source projects with ease :)

You need to install [hub](https://hub.github.com), which is a tool that will wrap your **git** cli tool with some useful utility functions to interact with GitHub.


### Fork the project

To start, just fork the project you want to contribute from [github.com](https://github.com).


### Set the upstream origin

To stay aligned with the project's lifecycle, you'll need to set a reference to it.

You do this by setting an additional **remote** endpoint to the git url of the original project.

From the root of the project, you can do this by executing

```
git remote add upstream [GIT_URL]
```

where you would replace `[GIT_URL]` with the original git url of the project.


### Keep hacking and rebase

If the project is growing fast, you'll need to keep up with its pace.
You do this by **rebasing** your changes upon the commits of the original project.

```
git fetch upstream/master   # fetch the latest changes
git rebase upstream/master  # apply your changes upon the others
```


### Pull request!

Once everything is in sync and the tests pass, you can make a pull request from the command line with the following command:

```
git pull-request
```

---

If you're having trouble with this guide, I would like to help you out to contribute to your favuorite open source project.
