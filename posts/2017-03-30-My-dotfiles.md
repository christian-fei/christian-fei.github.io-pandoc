---
title: 'My dotfiles'
date: 2017-03-30
layout: post
category: posts
bg_image: /assets/images/posts/fork_count.png
---

I want to talk a little bit about my `dotfiles`.

You can find them [on Github (obviously)](https://github.com/christian-fei/dotfiles).


# Structure

```
~/dotfiles (master) tree .
.
├── README.md
├── assets
│   ├── chalk-iterm-custom.itermcolors
│   └── uebersicht-widgets
│       ├── cryptocurrency.widget.coffee
│       ├── ping-history.widget
│       │   └── index.coffee
│       ├── u�\210bersicht-logo.png
│       └── widgets
│           ├── cryptocurrency.widget.coffee
│           ├── ping-history.widget
│           │   └── index.coffee
│           └── u�\210bersicht-logo.png
├── dots
├── fonts
│   ├── Hack-Bold.ttf
│   ├── Hack-BoldOblique.ttf
│   ├── Hack-Regular.ttf
│   └── Hack-RegularOblique.ttf
├── install
├── link
│   ├── iterm
│   │   ├── com.googlecode.iterm2.plist
│   │   └── iterm -> /Users/saiph/dotfiles/link/iterm
│   └── scratch
│       ├── reactjsday-blogpost
│       └── reactjsday-schedule
└── scripts
    ├── brew
    ├── brew-cask
    ├── dirs
    ├── fish
    ├── gem
    ├── link
    ├── npm
    ├── other
    ├── pip
    ├── uebersicht
    └── vim

11 directories, 28 files
~/dotfiles (master)
```

### installation

the installation is as simple as cloning the [repository from github](https://github.com/christian-fei/dotfiles.git) and run `./install`.

*warning: this will actually createa and delete files in your home.*

### configuration

the `scripts` folder contains the commands to install the relevant software.

and this is the place where you'll need to configure it by yourself.

### links

the `link` folder is used to create symbolic links in the home folder.