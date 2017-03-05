/* eslint-env serviceworker */

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('christianfei ').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/dest/main.min.js',
        '/search.json',
        '/dest/main.min.css',
        '/posts/Trying-out-Redash/',
        '/about/'
      ])
      .then(() => self.skipWaiting())
    })
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request)
    })
  )
})
