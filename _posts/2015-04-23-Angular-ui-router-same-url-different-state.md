---
title: "Angular ui-router: define multiple states with same base url"
date: 2015-04-23
layout: post
category: posts
---

Recently on [pomodoro.cc](https://pomodoro.cc) I found myself in need of the following routes:

- /public
- /public/:id

To define a similar structure you can't have three separate states defined sharing the same base url.

What you can do is to define an *abstract* state and then the descendent child states, e.g.:

```
...
.state('public', {
  abstract: true,
  url: '/public',
  template: '<ui-view/>'
})
  .state('public.index', {
    url: '',
    templateUrl: 'public/index.html',
    controllerAs: 'PublicIndexCtrl as vm'
  })
  .state('public.room', {
    url: '/:id',
    templateUrl: 'public/room.html',
    controllerAs: 'PublicRoomCtrl as vm'
  })
```
