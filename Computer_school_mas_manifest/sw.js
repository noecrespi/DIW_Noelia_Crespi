const urlsToCache = [
    "./",  // Apunta a la misma ubicación (raíz del service worker)
    "./index.html",
    "./style.css",
    "./img/fotofrontal.jpg",
    "./img/html5.png",
    "./img/javascript.png",
    "./img/php.png",
    "./img/angular.png",
];

let cacheName = "Computer_school_mas_manifestV2";

self.addEventListener("install", (event) => {
    console.log("Service worker installed");

    event.waitUntil(
        caches.open(cacheName).then((cache) =>
            cache.addAll(urlsToCache)
        )
    );
});

self.addEventListener("activate", (event) => {
    console.log("Service worker activado");
});

self.addEventListener('fetch', async (event) => {
    event.respondWith(
        caches.open(cacheName).then((cache) => {
            return cache.match(event.request).then((cachedResponse) => {
                return cachedResponse || fetch(event.request.url).then((fetchedResponse) => {
                    // Add the network response to the cache for future visits.
                    // Note: we need to make a copy of the response to save it in
                    // the cache and use the original as the request response.
                    cache.put(event.request, fetchedResponse.clone());
  
                    // Return the network response
                    return fetchedResponse;
                });
            });
        })
    );
  });


// Guardar cache css
// caches.open("Computer_school_mas_manifest").then(
//     (cache) => {
//         cache.add("styles.css");
//     })
