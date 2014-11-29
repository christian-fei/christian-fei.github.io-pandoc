---
title: "Angular UI-Router and Jade, ui-view directive troll and 'fix'"
date: 2014-08-31
layout: post
---

[Angular UI router](https://github.com/angular-ui/ui-router) is a fantastic alternative to ngRoute.

Nested states and views, dynamic links that trigger states, named views, and all of the fancy words that you can think of.

Though one thing that got me *really* pissed off when using UI router and Jade was that.. well, that it didn't work.

In your HTML you would write a `ui-view` attribute (for simple applications with single views) where you would like to render your templates.
Like `<main ui-view></main>`. And that's it.

The issue I encountered is that in my Jade template I did the same, and the routing didn't work. There where no JavaScript errors or such, everything seemed fine.

I solved it by declaring an empty 'named' default view, like this

```
main(ui-view="")
```

The problem was that Jade by default would translate this to the following HTML (giving the ui-view the name "ui-view"):

```
<main ui-view="ui-view"></main>
```
