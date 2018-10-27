---
title: "How to invalidate AppCache"
date: 2015-08-12
layout: post
category: posts
---


AppCache is a nice guy when it comes to caching stuff, but at the end of the day it is just a [fucking douchebag](http://alistapart.com/article/application-cache-is-a-douchebag).

For me AppCache is a smelly, almost invisible, annoying little parasite.

If you're having trouble cleaning up the mess this guy did (aka invalidate the cache), these simple steps will lessen your burden and throw this douchebag out of the parents' house.

---

If you're using Chrome, check **chrome://appcache-internals** for your downloaded manifests.

You'll see your damn thing. Don't click on the `Remove` button, you want to invalidate it for all your users programmatically, right?

To do that simply put an unexisting resource for the manifest in your markup, for example:

```
<!DOCTYPE html>
<html lang="en" manifest="/app.deprecated.manifest">
  <head>
    ...
```

I know this is unbelievable, but if you check **chrome://appcache-internals** again, you won't see your site ever again.
