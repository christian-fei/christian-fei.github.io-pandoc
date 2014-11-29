---
desc: "Reveal effect with CSS only and straightforward markup, ready for being implemented on your website"
layout: post
title: "Reveal effect, CSS only"
date: 2013-05-27 21:05:35
---


[As seen on codepen.io](http://codepen.io/christian-fei/pen/rKxBD) I [reproduced](http://boldking.com) an awesome reveal effect, with some fancy CSS3.

____________

Take a look :

<div class="reveal">
  <img data-echo="http://dribbble.s3.amazonaws.com/users/220154/screenshots/1078023/landscapev1dribbblewhite_1x.png" class='reset' alt=""/>
  <div class="overlay"></div>
  <div class="text">
    <p>Landscape v1 white</p>
  </div>
</div>

##The markup

```html
<div class="reveal">
  <img data-echo="http://dribbble.s3.amazonaws.com/users/220154/screenshots/1078023/landscapev1dribbblewhite_1x.png" alt=""/>
  <div class="text">
    <p>Reveal text</p>
  </div>
  <div class="overlay"></div>
</div>
```

Check out the open source project at [codepen.io](http://codepen.io/christian-fei/pen/rKxBD) and download [the archive containing all files](http://codepen.io/christian-fei/share/zip/rKxBD)
