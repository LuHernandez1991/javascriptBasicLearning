//Ejercicio UNO

/*
PASOS:
1. Crear funcion 
2. retornar promesa que resuelva nombre completo
3. usar.then para imprimir resultado
*/

function obtenerNombre(nombre){
    return new Promise((resolve)=>{
        resolve(`El nombre es: ${nombre}`)
    })
}
obtenerNombre("Luisa").then((resultado)=>{
    console.log(resultado)
});

//Ejercicio DOS

/*
PASOS:
1. Crear funcion 
2. retornar promesa despues de 2 sec
3. resolver con mensaje buenos dias
4. usar.then para imprimir resultado
*/

function esperarYSaludar(){
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve("Buenos días!")
        }, 2000);
    })
};

esperarYSaludar().then((resultado)=>{
    console.log(resultado)
});

//Ejercicio TRES

/*
PASOS:
1. Crear funcion 
2. retornar promesa despues de 2 sec
3. resolver con mensaje buenos dias
4. usar.then para imprimir resultado
*/

function verificarStock(numero){
    return new Promise((resolve, reject)=>{
        if(numero > 0){
            resolve("Producto disponible");
        }else{
            reject("Sin stock disponible")
        }
    })
}
verificarStock(0).then((resultado)=>{
    console.log(resultado);
}).catch((error) =>{
        console.log("Ha ocurrido un error", error)
});

//Ejercicio CUATRO

/*
PASOS:
1. tomar la promesa anterio y agregarle finally
que es finally?: es un bloque de código que se ejecuta obligatoriamente al final de una promesa. 
No le importa si las cosas salieron bien o salieron mal; su único trabajo es correr siempre al último.
*/

function verificarStock(numero){
    return new Promise((resolve, reject)=>{
        if(numero > 0){
            resolve("Producto disponible");
        }else{
            reject("Sin stock disponible")
        }
    })
}
verificarStock(0).then((resultado)=>{
    console.log(resultado);
}).catch((error) =>{
        console.log("Ha ocurrido un error", error)
}).finally(()=>{
    console.log("Consulta de stock finalizada")
});

//Ejercicio CINCO

/*
PASOS:
1. crer una funcion que reciba precio como parametro y porcentaje
2. crear logica con if/else
3. consumir la promesa y retornar los resultados con .then
*/

function calcularDescuento(precio, porcentaje){
    return new Promise((resolve, reject)=>{
        const porcentajeDescuento = (precio * porcentaje)/100
        const precioFinal = precio - porcentajeDescuento;
        if(porcentajeDescuento < 100 & porcentajeDescuento > 0){
            resolve(`El precio final es: $${precioFinal}. Se aplicó un ${porcentaje}% de descuento (te ahorraste $${porcentajeDescuento}).`);
        }else{
            reject("Porcentaje inválido")
        }
    })
}
calcularDescuento(200,15).then((resultado)=>{
    console.log(resultado)
});

//Ejercicio SEIS
/*
PASOS:
1. crer una funcion
2. retornar promesa que resuelva numero 10
3. encadenar 3 consecuciones que arrojen resultados como:
- El primero multiplica el valor por 3
- El segundo le suma 5
- El tercero lo convierte al string `"Resultado: [valor]"`
4 imprimir resultado
*/

function procesarNumero(numero){
    return new Promise((resolve)=>{
        resolve(numero)
    })
}
procesarNumero(10).then((resultado)=>{
    console.log("Numero promesa:", resultado);
    return procesarNumero(resultado * 10)
}).then((resultado)=>{
    console.log("Resultado then uno: ", resultado);
    return procesarNumero(resultado + 5)
}).then((resultado)=>{
    console.log("Resultado then dos: ", resultado);
    return procesarNumero(String(resultado ))
}).then((resultado)=>{
    console.log("Resultado: ", resultado)
})

//Ejercicio SIETE
/*
PASOS:
1. crer tres funciones separadas que retornen promesas
2. luego encadenarlas
*/

function convertirAMayusculas(texto){
    return new Promise((resolve)=>{
        resolve(texto.toUpperCase());
    })
};

function eliminarEspacios(texto){
    return new Promise((resolve)=>{
        resolve(texto.trim());
    })
};

function contarCaracteres(texto){
    return new Promise((resolve)=>{
        resolve(texto.length);
    })
};

