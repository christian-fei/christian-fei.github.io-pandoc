---

seo_desc: "CSS oscilloscope, animation-timing-function how it works, ease-in-out CSS3"
layout: post
title: "CSS oscilloscope"
date: 2014-02-09 13:20:40
category: articles
css:
- oscilloscope.css
js:
- oscilloscope.js
- prefixfree.min.js

---

<div class='oscilloscope ease clear'>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
</div>

<div class="info">
  if you see artifacts or a buggy animation, please refresh the page
</div>


The purpose of this article is to visualize the `animation-timing-function` property through an oscilloscope.

The oscilloscope is animated through `animation-timing-function` itself. How meta is that?


<h3>How it is done</h3>

HAML: because there are 50 `.bar` elements

```haml
.oscilloscope
  %p ease
  -(1..50).each do
    .bar.ease
```

Each `.bar` element represents.. well a bar on the oscilloscope. The 'trick' behind this sorcery is pretty cool, imo: each `.bar` has a incrementing `animation-delay` value.

Each bar share the same `animation-timing-function` and `animationg-duration` property.

```scss
$anim-dur: 3000ms;
$elem-count: 75;
$elem-width: 1px;
$elem-height: 8em;
$anim-delay: $anim-dur/$elem-count;
$base-color: #008FFF;
$y:$elem-height/2;
/*set the default animation-timing-function if no CSS class is defined*/
$curve:cubic-bezier(.17,.67,.45,-0.81);

.oscilloscope.clear{
  float:none;
  margin: 6em auto 0em;
}

.oscilloscope {
  padding-bottom: $elem-height/2;
  border-bottom:3px solid white;
  display:block;
  margin: 1em auto;
  text-align: center;
  @media all and(min-width:40em){float:left;width:50%;}
  @media all and(min-width:50em){width:33%;}
  .bar {
    animation-name: anim;
    animation-duration: $anim-dur;
    animation-iteration-count:infinite;
    display: inline-block;
    height: $elem-height;
    width: $elem-width;
    margin: -1.5px;
    background: $base-color;
    @for $i from 1 through $elem-count {
      &:nth-of-type(#{$i}){animation-delay: $anim-delay*$i;} 
      &:nth-of-type(#{$i *2}){animation-name: animeven;}
    }
  }
}
@keyframes anim {
  0%,100% {transform: translateY(0px);}
  50% {transform: translateY($y);}
}
@keyframes animeven {
  0%,100% {transform: translateY(0px);}
  50% {transform: translateY(-$y);}
}
.oscilloscope{
  &.linear .bar{animation-timing-function:linear;}
  &.ease-out .bar{animation-timing-function:ease-out;}
  &.ease-in .bar{animation-timing-function:ease-in;}
  &.ease-in-out .bar{animation-timing-function:ease-in-out;}  
  &.ease .bar{animation-timing-function:ease;}
  &.custom-one .bar{animation-timing-function:cubic-bezier(.17,.67,.45,-0.81);}
  &.custom-two .bar{animation-timing-function:cubic-bezier(1,-1,.58,.97);}
  &.custom-three .bar{animation-timing-function:cubic-bezier(0,1,0,-1);}
}
.oscilloscope p{margin-bottom:$elem-height/2;padding:1em;}
```

Enjoy the rest :)

<select name="function" id="function">
  <option value="linear">linear</option>
  <option value="ease" selected>ease</option>
  <option value="ease-out">ease-out</option>
  <option value="ease-in">ease-in</option>
  <option value="ease-in-out">ease-in-out</option>
  <option value="custom-one">custom-one</option>
  <option value="custom-two">custom-two</option>
  <option value="custom-three">custom-three</option>
</select>

<div class='oscilloscope demo clear ease'>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
  <div class='bar'></div>
</div>