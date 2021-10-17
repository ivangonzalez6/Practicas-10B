
const API_URL = "https://www.omdbapi.com/?apikey=9ea37c31";
const xhr = new XMLHttpRequest();
const movie_img = "$";
const movie_titulo = "&";
const movie_des = "#";


const modelo = ' <div class="card">' +
                '<div class="icon" >' +
                    '<i class="fab fa-html5"></i> ' +
                    '<img src=" '+ movie_img +' " alt="">' +
                '</div>' +
                '<div class="info__description">' +
                    '<div class="">'+ movie_titulo +'</div>' +
                    '<p>Año:'+ movie_des +'</p>' +
                    '<input type="button" value="Reproducir">' +
                '</div>' +
                '</div>';                
let lst_modelos = ""


 function cursor(data){
    for (let i in data) {         
        for (let j in data[i]) {      
            if(data[i][j].Title){
                //console.log(data[i][j].Title); 
                lst_modelos += modelo.replace("$", data[i][j].Poster)
                .replace("&", data[i][j].Title)
                .replace("#", data[i][j].Year)
            }          
        }
    }
    return lst_modelos;
}




/*
fetch(API_URL + "&s=comics&page=1")
    .then((Response)=> Response.json())
    .then((movies2) => { 
        console.log(movies2);
        let allModelos2 = cursor(movies2);
        document.querySelector('#div_Comics').innerHTML = allModelos2;
    });

*/




const getListPeliculas= () =>{
    return new Promise ((resolve, reject) => {
       
            fetch(API_URL + "&s=terror&page=1")
            .then((Response)=> Response.json())
            .then((movies) => { 
                resolve(movies);
                document.querySelector('#div_terror').innerHTML = cursor(movies);
               
            });

            fetch(API_URL + "&s=comics&page=1")
            .then((Response)=> Response.json())
            .then((moviesComic) => { 
                resolve(moviesComic);           
                document.querySelector('#div_Comics').innerHTML = cursor(moviesComic);              
            });
    });
}

getListPeliculas()
.then((modelos) => console.log(modelos)
);






//getComics().then((modelos2) => document.querySelector('#div_Comics').innerHTML = cursor(modelos2));





/* fetch(API_URL + "&s=comics&page=1")
.then((Response)=> Response.json())
.then((movies2) => { 
    console.log(movies2);
    let allModelos2 = cursor(movies2);
    document.querySelector('#div_Comics').innerHTML = allModelos2;
});
 */

