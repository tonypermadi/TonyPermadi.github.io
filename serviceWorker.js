sync function getData() {
   const cacheVersion = 1;
   const cacheName    = `myapp-${ cacheVersion }`;
   const url          = 'https://tony.permadi.id/';
   let cachedData     = await getCachedData( cacheName, url );

   if ( cachedData ) {
      console.log( 'Retrieved cached data' );
      return cachedData;
   }

   console.log( 'Fetching fresh data' );

   const cacheStorage = await caches.open( cacheName );
   await cacheStorage.add( url );
   cachedData = await getCachedData( cacheName, url );
   await deleteOldCaches( cacheName );

   return cachedData;
}

async function getCachedData( cacheName, url ) {
   const cacheStorage   = await caches.open( cacheName );
   const cachedResponse = await cacheStorage.match( url );

   if ( ! cachedResponse || ! cachedResponse.ok ) {
      return false;
   }

   return await cachedResponse.json();
}

async function deleteOldCaches( currentCache ) {
   const keys = await caches.keys();

   for ( const key of keys ) {
      const isOurCache = 'myapp-' === key.substr( 0, 6 );

      if ( currentCache === key || ! isOurCache ) {
         continue;
      }

      caches.delete( key );
   }
}

try {
   const data = await getData();
   console.log( { data } );
} catch ( error ) {
   console.error( { error } );
}