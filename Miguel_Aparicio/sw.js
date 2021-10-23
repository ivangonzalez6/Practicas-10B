self.addEventListener("install", (result) => {
  let nameCache = "cache-peliculas";

  let files = [
    "/",
    "index.html",
    "peliculas.html",
    "assets/css/peliculas.css",
    "assets/css/estilos.css",
  ];
  caches
    .open(nameCache)
    .then((cache) => {
      return cache.addAll(files);
    })
    .catch(() => {
      console.log("algo salio mal");
    });
});

/*
self.addEventListener("fetch", (event)=>{
    event.respondWith(
        caches.match(event.request).then((param)=>{
            if(param){
                return param
            }
            
            return fetch(event.request)
        })
    )
});
*/

/*
    self.addEventListener('fetch', eventFech =>{
        //strategias cache
        //1.- cache only: la aplicacion solo va 
        //a responder lonque se encuentra en cahe (cuando quiero que seimpre esten servidos al cliente)

        eventFech.respondWith(
            caches.match(eventFech.request)
        )
    });
*/

/*
    if(eventFetch.request.url.includes("css")){

    }*/

self.addEventListener("fetch", (eventFetch) => {
  /*1.- cache only: la aplicacion  */
  /*
    if(eventFetch.request.url.includes("css")){

    }*/
  /* 2.- Network Only */
  /* eventFetch.respondWith(
           fetch(eventFetch.request)
        );
    */
  /* 3.- Cache First: primero se va a buscar las peticiones al cache, y en caso de que no este lo va a buscr en la red. */
  /*
  const res = caches
    .match(eventFetch.request)
    .then((cacheResponse) => {
       return cacheResponse ? cacheResponse : fetch(eventFetch.request)
      //return cacheResponse;
    })
    .catch((cachesError) => {
        console.error("Catch Error", cachesError);
    });
  eventFetch.respondWith(res);
*/

  /* 4. Network First: Primero hacer un fecht y buscar en la red*/

  const res = fetch(eventFetch.request)
    .then((networkResponse) => {
      return networkResponse ? networkResponse : caches.match(eventFetch.request);
    })
    .catch((networkError) => {
      console.error("Network Error", networkError);
    });
  eventFetch.respondWith(res);
});
