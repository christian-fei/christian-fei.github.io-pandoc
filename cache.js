---
layout: nil
---
/* eslint-env serviceworker */

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('christianfei ').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/dest/main.min.js',
        '/dest/main.min.css',
        '/about',
        '/posts',
        '/assets/images/cf.png'
      ])
      .then(() => self.skipWaiting())
    })
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim())
})

// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request).then(response => {
//       return response || fetch(event.request)
//     })
//   )
// })

// https://jakearchibald.com/2014/offline-cookbook/#cache-persistence
// "Network falling back to cache"
self.addEventListener('fetch', function (event) {
  event.respondWith(
    fetch(event.request).catch(function () {
      return caches.match(event.request)
    })
  )
})