convertirAMayusculas(" Hola Mundo ").then((textoMayus)=>{
    console.log("Este es el texto convertido en mayúscula:", textoMayus)
    return eliminarEspacios(textoMayus)
}).then((textoSinEspacios)=>{
    console.log("Este es el texto sin espacios:", textoSinEspacios)
    return contarCaracteres(textoSinEspacios)
}).then((totalCaracteres)=>{
   console.log("La cantidad total de caracteres es:", totalCaracteres)
});

//Ejercicio OCHO
/*
PASOS:
1. crer una funcion que reciba un mensaje
2. retornar promesa con mensaje despues del tiempo dado
3. Reciba tiempo en ms
4. encadenar 4 llamadas a la funcion simulando estados
5. cada paso debe esperar un tiempo ms
6. Imprimir cada estado cuando llegue
*/

function paso(mensaje, ms){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(mensaje)
        }, ms);
    })
}
paso("Pedido recibido", 800).then((resultado)=>{
    console.log("Estado: ", resultado);
    return paso("En preparacion", 800);
}).then((resultado)=>{
    console.log("Estado: ", resultado);
    return paso("En camino", 800);
}).then((resultado)=>{
    console.log("Estado: ", resultado);
    return paso("Entregado", 800)
}).then((resultado)=>{
    console.log("Estado: ", resultado)
});

//Ejercicio NUEVE
/*
PASOS:
1. crer una funcion
2. retornar promesa con numero despues de 500 ms
4. encadenar con .then
5. retornar nueva promesa que resuelva con objeto
6. Imprimir el objeto completo
*/

function obtenerIdUsuario(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(42)
        }, 500)
    })
}

obtenerIdUsuario().then((resultado)=>{
    const newObject = {
        id: 42, 
        nombre: "Ana", 
        rol: "QA" 
    };
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(newObject)
        },500)
    })
}).then((resultadoObjeto)=>{
    console.log("Respuesta de objeto completo:", resultadoObjeto)
})

//Ejercicio DIEZ
/*
PASOS:
1. crer una cadena de 4 .then
2. el tercer .then lanza un error con throw
3. agregar un catch al final
4. verificar que no se ejecute el ultimo .then
*/

Promise.resolve("Inicio")
    .then((resultado)=>{
        console.log("Paso 1: OK");
        return "Paso 2 en ejecución";
    })
    .then((resultado)=>{
        console.log("Paso 2: OK");
        return "Paso 3 en ejecución";
    })
    .then((resultado)=>{
        console.log("Paso 3: Ocurre el fallo");
        throw new Error("Fallo en paso 3")
    })
    .then((resultado)=>{
        console.log("Esta es la ejecución que no deberia verse");
    })
    .catch((error)=>{
        console.log("Interrupción en la cadena", error.message)
    })

//Ejercicio ONCE
/*
Promise.all(). Sirve para ejecutar múltiples promesas a la vez 
(en paralelo) y esperar a que todas terminen antes de hacer algo con los resultados.
PASOS:
1. crer 3 promesas que resuelvan en tiempos diferentes
2. usar el promise.all
3. mostrar el array completo de resultados
4. usar un solo then
*/

const promesa1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Resultado A")

    }, 300);
});
const promesa2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Resultado B")
        
    }, 600);
});
const promesa3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Resultado C")
        
    }, 100);
});
Promise.all([promesa1, promesa2, promesa3]).then((resultado)=>{
    console.log("Este es el array completo de las 3 promesas creadas", resultado)
});

//Ejercicio DOCE
/*
Promise.all es un todo o nada. Para que se ejecute el .then(), 
todas y cada una de las promesas deben terminar con éxito. Si tan solo una de las promesas 
falla (reject o lanza un error), toda la operación se cancela inmediatamente, ignora las promesas 
que sí salieron bien y se va directo al .catch().
PASOS:
1. tomar las 3 promesas anteriores
2. hacer que la segunda promesa se rechace con error en B
3. agregar un catch
4. observar que pasa con las otras promesas
*/

const promesaUno = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Resultado A")

    }, 300);
});
const promesaDosFallo = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Error en resultado B")
        
    }, 600);
});
const promesaTres = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Resultado C")
        
    }, 100);
});
Promise.all([promesaUno, promesaDosFallo, promesaTres]).then((resultado)=>{
    console.log("Este es el array completo de las 3 promesas creadas y con fallo en una de ellas", resultado)
}).catch((error)=>{
    console.log("El motivo del fallo fue:", error)
});

