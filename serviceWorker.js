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
