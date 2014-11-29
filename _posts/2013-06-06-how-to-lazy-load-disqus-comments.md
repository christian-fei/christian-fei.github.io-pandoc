---
desc: "Understand how to lazy load/defer Disqus comments! With code and explanation."
layout: post
title: "How to lazy load Disqus comments"
date: 2013-06-06 18:36:07
---


Disqus is definitely one of the best commenting systems out there (not to mention that it is responsive).
As a speed freak I'm always concerned how much assets a website needs to load, affecting the overall load time of it.
________________

#The goal

The goal is simple: I want to load the comments only if the user is actually reading the article until the end. Otherwise the assets loaded by Disqus would impact on the site's speed too much. Th assets would have been loaded for nothing if the user didn't even read the whole article (maybe he got angry because the website was loading slowly..).

**I don't treat my users this way.**


#Disqus requests queue

A blog post on this site without loading Disqus comments loads these resources:
<a href="https://s3-eu-west-1.amazonaws.com/cf.img/posts/2013/06/requestswithoutdisqus.png" title="Requests queue without loading comments"><img class='lazy' data-echo="https://s3-eu-west-1.amazonaws.com/cf.img/posts/2013/06/requestswithoutdisqus.png" alt="Requests queue without loading comments"></a>

and here with all the requests Disqus made

<a href="https://s3-eu-west-1.amazonaws.com/cf.img/posts/2013/06/requestswithdisqus.png" title="Requests queue with loading comments"><img class='lazy' data-echo="https://s3-eu-west-1.amazonaws.com/cf.img/posts/2013/06/requestswithdisqus.png" alt="Requests queue with loading comments"></a>

Disqus is so intelligent to load stuff asynchronously, leveraging your websites load time.
So I don't see a **valuable** reason to not use Disqus as your commenting system.

#But..

There's always a but.

Wouldn't it be nice if Disqus would load afterwards? Like, only if the user is actually *reading* your article and was able to form an opinion about the topic, and load the comments then?

This way the user gets to read the article 'much' (a few seconds maybe) faster.

You won't believe how easy it is, until you see this sweet flavoured Javascript code:

```javascript
var comments = document.getElementsByClassName('comments')[0],
	coff = findTop(comments),
    disqusLoaded = false;

window.onscroll = function() {
    if(!disqusLoaded && window.pageYOffset > commentsOffset - 1000) {
        console.log('load comments,NOW !1e1even');
        disqusLoaded = true;
        loadDisqus();
    }
}
```

Of course ```findTop(element)``` is a custom function (that does exactly what it says), so here you can take a look at it:

```javascript
/* from here
	http://www.quirksmode.org/js/findpos.html
*/
function findTop(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return curtop;
    }
}
```

and ```loadDisqus()``` is a super simple function that appends the embed.js script from Disqus to the head:

```javascript
function loadDisqus() {
    var disqus_shortname = 'your_disqus_shortname';
    var dsq = document.createElement('script');
    dsq.type = 'text/javascript';
    dsq.async = true;
    dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    disqusLoaded=true;
}
```

#Putting it together

In your markup write an empty div with a class ```comments```, like this:

```html
<div class="comments"></div>
```
Then in your Javascript file add these lines of code to make Disqus load lazily:

```javascript
var comments = document.getElementsByClassName('comments')[0],
    disqusLoaded=false;

function loadDisqus() {
    var disqus_shortname = 'your_disqus_shortname';
    var dsq = document.createElement('script');
    dsq.type = 'text/javascript';
    dsq.async = true;
    dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    disqusLoaded = true;
}
//Get the offset of an object
function findTop(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return curtop;
    }
}

if(window.location.hash.indexOf('#comments') > 0)
    loadDisqus();

if(comments) {
    var commentsOffset = findTop(comments);

    window.onscroll = function() {
    	if(!disqusLoaded && window.pageYOffset > commentsOffset - 1500) {
            console.log('load comments, NOW!!');
            loadDisqus();
        }
    }
}
```

#UPDATE
[Michael](http://christian-fei.com/tutorials/how-to-lazy-load-disqus-comments/#comments) pointed out that if someone visited the page with ```#comments``` in the page URL, this won't work very well..
In the source code above I already updated it, here the simple code to make it work:

```javascript
if(window.location.hash.indexOf('#comments') > 0)
    loadDisqus();
```

<br>
<br>

Was it helpful? Did you find a bug or a way to improve this method?
Then please don't hesitate to tell me in the lazy loaded comments :)