//Ejercicio TRECE
/*
A diferencia de Promise.all, aquí NUNCA se va al .catch() por un fallo. Siempre entra al .then() y 
te devuelve un arreglo de objetos, donde cada objeto te dice el estado (status) y 
el resultado o error de cada promesa.
PASOS:
1. crear 4 promesas
2. dos de ellas resuelven
3. dos de ellas rechazan
4. usar solo un .then para consumir las promesas e imprimir los resultados de cada uno
*/

const promesaA = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Resultado A")

    }, 300);
});
const promesaBFallo = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Error en resultado B")
        
    }, 600);
});
const promesaC = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Resultado C")
        
    }, 100);
});
const promesaDFallo = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Error en resultado D")
        
    }, 100);
});
Promise.allSettled([promesaA, promesaBFallo, promesaC, promesaDFallo]).then((resultado)=>{
    console.log("Reporte general de consumo de promesas: ", resultado)
});

//Ejercicio CATORCE
/*
promise.race la primera promesa que termine (ya sea con éxito o con error) es la que gana la carrera, y esa es 
la única que le importa a JavaScript. Las demás son completamente ignoradas en cuanto hay una ganadora.
PASOS:
1. crear 3 funciones 
2. retornar en cada una de ellas promesas con distintos ms
3. todas resuelven con sus nombres como strings
4. usar promise.race y con then imprimir quien ganó la carrera
*/

function casoUno(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Lenta")
        },2000)
    })
};
function casoDos(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Media")
        },800)
    })
};
function casoTres(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Rapida")
        },200)
    })
};
Promise.race([casoUno(), casoDos(), casoTres()]).then((resultado)=>{
    console.log("Ganador de la carrera: ", resultado)
}).catch((error)=>{
    console.log("Ha ocurrido un error", error)
});
//Donde usaria yo este patrón? por ejemplo en el caso de un buscador de vuelos, quiero saber que API 
// o que componente responde primero y llevar pruebas de performance, si responden rapido
//componentes críticos y mas usados en la web por ejemplo

//Ejercicio QUINCE
/*
promise.any Su única misión en la vida es buscar la primera promesa que se cumpla con éxito (resolve). 
En cuanto una gana, ignora por completo a todas las demás (tanto a las lentas como a las que fallaron).
PASOS:
1. crear 3 promesas
2. la primera y segunda rechazan y la tercera resuelve
3. usar el promise.any y con then imprimir el resultado
4. agregar catcha para capturar error en caso que todas fallen
5. comentar la diferencia entre promise.race y promise.any
*/
const promesaRechazadaUno = new Promise((resolve,reject) => {
   return reject("Promesa fallida")
});
const promesaRechazadaDos = new Promise((resolve, reject) => {
    return reject("Promesa fallida")
});
const promesaAceptada = new Promise((resolve) => {
    return resolve("Datos encontrados")
});

Promise.any([promesaRechazadaUno, promesaRechazadaDos,promesaAceptada]).then((resultado)=>{
    console.log("Reporte general promiseany: ", resultado)
});
//Diferencia entre any y race, any solo captura e imprime aquella promesa que resulta exitosa sea lenta o no 
// con race esta captura la primera en que responda, lo hubiera hecho de forma exitosa o no

//Ejercicio DIESISEIS
/*
PASOS:
1. crear una funcion con parametros usuario y contraseña
2. crear una promesa que resuelve y rechaza
3. crear logica if/else
4. si es rechazada, configurar mensaje de datos incorrectos
5. encadenar con .then y manejar error con catch
*/

function login(usuario,contrasena){
    return new Promise((resolve, reject)=>{
        if(usuario === "admin" && contrasena === "1234"){
            resolve({
                token:contrasena,
                rol:usuario
            })
        }else{
            reject("Credenciales incorrectas")
        }
    })
}
login("admin", "1234").then((resultado)=>{
    console.log("Bienvenido, ", resultado.rol)
}).catch((error)=>{
    console.log("Ha ocurrido un error", error)
})
//Ejercicio DIESISIETE
/*
PASOS:
1. crear una funcion con parametros nombre, email y edad
2. encadenar con 3 .then donde cada uno valide un campo:
- Primero: el nombre no puede estar vacio
- Segundo: el email debe contener `"@"`
- Tercero: la edad debe ser mayor a 0
3. Si falla una de las validaciones lanzar error con mensaje claro
4 En caso que todas vayan OK. imprimir formulario valido
*/

