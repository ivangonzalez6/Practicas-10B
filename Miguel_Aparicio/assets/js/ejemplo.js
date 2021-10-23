
const API_URL = "https://www.omdbapi.com/?apikey=9ea37c31";
const xhr = new XMLHttpRequest();

    const miPromesa = new Promise((resolve, reject) =>{
        
        let ordenTerminada = false;
        if (ordenTerminada){
            resolve('la orden se ejecuto');
        }

        else{
            reject('La orden fue rechazada')
        }

    });

miPromesa.then((modelos) => console.log(modelos));


 