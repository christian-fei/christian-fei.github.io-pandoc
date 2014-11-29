---

seo_desc: "update dynamic field and nested arrays in MongoDB node, MongoDB dynamic dot notation"
layout: post
title: "Updating dynamic fields and nested arrays in MongoDB"
date: 2014-03-04 20:49:22
category: articles

---

<h4>
	<a href="#tldr" class="info">tldr</a>
</h4>
<br>

Let's take a simple example: a TicTacToe gamefield saved as a nested array in MongoDB.

In the Collection a gamefield document has the following structure:

__________________

```javascript
{
	"_id" : ObjectId("5316267e427d71bf192dce61"),
	"board" : [
		[
			"",
			"",
			""
		],
		[
			"",
			"",
			""
		],
		[
			"",
			"",
			""
		]
	]
}
```

Nothing special here.

But here comes the challenge:

*How would you update the field board[1][2]*

##The dot-notation

Check the [reference](http://docs.mongodb.org/manual/core/document/#dot-notation) for more info.

There is still a small issue after having discovered the documentation that *seemed* to save my day: I needed a dynamic string, not a hardcoded one.

So this wasn't working, sadly, it would throw an error because dear Mongo tries to access to an undefined index 'x' and of this undefined index the key y:

```
gamesColl.update({_id: realId},{
	$set: {
		"board.x.y" : "X"
	}
}, callback);
```

And I tried this one afterwards, but it isn't a valid object, of course:

```
gamesColl.update({_id: realId},{
	$set: {
		"board."+x+"."+y : "X"
	}
}, callback);
```

And yes, I tried to create the string outside of the update function. This would obviously not work because it sets the field "dotNotationString" to "X" instead:

```
var dotNotationString = "board."+ x +"." + y;
gamesColl.update({_id: realId},{
	$set: {
		dotNotationString : "X"
	}
}, callback);
```

<h3 id="tldr">Dynamic dot-notation (workaround)</h3>

Then it hit me: 

```
var setObject = {};
setObject["board."+ x +"."+ y] = player;
gamesColl.update({_id: realId},{
	$set:setObject
}, function(err,doc){
	console.log(err,doc);
});

```


---

PS: I'm not sure if I was really dumb and tired, but I found this to be the only practical solution to my (drinking) problem.