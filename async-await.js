console.log("Esto es async await")

//codigo sincrono: se ejecuta de manera secuencial. una linea de codigo se ejecuta despues de la otra

//codigo asyncrono no espera, ejecuta todo y puede ejecutarse una linea de codigo antes que otra

/*setTimeout(() => {
    console.log("hola mundo asincrono 5");
}, 2000);
console.log("hola mundo asincrono 6");

//promesas= es un objeto que representa la eventual finalizacion o fracaso de una operacion asincrona y
// su valor resultante

//pending - pendiente de ser resuelta o rechazada
//fulfilled - resolved
//rejeted - failed

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = true;
        if(exito){
            resolve("operacion exitosa");
        }else{
            reject("operacion fallida");
        }

    }, 3000);
})

//consumir promesa

promesa.then((resultado) => {
    console.log("resultado de la promesa:", resultado);//se ejecuta cuando la promesa se resuelve exitosamente
}).catch((error) => {
    console.log("resultado de la promesa:", error);//se ejecuta cuando la promesa se rechaza
});

//async-await > es una forma de escribir codigo asincrono de manera mas legible y facil de entender
//es una sintaxis azucarada sobre las promesas

async function functionAsincrona(){
    try {
        const resultado = await promesa;
        console.log("resultado de la promesa async-await:", resultado);
    }catch(error){
        console.log("error de la promesa con async await:", error);
    }
}

async function funcionAsincronaDos(){
    console.log("Hola mundo desde la funcion asincrona");
    const resultado = await new Promise((resolve, rejected) => {
        setTimeout(() => {
            const exito =true;
            if(exito){
                console.log("operacion exitosa funcion sincrona")
            }else{
                console.log("operacion fallida funcion asincrona")
            }
        }, 3000);
    });
    try{
        console.log("resultado de la promesa con async-await:", resultado);
    }catch(error){
        console.log("error de la promesa con el llamado a la funcion asincrona con await")
    }
}

functionAsincronaDos();


//Ejercicio asyncrono consumiendo una API https://jsonplaceholder.typicode.com/users/1

//consumir API con fetch esta funcion permite hacer peticiones HTTP de manera asyncrona

function getUserInfo(){
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function(response){
        console.log("respuesta de la API", response)
        return response.json();
    }).then(function(data){
        console.log("datos del usuario con then y catch", data);
    }).catch(error){
        console.log("Ha ocurrido un error", error)
    }
}
getUserInfo();

async function getUserInfoAwait(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
        console.log("respuesta de la API desde await", response);
        const data = await response.json();
        console.log("datos del usuario desde el await", data);
    }catch(error){
        console.log("error al consumir la API desde await")
    }
}
getUserInfoAwait()


//ejemplo con multiples await

async function getMultiplesAwait(){
    console.log("antes del await");
    const requestUser = await fetch("https://jsonplaceholder.typicode.com/users/3");
    const dataUser = await requestUser.json();
    console.log("datos del usuario con async await", dataUser);

    const requestPost = await fetch("https://jsonplaceholder.typicode.com/posts?userId=5");
    const dataPost = await requestPost.json();
    console.log("datos del usuario con async await", dataPost);

    const requestComments = await fetch("https://jsonplaceholder.typicode.com/comments?postId=6");
    const dataComments = await requestComments.json();
    console.log("datos del usuario con async await", dataComments);
}
getMultiplesAwait()

Throw se usa para lanzar errores
*/

//https://jsonplaceholder.typicode.com/photos

async function getPhotosApi(){
    const responsePhotos = await fetch("https://jsonplaceholder.typicode.com/photos/300")
    const responsePhotoId = await responsePhotos.json();
    console.log("Respuesta del json Photos un ID:", responsePhotoId)
    
}

getPhotosApi()