self.addEventListener('fetch', function fetcher (event) {
  var request = event.request;
  if (request.method !== 'GET') {
    event.respondWith(fetch(request)); return;
  }
});

event.respondWith(caches
  .match(request) 
  .then(queriedCache)
);

function queriedCache (cached) {
  var networked = fetch(request)
    .then(fetchedFromNetwork, unableToResolve)
    .catch(unableToResolve);
  return cached || networked;
}

function fetchedFromNetwork (response) {
  var clonedResponse = response.clone();
  caches.open(version + 'pages').then(function add (cache) {
    cache.put(request, clonedResponse);
  });
  return response;
}

function unableToResolve () {
  return offlineResponse();
}
function offlineResponse () {
  return new Response('', { status: 503, statusText: 'Service Unavailable' });
}

function unableToResolve () {
  var accepts = request.headers.get('Accept');
  if (accepts.indexOf('image') !== -1) {
    return caches.match(rainbows);
  }
  return offlineResponse();
}

function unableToResolve () {
  var url = new URL(request.url);
  var accepts = request.headers.get('Accept');
  if (accepts.indexOf('image') !== -1) {
    if (url.host === 'www.gravatar.com') {
      return caches.match(mysteryMan);
    }
    return caches.match(rainbows);
  }
  return offlineResponse();
}

function unableToResolve () {
  var url = new URL(request.url);
  var accepts = request.headers.get('Accept');
  if (accepts.indexOf('image') !== -1) {
    if (url.host === 'www.gravatar.com') {
      return caches.match(mysteryMan);
    }
    return caches.match(rainbows);
  }
  if (url.origin === location.origin) {
    return caches.match('/offline');
  }
  return offlineResponse();
}

if (url.origin === location.origin && accepts.indexOf('application/json') !== -1) {
  return offlineView();
}
function offlineView () {
  var viewModel = {
    model: { action: 'error/offline' }
  };
  var options = {
    status: 200,
    headers: new Headers({ 'content-type': 'application/json' })
  };
  return new Response(JSON.stringify(viewModel), options);
}
