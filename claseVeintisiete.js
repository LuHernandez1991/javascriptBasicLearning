
/*async function fetchData(){
    return "Data fetched successfully";
}
fetchData().then((message){
    console.log(message)
})


//await solo puede usarse dentro de una funcion asincrona, es decir, dentro de un async

async function main(){
    const data = await fetchData();
    console.log(data);
}

//Enfoque tradicional con promesas tradicionales (then y catch)
function loadUserData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const userData =  {name: "Luisa", edad: 40};
            resolve(userData)
        }, 2000)
    })
}

function mostrarDatosUsuario(){
    loadUserData()
    .then((userData)=>{
        console.log("Datos de usuario", userData)
    })
}

mostrarDatosUsuario();

//con async
async function mostrarDatosUsuariosync(){
    const datosUsuario = await loadUserData();
    console.log("Datos del usuario: ", datosUsuario)
}

mostrarDatosUsuariosync();
*/

/*INTERIORIZAAAAR:
1 cuando se usa async la funcion devuelve una promesa
2. La palabra await solo se puede usar dentro de una funcion async
3. recomendacion usar try y catch alrededor de el await para manejar los errores lanzados en la promesa
*/

function verificarStock(numero) {
    return new Promise((resolve, reject) => {
        if (numero > 0) {
            resolve("Producto disponible");
        } else {
            reject("Sin stock disponible")
        }
    })
}

//consumir promesa con async
async function verificarStockAsyncDos(params) {
    try {
        const resultado = await verificarStock(params);
        console.log(resultado)
    } catch (error) {
        console.log("Desde el catch", error)
    }
}

verificarStockAsyncDos(2);

function calcularDescuento(precio, porcentaje) {
    return new Promise((resolve, reject) => {
        const porcentajeDescuento = (precio * porcentaje) / 100
        const precioFinal = precio - porcentajeDescuento;
        if (porcentajeDescuento < 100 & porcentajeDescuento > 0) {
            resolve(`El precio final es: $${precioFinal}. Se aplicó un ${porcentaje}% de descuento (te ahorraste $${porcentajeDescuento}).`);
        } else {
            reject("Porcentaje inválido")
        }
    })
}


//consumir promesa con async
async function calcularDescuentoAsync(precio, porcentaje) {
    try {
        const resultado = await calcularDescuento(precio, porcentaje);
        console.log(resultado)
    } catch (error) {
        console.log("Desde el catch", error)
    }
}

calcularDescuentoAsync(200, 15);

/*### 1. Calculadora con Penalización de Tiempo
Crea una función `calcular(a, b, operacion)` que devuelva una promesa. 
* Si la operación es `"suma"`, tarda 1 segundo y devuelve `a + b`.
* Si es `"resta"`, tarda 2 segundos y devuelve `a - b`.
* Si la operación no es válida, se rechaza inmediatamente con el error `"Operación no soportada"`.
* *Resuélvelo usando `.then().catch()` y `async/await` con `try/catch`.*

*/

function calcular(a, b, operacion) {
    return new Promise((resolve, reject) => {
        if (operacion !== "suma" && operacion !== "resta") {
            return reject("Operacion no soportada")
        }
        const tiempo = operacion === "suma" ? 1000 : 2000;
        setTimeout(() => {
            if (operacion === "suma") {
                resolve(a + b);
            } else {
                resolve(a - b);
            }
        }, tiempo)
    })
}

calcular(5, 4, "division").then((resultado) => {
    console.log("El resultado desde then es: ", resultado)
}).catch((error) => {
    console.log("Ha ocurrido un error desde then", error)
})

async function calcularAsync(a, b, operacion) {
    try {
        const resultado = await calcular(a, b, operacion);
        console.log("El resultado desde async es:", resultado)
    } catch (error) {
        console.log("Desde el catch async", error)
    }
}

calcularAsync(10, 8, "division");

/*### 2. El Validador de Números Primos Asíncrono
Crea una función que reciba un número. Tras 1.5 segundos, debe evaluar si el número es primo. 
* Si es primo, resuelve la promesa con el mensaje: `"El número X es primo"`.
* Si no lo es, la rechaza diciendo: `"El número X no es primo y es divisible por Y"` 
(donde Y es el primer divisor encontrado).
*/

function validadorPrimos(numero) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (numero <= 1) {
                reject(`El número ${numero} no es primo y es divisible por sí mismo o menor a 2`);
                return;
            }
            let divisorEncontrado = null;

            for (let i = 2; i < numero; i++) {
                if (numero % i === 0) {
                    divisorEncontrado = i;
                    break;
                }
            }

            const esPrimo = (divisorEncontrado === null);

            if (esPrimo) {
                resolve(`El número ${numero} es primo`);
            } else {
                reject(`El número ${numero} no es primo y es divisible por ${divisorEncontrado}`);
            }

        }, 1500);
    });
}

