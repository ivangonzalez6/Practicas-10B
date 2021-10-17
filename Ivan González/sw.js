var nameChache = "cache-10b";
var files = [
  "/",
  "/style.css",
  "/index.js",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
  "/manifest.json",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(nameChache).then(function (cache) {
      console.log("Cache Opened");
      return cache.addAll(files);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("SW activated!");
});

/*self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});*/

self.addEventListener("fetch", (eventFetch) => {
  //Strategies Cache

  // 1. Cache only: La aplicación solamente va a responder lo que se encuentra en cache
  //eventFetch.respondWith(caches.match(eventFetch.request));

  //2. Network only: 1. Cache only: La aplicación solamente va a responder la misma petición

  eventFetch.respondWith(fetch(eventFetch.request));
});
