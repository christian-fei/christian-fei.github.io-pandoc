---
layout: nil
---
/* eslint-env serviceworker */

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('airhorner').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/dest/main.min.js',
        '/search.json',
        '/dest/main.min.css',
        '/assets/fontello-cf/font/fontello.woff2?47902381',
        '/assets/fontello-cf/font/fontello.woff2?47902381',
        '/assets/fontello-cf/font/fontello.woff?47902381',
        '/assets/fontello-cf/font/fontello.woff?47902381',
        '/assets/fontello-cf/font/fontello.ttf?47902381',
        '/assets/fontello-cf/font/fontello.ttf?47902381',
        '/posts/Trying-out-Redash/',
        {% for post in site.posts %}"{{ post.url }}"{% unless forloop.last %},{% endunless %}{% endfor %}
        {% for page in site.pages %},"{{page.url}}"{% endfor %}
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