async function validadorPrimosAsync(numero) {
    try {
        const resultado = await validadorPrimos(numero);
        console.log("Ok en respuesta: ", resultado)
    } catch (error) {
        console.log("Ha ocurrido un error", error)
    }
}
validadorPrimosAsync(9);


/*### 3. Control de Acceso por Edad e Ingresos
Crea una función `evaluarDiscoteca(edad, dinero)`. Tras 800ms:
* Si es menor de 18 años, rechaza con `"Acceso denegado: Menor de edad"`.
* Si tiene 18 años o más pero menos de $50 para la entrada, rechaza con `"Acceso denegado: Fondos insuficientes"`.
* Si cumple ambos requisitos, calcula el vuelto (dinero - $50) y resuelve con `"Acceso concedido. Tu vuelto es de $X"`.
*/

function evaluarDiscoteca(edad, dinero) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (edad >= 18 && dinero >= 50) {
                const devuelta = dinero > 50 ? dinero - 50 : 0;
                resolve(`Acceso concedido. Tu vuelto es de ${devuelta}`)
            } if (edad >= 18 && dinero < 50) {
                resolve("Acceso denegado: Fondos insuficientes")
            } else {
                reject("Acceso denegado: Menor de edad")
            }
        }, 800)
    })
}
evaluarDiscoteca(18, 50).then((resultado) => {
    console.log("El resultado desde then es: ", resultado)
}).catch((error) => {
    console.log("Ha ocurrido un error desde then", error)
})

async function evaluarDiscotecaAsync(edad, dinero) {
    try {
        const resultado = await evaluarDiscoteca(edad, dinero);
        console.log("El resultado desde async es:", resultado)
    } catch (error) {
        console.log("Desde el catch async", error)
    }
}

evaluarDiscotecaAsync(19, 40);

/*### 4. El Parcial Universitario (Aprobado / Reprobado)
Crea una función que reciba un array de 3 notas. Tras 1 segundo, calcula el promedio 
ponderado (Nota 1: 30%, Nota 2: 30%, Nota 3: 40%).
* Si el promedio es mayor o igual a 4.0, resuelve con `"Aprobado con X"`.
* Si es menor a 4.0, pero mayor o igual a 3.5, resuelve con `"Fuiste a recuperación con X"`.
* Si es menor a 3.5, rechaza con `"Reprobado directamente con X"`.

*/
function notasEscolares([notaUno, notaDos, notaTres]) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const notaUnoPorcentaje = notaUno * 0.30;
            const notaDosPorcentaje = notaDos * 0.30;
            const notaTresPorcentaje = notaTres * 0.40;
            const totalNotaPorcentaje = notaUnoPorcentaje + notaDosPorcentaje + notaTresPorcentaje;
            if (totalNotaPorcentaje >= 4.0) {
                resolve(`Aprobado con ${totalNotaPorcentaje} de promedio`)
            } else if (totalNotaPorcentaje >= 3.5) {
                resolve(`Fuiste a recuperacion con ${totalNotaPorcentaje} de promedio`)
            } else {
                reject(`Reprobado directamente con ${totalNotaPorcentaje} de promedio`)
            }
        }, 1000);
    })
}

async function notasEscolaresAsync(arrayDeNotas) {
    try {
        const resultado = await notasEscolares(arrayDeNotas);
        console.log("Resultado de las notas finales: ", resultado)
    } catch (error) {
        console.log("Desde el catch async", error)
    }
}

notasEscolaresAsync([3, 1, 1]);

/*
### 5. Simulador de Cajero Automático
Crea una función `retirarDinero(saldoActual, cantidadARetirar)`. Tras 2 segundos:
* Si la cantidad a retirar es mayor al saldo actual, rechaza con `"Fondos insuficientes"`.
* Si la cantidad es múltiplo de 10 (billetes disponibles), resuelve con un objeto: 
`{ saldoRestante: X, billetesEntregados: cantidad / 10 }`.
* Si no es múltiplo de 10, rechaza con `"El cajero solo entrega billetes de 10"`.
*/

function retirarDinero(saldoActual, cantidadARetirar) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const esMultiplo = (cantidadARetirar % 10 === 0);
            if (cantidadARetirar > saldoActual) {
                reject("Fondos insuficientes");
            } else if (esMultiplo) {
                resolve({
                    saldoRestante: saldoActual - cantidadARetirar,
                    billetesEntregados: cantidadARetirar / 10
                });
            } else {
                resolve("Fondos insuficientes")
            }

        }, 2000)
    })
}