function validarFormulario(objectData){
    return new Promise((resolve)=>{
        resolve(objectData)
    })
}
const datosDelUsuario = {
    nombre:"Yalile",
    email: "yalile.yalile@gmail.com",
    edad: 19
}

validarFormulario(datosDelUsuario).then((data)=>{
    if(data.nombre === ""){
        throw new Error("El nombre no puede estar vacío")
    }
    return data;
}).then((data)=>{
    if(!data.email.includes("@")){
        throw new Error("El email debe contener '@'")
    }
    return data;
}).then((data)=>{
    if(data.edad <=0){
        throw new Error("La edad debe ser mayor a 0")
    }
    console.log("Formulario válido")
}).catch((error)=>{
    console.log("Error en el formulario", error.message)
})

//Ejercicio DIESIOCHO
/*
PASOS:
1. crear variable con array de nombres
2. crear una funcion que reciba nombre
3. retornar promesas que resuelvan con nombre y procesado despues de 400 ms
4 encadenar promesas para procesar uno a uno en orden
5. imprimir cada  resultado cuando llegue y al final imprimir todos los procesados
*/

const arrayNombres = ["Sofi", "Maria", "Matias", "Carlos", "Luisa"]

function procesarNombre(nombre){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`${nombre}: PROCESADO`)
        },400)
    })
}
procesarNombre(arrayNombres[0]).then((resultadoUno)=>{
    console.log("Resultado nombre uno:", resultadoUno);
    return procesarNombre(arrayNombres[1]);
}).then((resultadoDos)=>{
    console.log("Resultado nombre dos: ", resultadoDos);
    return procesarNombre(arrayNombres[2]);
}).then((resultadoTres)=>{
    console.log("Resultado nombre tres: ", resultadoTres);
    return procesarNombre(arrayNombres[3]);
}).then((resultadoCuatro)=>{
    console.log("Resultado nombre cuatro: ", resultadoCuatro);
    return procesarNombre(arrayNombres[4]);
}).then((resultadoCinco)=>{
    console.log("Resultado nombre cinco:", resultadoCinco);
    console.log("Todos Procesados")
}).catch((error) => {
        console.log("Algo falló:", error);
});
//Ejercicio DIESINUEVE
/*
PASOS:
1. Crear una variable para inicializar el contador
2. crear una funcion con contador interno
3. los dos primeros intentos rechazan la conexion
4. el tercer intento resuelve
5 hacer funcion que reciba then y catch para reintentar 3 veces mas
6. imprimir cada  intento y resultado final
*/

let contador = 0;

function intentarConexion(){
    return new Promise((resolve,reject)=>{
        contador ++
        if(contador <= 2){
            reject("Conexion fallida")
        }else{
            resolve("Conexión exitosa")
        }
    })

}

function conectarConReintentos(){
    intentarConexion().then((resultado)=>{
        console.log("Logrado al primer intento", resultado)
    }).catch((error)=>{
        console.log("Intento 1 falló. Reintentando...");
        return intentarConexion();
    }).then((resultadoDos)=>{
        console.log("Logrado al segundo intento", resultadoDos);
    }).catch((errorDos)=>{
        console.log("Intento 2 falló. Ultimo intento...");
        return intentarConexion();
    }).then((respuestaFinal) => {
        if (respuestaFinal) {
                console.log("Resultado final:", respuestaFinal);
            }
        }).catch((errorFinal) => {
        console.log("Nos rendimos. Error definitivo:", errorFinal);
    });
}

conectarConReintentos()

//Ejercicio VEINTE
/*
PASOS:
1. crear promesas autenticar, obtenerpermisos, verificar acceso, 
2. encadenar promesas de forma consecutiva
3. imprimir resultado
*/
function autenticar(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
                resolve("1234")
        }, 300)
    })
};

function obtenerPermisos(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(["leer", "escribir"])
        }, 300)
    })
};

function verificarAccesos(permisos, permisosAValidar){
    return new Promise((resolve, reject)=>{
        if(permisos.includes(permisosAValidar)){
            resolve("Acceso concedido");
        }else{
            reject("Permiso Denegado")
        }
    })
};

autenticar().then((token)=>{
    console.log("Este es el token:", token)
    return obtenerPermisos(token)
}).then((array)=>{
    console.log("Este es el array:", array)
    return verificarAccesos(array, "eliminar")
}).then((accesos)=>{
    console.log("Estado:", accesos)
}).catch((error)=>{
    console.log("Ha ocurrido un error", error)
})
