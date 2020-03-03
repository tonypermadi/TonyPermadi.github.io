'use strict';
self.addEventListener('install', event => {
function onInstall () {
return caches.open('static')
.then(cache =>
cache.addAll([
'https://res.cloudinary.com/tony-permadi/image/upload/tpimg.webp',
'/'
])
);
}
event.waitUntil(onInstall(event));
});
self.addEventListener('activate', event => {
});
self.addEventListener('fetch', (event) => {
if (event.request.method === 'GET') {
event.respondWith(
caches.match(event.request)
.then((cached) => {
var networked = fetch(event.request)
.then((response) => {
let cacheCopy = response.clone()
caches.open(CACHE_NAME)
.then(cache => cache.put(event.request, cacheCopy))
return response;
})
.catch(() => caches.match(offlinePage));
return cached || networked;
})
)
}
return;
});