async function retirarDineroAsync(saldoActual, cantidadARetirar) {
    const resultado = await retirarDinero(saldoActual, cantidadARetirar)
    try {
        console.log("Respuesta desde async OK: ", resultado)
    } catch (error) {
        console.log("Respuesta desde el catch: ", error)
    }
}

retirarDineroAsync(50, 40)

/*
### 6. La Fábrica de Juguetes (Cadena de Producción)
Crea tres funciones independientes que se deben ejecutar en orden estricto:
1. `cortarMadera(cantidad)` -> Tarda 1s. Si cantidad < 5, rechaza. Si no, devuelve `piezas = cantidad * 4`.
2. `ensamblarJuguete(piezas)` -> Tarda 1s. Cada juguete requiere 3 piezas. Devuelve un objeto 
`{ juguetes: Math.floor(piezas / 3), sobrante: piezas % 3 }`.
3. `pintarJuguetes(objetoJuguetes)` -> Tarda 1s. Si los juguetes son 0, rompe el flujo. Si no, 
devuelve el costo total de pintura (`juguetes * 2`).
* *Resuelve encadenando con `.then()` y luego reescríbelo de forma plana con `async/await`.*
*/

function cortarMadera(cantidad) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cantidad < 5) {
                reject("Solicitud rechazada")
            } else {
                const operacionCortarMadera = cantidad * 4;
                resolve(operacionCortarMadera)
            }

        }, 1000)
    })
};

function emsamblarJuguete(piezas) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                juguetes: Math.floor(piezas / 3),
                sobrante: piezas % 3
            })
        }, 1000)

    })
};

function pintarJuguetes(objetoJuguetes) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (objetoJuguetes.juguetes === 0) {
                reject("Rompe el flujo")
            } else {
                resolve(objetoJuguetes.juguetes * 2)
            }
        }, 1000)
    })
}

cortarMadera(5).then((piezas) => {
    console.log("Piezas cortadas", piezas);
    return emsamblarJuguete(piezas)
}).then((objetoJuguetes) => {
    console.log("Juguetes emsamblados", objetoJuguetes);
    return pintarJuguetes(objetoJuguetes);
}).then((costoTotal) => {
    console.log("Costo total de pintura $:", costoTotal);
})
    .catch((error) => {
        console.error("Error en la fábrica:", error);
    });

async function ejercicioSeisAsync() {
    try {
        const cortarPiezas = await cortarMadera(7);
        console.log("Cortar piezas resultados async:", cortarPiezas);

        const emsamblarPiezas = await emsamblarJuguete(cortarPiezas)
        console.log("Emsamblar juguetes resultado async", emsamblarPiezas)

        const costoTotal = await pintarJuguetes(emsamblarPiezas)
        console.log("Costo total pintura desde async: ", costoTotal)
    } catch (error) {
        console.error("Error en la línea de producción:", error);
    }
}

ejercicioSeisAsync();


/*
### 7. Procesador de Texto por Etapas
Crea un flujo asíncrono que reciba una cadena de texto mal formateada (Ej: `"  jAvAsCrIpT eS GeNiAl  "`):
* **Etapa 1 (500ms):** Limpia los espacios vacíos al inicio y al final (`trim`).
* **Etapa 2 (500ms):** Cuenta cuántas vocales tiene. Si tiene más de 10 vocales, 
lanza un error de "Texto demasiado largo".
* **Etapa 3 (500ms):** Convierte todo a Mayúsculas y le concatena al final el número de vocales
encontrado en la Etapa 2.
*/

const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function stringMalFormato() {
    try {
        const textoMalFormato = " HOLA mundo maL HablaDO   ";
        await esperar(500);
        const textoLimpioConTrim = textoMalFormato.trim();
        console.log("Texto con Trim: ", textoLimpioConTrim);

        await esperar(500);
        const conteoVocales = textoLimpioConTrim.match(/[aeiouáéíóúü]/gi);
        const cantidadVocales = conteoVocales ? conteoVocales.length : 0;
        if (cantidadVocales > 10) {
            throw new Error(`Demasiadas vocales (${cantidadVocales}). El límite es 10.`);
        }

        console.log(`Se encontraron ${cantidadVocales} vocales.`);

        await esperar(500);
        const resultadoFinal = textoLimpioConTrim.toUpperCase() + ",cantidad vocales: " + cantidadVocales;;
        console.log("Resultado Final:", resultadoFinal);
        return resultadoFinal;


    } catch (error) {
        console.error("❌ Proceso interrumpido:", error.message);
    }

}
stringMalFormato();

