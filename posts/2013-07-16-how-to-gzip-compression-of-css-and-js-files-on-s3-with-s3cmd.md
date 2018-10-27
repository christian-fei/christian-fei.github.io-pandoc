---
desc: "How to enable Gzip Compression on static website hosting with AWS Amazon S3. Serve compressed files, CSS and JavaScript"
layout: post
category: posts
title: "How to: Gzip compression of CSS and JS files on S3 with s3cmd"
date: 2013-07-16 01:51:46
---


Let me show you how many Kilobytes you can save by compressing files with Gzip (a real world example):

<img src="https://s3-eu-west-1.amazonaws.com/cf.img/posts/2013/07/gzipCSS.png" alt="gzip css amazon s3" class="centered boxs"/>

_________

The uncompressed/deflated CSS file weights 25.1 KB, but from the server to the client only 6.9 KB have been transferred.

Isn't that nice?!

<br/>

As an example I will use the files <b>```main.css```</b> and <b>```main.gz.css```</b> to make the process clear, but this technique can be applied on JavaScript files too.

#Gzippin' made easy

I know how to gzip stuff on Unix OS's, not on Windows, but the syntax is probably more or less the same.

Anyways: let's say you want to compress the file called <b>```main.css```</b> into a smaller, compressed file called <b>```main.gz.css```</b>

```
gzip -c -9 main.css > main.gz.css
```

<small>
	The flag -9 means 'highest compression'
	<br/>
	And -c prints the output to stdout so that we can pipe it to another file (main.gz.css)
</small>

The same principle works for JS files. I couldn't make it work for HTML files though.

#Uploading to S3

Now the steps to follow are:

* setting the right MIME Type and Content-Encoding
* making the files publicly accessible

<br/>

It's nothing simpler than:

```
s3cmd -P -m text/css --add-header 'Content-Encoding:gzip' main.gz.css s3://best-bucket-ever/main.gz.css
```

<small>
	Where
	<br/>
	-P is the 'make public' flag
	<br/>
	-m sets the MIME Type
	<br/>
	--add-header Add a given HTTP header to the upload request (for more info <b>```man s3cmd | grep header```</b>)
</small>


<br/>

Easy right?

If you are facing any issues or have any thoughts about this tutorial, don't hesitate to comment or fire me a [tweet](https://twitter.com/intent/user?screen_name=christian_fei)
