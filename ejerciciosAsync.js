//Ejercicio UNO

function saludar(nombre) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Hola ${nombre}`)
        }, 1000);
    })
}

saludar("Luisa").then((resultado) => {
    console.log(resultado)
})

//Ejercicio DOS

function validarEdad(edad) {
    return new Promise((resolve, reject) => {
        if (edad >= 18) {
            resolve("Acceso permitido");
        } else {
            reject(new Error("Acceso denegado: Menor de edad"));
        }
    });
}
function obtenerDatoPromesa(edad) {
    return validarEdad(edad)
        .then((mensaje) => {
            return mensaje;
        })
        .catch((error) => {
            return error.message;
        });
}

// La nueva función usando async/await
async function ejercicioAsync() {
    try {
        const resultado = await obtenerDatoPromesa(19);
        console.log("Éxito:", resultado);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

ejercicioAsync();

//Ejercicio CUATRO
function pasoUno() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(5)
        }, 500);
    })
}


//-----------------------------------------------------------------------------------//

function pasoDos(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n * 2);
        }, 500);
    })
}

//-----------------------------------------------------------------------------------//
function pasoTres(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n + 10);
        }, 500);
    })
}

//Encadenamiento de las 3 funciones
pasoUno()
    .then((resultadoUno) => {
        return pasoDos(resultadoUno);
    })
    .then((resultadoDos) => {
        return pasoTres(resultadoDos);
    })
    .then((resultadoFinal) => {
        console.log("El resultado final es: ", resultadoFinal)
    })
    .catch((error) => {
        console.log("Ha orcurrido un error")
    })


//Ejercicio CINCO
function dividir(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject("No se pudo dividir entre cero");
        } else {
            resolve(num1 / num2);
        }
    })
}

async function resultadoFinal(num1, num2) {
    try {
        const resultado = await dividir(num1, num2);
        console.log("Resultado final: ", resultado);
    } catch (error) {
        console.log("Ha ocurrido un error", error);
    }
}

resultadoFinal(2, 5)

//------------------------------NIVEL DOS----------------------------------//
//Ejercicio SEIS

async function obtenerUsuario() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
        const data = await response.json();
        const nameUser = data.name;
        const emailUser = data.email;
        console.log("Nombre usuario:", nameUser);
        console.log("Email del usuario:", emailUser);
    } catch (error) {
        console.log("error al consumir la API")
    }
}
obtenerUsuario()

//Ejericicio SIETE

async function obtenerPost(id) {
    try {
        const responsePost = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        if (responsePost.status === 200) {
            const postRequest = await responsePost.json();
            console.log("Título del post: ", postRequest.title);
            console.log("Cuerpo del post: ", postRequest.body)

        } else {
            console.log("Post no encontrado")
        }
    } catch (error) {
        console.log("error al consumir la API")
    }
}
obtenerPost(1);
obtenerPost(99999);

//Ejercicio OCHO

async function obtenerPostsDeUsuario(userId) {
    const requestPosts = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const requestJson = await requestPosts.json();
    const postUserFilter = requestJson.filter(post => post.userId === userId);

    return postUserFilter;
}
obtenerPostsDeUsuario(1).then((resultado) => {
    console.log(`Numero de posts para este usuario: ${resultado.length}`);

    console.log("\nTítulos de los posts:\n");
    resultado.forEach((post, index) => {
        console.log(`${index + 1}. ${post.title}`);
    });
})

//Ejercicio NUEVE
//crear funcion que reciba un objeto con 3 parametros title, body y userId
//hacer una peticion post con ese objeto json

async function crearPost(data = {}) {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }); 
};

async function consumirPost(){
    const data = {
        title:"Este es un post nuevo",
        body:"El post mas dificil de crear es este",
        userId: 7,
    }
    const response = await crearPost(data);
    const responseObject = await response.json();
    console.log("este es el id del objeto", responseObject.userId)
}

consumirPost()


