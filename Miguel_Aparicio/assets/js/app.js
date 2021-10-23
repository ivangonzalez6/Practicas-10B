if ('serviceWorker' in navigator){

    window.addEventListener('load', () => {
        navigator.serviceWorker.register('../../sw.js')
        .then((data) => {
        console.log("Data " , data);
        })
        .catch((data) => {            
            console.log("carch",  data)
        });
    })
}

