if ('serviceWorker' in navigator) {
window.addEventListener('load', () => {
navigator.serviceWorker.register('/serviceWorker.js');
});
}
self.addEventListener('install', (event) => {
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
console.log('Inside the install handler:', event);
});
self.addEventListener('activate', (event) => {
console.log('Inside the activate handler:', event);
});
self.addEventListener(fetch, (event) => {
  console.log('Inside the fetch handler:', event);
});