/*
### 8. El Sistema de Facturación con Impuestos
Crea una secuencia de promesas:
1. Recibe un array de precios de productos `[10, 25, 4.99, 99.90]`. Suma todos los productos (1s).
2. Pasa el subtotal a la siguiente etapa, aplica un descuento del 10% si el subtotal supera los $100 (500ms).
3. Pasa el total con descuento y aplícale un impuesto del 19% de IVA (500ms). 
Devuelve el valor final formateado a dos decimales.
*/

const arrayProducts = [10, 25, 4.99, 99.90];

function sumaProductos(array) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let total = 0;

            array.forEach(numero => {
                total += numero;

            });

            resolve(total)
        }, 1000)
    })
}
const esperarDos = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function sumarProductsAsync(array) {
    try {
        const resultado = await sumaProductos(array);
        console.log("resultado suma del array: ", resultado)

        const descuentoSubtotal = resultado * 0.10;
        let precioFinal = resultado - descuentoSubtotal;
        if (precioFinal > 100) {
            await esperarDos(500);
            precioFinal = precioFinal * 0.20;
        }

        await esperarDos(500);
        const precioFinalDecimales = Number(precioFinal.toFixed(2));
        console.log("Precio final total de operacion", precioFinalDecimales)
        return precioFinalDecimales;

    } catch (error) {
        console.log("Ha ocurrido un error", error)
    }
}

sumarProductsAsync(arrayProducts)

/*
### 9. Login de Usuario con Re-verificación de Seguridad
Simula un Login. 
* Función 1: `autenticar(user, pass)`. Si las credenciales son correctas, devuelve un ID de usuario 
tras 1 segundo. Si no, rechaza.
* Función 2: `verificarIP(userId)`. Recibe el ID. Si la IP simulada (puedes usar un booleano aleatorio) 
es "sospechosa", exige un código OTP duplicando la seguridad. Si es segura, resuelve con `"Acceso Directo"`.
*/

function autenticacion(user, pass) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user === "Luisa" && pass === "1234j") {
                resolve("1234")
            }else{
                reject("User no existente, Intente de nuevo")
            }
        }, 1000)

    })
}

function verificarIp(userId, ip){
    return new Promise((resolve)=>{
        if(ip === "999.999.09"){
            resolve("Requiere código OTP")
        }else{
            resolve("Acceso Directo")
        }

    })
}

async function autenticarUsuarioAsync(user, pass, ip){

    try{
    const resultadoId = await autenticacion(user, pass);
    console.log(`Autenticación exitosa. ID de Usuario: ${resultadoId}`);

    console.log("Verificando seguridad de la IP");
    const resultadoSeguridad = await verificarIp(resultadoId, ip);
    console.log(`Estado de seguridad: ${resultadoSeguridad}`);

    if (resultadoSeguridad === "Requiere código OTP") {
            console.log("Se ha enviado un código SMS a su teléfono para ingresar.");
        } else {
            console.log("¡Bienvenido al sistema! Acceso concedido.");
        }
    }catch(error){
        console.error("Error en el ingreso:", error);
    }
}

autenticarUsuarioAsync("Luisa", "1234j", "999.999.09");

/*
### 10. Juego de Rol: El Daño del Personaje
Crea un flujo donde un personaje ataca a un monstruo que tiene 100 de vida:
* **Golpe 1 (500ms):** Genera un número crítico aleatorio entre 10 y 25. Réstalo a la vida del monstruo.
* **Golpe 2 (500ms):** Si la vida del monstruo bajó de 80, el segundo golpe hace el doble de daño
(base 15). Si no, hace daño normal (base 10).
* Devuelve el estado de vida final del monstruo tras ambos impactos.
*/

const esperarMonstruo = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function combatePersonajes() {
    try {
        let vidaMonstruo = 100;
        console.log(`Vida inicial: ${vidaMonstruo}`);

        await esperarMonstruo(500);
        
        const dañoCritico = Math.floor(Math.random() * (25 - 10 + 1)) + 10;
        vidaMonstruo = vidaMonstruo - dañoCritico;
        
        console.log(`Daño crítico -${dañoCritico}`);
        console.log(`Vida restante del monstruo: ${vidaMonstruo}`);

        await esperarMonstruo(500);
        let dañoGolpe2 = 0;

        if (vidaMonstruo < 80) {
            dañoGolpe2 = 15 * 2; 
            console.log(`Golpe doble (-${dañoGolpe2})`);
        } else {
            dañoGolpe2 = 10;
            console.log(`Impacto normal (-${dañoGolpe2})`);
        }
        vidaMonstruo = vidaMonstruo - dañoGolpe2;

        const vidaFinal = vidaMonstruo < 0 ? 0 : vidaMonstruo; 
        
        console.log(`Vida final del monstruo: ${vidaFinal}`);
        return vidaFinal;

    } catch (error) {
        console.error("Hubo un error en el combate:", error);
    }
}

combatePersonajes();