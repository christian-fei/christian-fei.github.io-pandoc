---
desc: "Create a simple templating system with regular expressions, format, jQuery plugin, JavaScript, template, JSON"
layout: post
category: posts
title: "Simple templating with regular expressions"
date: 2013-10-12 18:08:55
---

Let's say you made a jQuery plugin and want to have an output (like a list of search results), whose aspect and format can be defined by the user.

_______________


The code provided in this article follows the same thought when I created the [Simple Jekyll Search jQuery plugin](/simple-jekyll-search-jquery-plugin/): create simple templates with regular expression.

###Theory

The theory is very simple:

With a JSON file/object and the template the user provided you can create a basic templating system.

----

You have a JSON file/object that contains the data you want to parse (in this example it is a list of articles containing the title, category, description, url and publication date of the article).

Something similar to this:

```javascript
var data =
[
	{
		'title'			:	'Simple templating with regular expressions',
		'category'		:	'tutorials',
		'description'	:	'some description text',
		'url'			:	'/simple-templating-with-regular-expressions/',
		'pub_date'		:	'12 Oct 2013'
	},
	{
		'title'			:	'Vendor prefixes? No thanks',
		'category'		:	'tutorials',
		'description'	:	'some description text',
		'url'			:	'/vendor-prefixes-no-thanks/',
		'pub_date'		:	'09 Oct 2013'
	}
]
```

-----

The format will be specified by the user and it is a variable that contains... well the format of the template.

I thought it was a good idea to isolate variables in a template with wrapping `{}` around them.

A valid template could look like this :

```html
<a href="{url}" title="{description}">{title}</a>
```

and you'll probably want to save that into a variable (see code below).

###And now what?

I take this example again from [my jQuery plugin](/simple-jekyll-search-jquery-plugin/):

You could loop through the JSON object and replace each occurency of a property inside curly braces with the property that corresponds to the current item of the JSON object.

```javascript
var template='<a href="{url}" title="{description}">{title}</a>';
for (var i = 0; i < data.length; i++) {
    var obj = data[i];
    output = template;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            var regexp = new RegExp('\{' + key + '\}', 'g');
            output = output.replace(regexp, obj[key]);
        }
    }
    list.append( $(output) );
}
```
<small style='float:right'>kudos to [Todd Motto](http://toddmotto.com)</small>
<br/>

######update 20/10/2013

[Todd Motto](http://toddmotto.com) [improved](http://jsfiddle.net/toddmotto/xxghB/) this idea with a very clever trick using a `for in` loop and `hasOwnProperty` to parse the data without errors. At the same time he got rid of the obsolete and redundant `properties` variable.

See the [discussion](https://twitter.com/toddmotto/status/391850946999115776) on Twitter!


######update 21/10/2013

[Dillon de Voor](http://www.crocodillon.com/) suggested another solution in the [comments](#comment-1090158632). Pretty genius idea, I have to say:

```javascript
var template='<a href="{url}" title="{description}">{title}</a>';
for (var i = 0; i < data.length; i++) {
    var obj = data[i];
    output = template.replace(/\{(.*?)\}/g, function(match, property) {
    	return obj[property];
	});
}
```

**Now this is also the official solution used in [Simple Jekyll Search](/simple-jekyll-search-jquery-plugin/)**
