---
title: 'how i build my site'
date: 2017-03-23
layout: post
category: posts
---

Related: Read [how I deploy my site](/posts/how-i-deploy-my-site/).

---

# tl;dr

```
npm run build
```

or

```
npm run build:js && npm run build:css && npm run build:site
```

# build step by build step

The whole build consists of small *individual builds* of *different types of assets*.

## Webpack - JavaScript build step

A [webpack](https://webpack.github.io/) build parses and concatenas the JavaScript assets.

<div class="logo-container" style="overflow: hidden;">
<div class="logo" style="-webkit-transform:scale(3);-ms-transform:scale(3);transform:scale(3);height:660px;z-index:-1">
<ul class="cube-inner">
<li class="front"></li>
<li class="back"></li>
<li class="right"></li>
<li class="left"></li>
<li class="top"></li>
<li class="bottom"></li>
</ul>
<ul class="cube">
<li class="front"></li>
<li class="back"></li>
<li class="right"></li>
<li class="left"></li>
<li class="top"></li>
<li class="bottom"></li>
<li class="floor"></li>
</ul>
</div>
</div>

<small>
  <i>From <a href="https://webpack.github.io">https://webpack.github.io</a></i>
</small>

My [`assets/js`](https://github.com/christian-fei/christian-fei.github.io/tree/master/assets/js) folder has the following structure:

```
~/D/p/christian-fei.github.io (master ⚡) tree assets/js/
assets/js/
├── analytics.js
├── index.js
├── ui
│   ├── constants.js
│   ├── index.js
│   ├── interactions
│   │   ├── blog-search.js
│   │   ├── index.js
│   │   └── slash-to-search.js
│   └── typewriters
│       ├── index.js
│       ├── type-a-keyword-here.js
│       └── type-slash-to-search.js
└── workers
    ├── cache.start.js
    └── index.js

4 directories, 12 files
```

As you can see, this allows me to make use of [node](https://nodejs.org)'s module system (`require` calls) and to have a sane project structure and separation of modules.

My [webpack config](https://github.com/christian-fei/christian-fei.github.io/blob/master/webpack.config.js) minifies the assets and bundles them in a browser compatible packet called [`main.min.js`](https://github.com/christian-fei/christian-fei.github.io/blob/master/dest/main.min.js).

During development I run the `npm run build:js:watch` command to make my workflow easier. A change to a JavaScript file triggers a new build, so i just have to switch to the browser and reload the page.

To build the production asset I run the command `npm run build:js`.

Note: I want to upgrade to Webpack 2 as soon as I find some time.

# Gulp - CSS build step

[gulp.js](http://gulpjs.com/) is used for the CSS files. I use the preprocessor [stylus](http://stylus-lang.com/), so I can write less nasty CSS and more fancy Stylus.

<img src="/assets/images/posts/stylus-logo.svg" alt="stylus lang"/>

Similarly, `npm run build:css` compiles the Stylus stylesheets and bundles them into [main.min.css](https://github.com/christian-fei/christian-fei.github.io/blob/master/dest/main.min.css).

Gulp can also watch my files during development: `npm run build:css:watch`.

My [`assets/css`](https://github.com/christian-fei/christian-fei.github.io/tree/master/assets/css) folder has the following structure:

```
~/D/p/christian-fei.github.io (master ⚡) tree assets/css
assets/css
├── fancy.styl
├── layout.styl
├── main.styl
├── modifiers.styl
├── type-scale.styl
├── typography.styl
└── variables.styl

0 directories, 7 files
```

# Jekyll - HTML build step

[Jekyll](https://jekyllrb.com) is a static site generator, most often used for blogs.

I love it.

<img src="/assets/images/posts/jekyll.png" alt="jekyll"/>

I use [bundler](https://github.com/bundler/bundler) to manage the Ruby gems.

My only dependency is the Jekyll gem.

Once i have them installed, I run `bundle exec jekyll serve` during development, and `bundle exec jekyll build` for production.

---

It's not over yet. I still need [to deploy my site](/posts/how-i-deploy-my-site/).






























<style>
  .logo {
    width: 100%;
    height: 220px;
    position: relative;
    overflow: hidden;
    -webkit-transform: scale(3);
    -ms-transform: scale(3);
    transform: scale(3);
    z-index: -1;
  }


  .cube-inner, .cube-inner li {
    position: absolute;
    display: block;
  }

  .cube-inner {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: -25px 0;
    top: 50%;
    left: 50%;
    transform-origin: 25px 25px;
    margin: -25px 0 0 -25px;
    transform: rotateX(-33.5deg) rotateY(45deg);
    transform-style: preserve-3d;
    animation: fastspin 10s ease-in-out infinite 2s;
  }


  .cube-inner .front {
      transform: translateZ(25px);
  }
  .cube-inner .back, .cube-inner .front, .cube-inner .left, .cube-inner .right, .cube-inner .top {
      background: radial-gradient(transparent 30%,rgba(5,17,53,.2) 100%);
  }
  .cube-inner li {
      width: 50px;
      height: 50px;
      transition: transform 1s ease-in-out;
  }
  .cube-inner, .cube-inner li {
      position: absolute;
      display: block;
  }
  .cube-inner .right {
      transform: rotateY(90deg) translateZ(25px);
  }
  .cube-inner .back {
      transform: rotateX(-180deg) translateZ(25px);
  }
  .cube-inner .left {
      transform: rotateY(-90deg) translateZ(25px);
  }
  .cube-inner .top {
      transform: rotateX(90deg) translateZ(25px);
  }
  .cube-inner .bottom {
      transform: rotateX(-90deg) translateZ(25px);
  }

  .cube, .cube li {
      position: absolute;
      display: block;
  }
  .cube {
      width: 100%;
      height: 100%;
      padding: 0;
      margin: -50px 0;
      transform-origin: 50px 50px;
      transform: rotateX(-33.5deg) rotateY(45deg);
      transform-style: preserve-3d;
      animation: slowspin 10s ease-in-out infinite 2s;
      margin: -50px 0 0 -50px;
      top: 50%;
      left: 50%;
  }

  .cube .front {
      transform: translateZ(50px);
  }
  .cube .back, .cube .front, .cube .left, .cube .right, .cube .top {
      background: radial-gradient(transparent 30%,rgba(16,47,91,.2) 100%);
  }
  .cube li {
      width: 75pt;
      height: 75pt;
      transition: transform 1s ease-in-out;
  }
  .cube .back {
      transform: rotateX(-180deg) translateZ(50px);
  }
  .cube .right {
      transform: rotateY(90deg) translateZ(50px);
  }
  .cube .left {
      transform: rotateY(-90deg) translateZ(50px);
  }
  .cube .top {
      transform: rotateX(90deg) translateZ(50px);
  }
  .cube .bottom {
      transform: rotateX(-90deg) translateZ(50px);
  }
  .cube .floor {
      box-shadow: -300px 0 50px rgba(0,0,0,.3);
      backface-visibility: visible;
      width: 110px;
      height: 110px;
      left: 295px;
      background-color: transparent;
      transform: rotateX(-90deg) translateZ(60px);
  }
  .cube-inner li:after {
      content: "";
      display: block;
      position: absolute;
      width: 50px;
      height: 50px;
      backface-visibility: hidden;
      background-color: rgba(16,58,177,.5);
      transition: transform 1s ease-in-out;
  }
  .cube .top:after {
      background-color: rgba(152,186,237,.5);
  }
  .cube li:after {
      content: "";
      display: block;
      position: absolute;
      width: 75pt;
      height: 75pt;
      backface-visibility: hidden;
      background-color: rgba(126,169,232,.5);
      transition: transform 1s ease-in-out;
  }
  @keyframes slowspin {
    0%{transform:rotateX(-33.5deg) rotateY(45deg)}
    10%,to{transform:rotateX(-33.5deg) rotateY(225deg)}
  }

  @keyframes fastspin {
    0%{transform:rotateX(-33.5deg) rotateY(45deg)}
    10%,to{transform:rotateX(-33.5deg) rotateY(-315deg)}
  }

  .cube .floor:after {
      display: none !important;
  }

</style>
