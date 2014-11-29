---

seo_desc: "Simplest Apache configuration for hosting multiple sites, Virtual hosts, Document root, /var/www/"
layout: post
title: "Simplest Apache configuration for hosting multiple sites"
date: 2014-01-18 17:47:32
category: articles
header_image: http://lucene.apache.org/images/mantle-asf.png
header_credit: http://lucene.apache.org/images/mantle-asf.png

---

I want to share the most simple and straightforward configuration that suited my needs for developing locally.

__________________

First of all, make a quick backup of your current `default` file in `/etc/apache2/sites-available/` like this:

```
cd /etc/apache2/sites-available/
sudo mv default .default.bckp
```

Now create a new file called `default` in the sites-available directory with the following content

```
<VirtualHost *:80>
	ServerName test1.local 		#the local hostname
	DocumentRoot /var/www/test1 #the corresponding document root
</VirtualHost>
<VirtualHost *:80>
	ServerName test2.local
	DocumentRoot /var/www/test2
</VirtualHost>
```

Now add the local hostnames to your /etc/hosts file and you're good to go!

```
127.0.0.1       localhost test1.local test2.local
```

<br>
<br>
<br>
PS: I'm sure this conf is won't fit in a production ready environment, but for a local setup it's just amazingly simple and effortless.
