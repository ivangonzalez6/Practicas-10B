
self.addEventListener('install', result =>{

    let nameCache ='cache-peliculas'
   
    let files = [
            '/',
            'index.html',
            'peliculas.html',
            'assets/css/peliculas.css', 
            'assets/css/estilos.css' 
    ]
    caches.open(nameCache)
    .then(cache =>{
        return cache.addAll(files)
    })
    .catch(()=>{
        console.log('algo salio mal')
    })
})

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
        //a responder lonque se encuentra en cahe

        eventFech.respondWith(
            caches.match(eventFech.request)
        )
    });

    */
    self.addEventListener('fetch', eventFetch =>{
        /* 2.- Network Only */       
        eventFetch.respondWith(
           fetch(eventFetch.request)
        )
    })