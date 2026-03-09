//Exercise one
//Si el estudiante tiene 18 años o más, imprimir en consola que puede ir a la universidad. 
// Si no, imprimir que no puede

let edadEstudiante = 19;

if (edadEstudiante >= 18){
    console.log("El estudiante es aceptado en la universidad")
} else{
    console.log("El estudiante no tiene la mayoría de edad, por lo tanto no es aceptado en la universidad")
}

//Exercise two
//Si una persona tiene más de $100, imprimir "Puede comprar". 
// Si no, imprimir "No tiene suficiente dinero"

let personaDinero = 90;

if(personaDinero >= 100){
    console.log("Puede comprar")
}else{
    console.log("No tiene suficiente dinero")
}

//Exercise three
//Si un número es mayor a 0, imprimir "Es positivo". Si no, imprimir "No es positivo".

let numero = 2;

if(numero >= 1){
    console.log("Es positivo")
}else{
    console.log("No es positivo")
}

//Exercise four
//Si la contraseña ingresada es exactamente igual a "abc123", imprimir "Acceso concedido". 
// Si no, imprimir "Acceso denegado"

let contraseña = "abc123";

if(contraseña === "abc123"){
    console.log("Acceso concedido")
}else{
    console.log("Acceso denegado")
}

//Exercise five
//Comparar el número 5 con el texto "5" usando == y luego con ===. 
// Imprimir un mensaje explicando el resultado de cada comparación.

let otroNumero = 5;

if(otroNumero == 5){
    console.log("La comparacion del valor es correcto")
}else if(otroNumero === "5"){
    console.log("La comparación del valor y el tipo del valor es correcto")
}

//Exercise six
//Si la temperatura es menor a 15 grados, imprimir "Hace frío, lleva abrigo". 
// Si no, imprimir "El clima está bien".

let temperatura = 16;

if(temperatura <= 15){
    console.log("Hace frio, lleva abrigo")
} else{
    console.log("El clima esta bien")
}

//Exercise seven
//Una variable indica si el usuario está registrado. Si NO está registrado, 
// imprimir que debe crear una cuenta. Si ya está registrado, darle la bienvenida.

let registro = false;

if(registro === true){
    console.log("Ya te encuentras registrado, Bienvenido")
} else if(!registro){
    console.log("No estas registrado, crea tu cuenta")
}

//Exercise eight
//Si una persona NO tiene licencia de conducir, imprimir que no puede manejar. 
// Si la tiene, imprimir que puede manejar.

let licenciaConduccion = false;

if(!licenciaConduccion){
    console.log("No puedes conducir")
} else if (licenciaConduccion === true){
    console.log("Puedes conducir")
}

//Exercise nine
//Si la nota es mayor o igual a 60, imprimir "Aprobado". Si no, imprimir "Reprobado"

let valorNota = 50;

if(valorNota >= 60){
    console.log("Aprobado")
} else {
    console.log("Reprobado")
}

//Exercise Ten
//Si las luces del carro están encendidas, imprimir "Apaga las luces". 
// Si no, imprimir "Las luces están apagadas, todo bien"

let lucesEncendidas = true;

if(lucesEncendidas === true){
    console.log("Apaga las luces")
} else {
    console.log("Las luces están apagadas, todo bien")
}

//Exercise Eleven
//Según el color del semáforo ("verde", "amarillo" o "rojo"), imprimir la instrucción que debe seguir el
//conductor. Si el color no es ninguno de los tres, imprimir que no es un color válido.

let colorRed = true;
let colorGreen = true;
let colorYellow = true;

if(colorGreen === true ){
    console.log("El auto debe estar en movimiento en la via")
} else if(colorYellow === true){
    console.log("El carro debe reducir la velocidad y transitar con precaución")
}else if(colorRed === true){
    console.log("El carro debe estar detenido")
} else{
    console.log("El semaforo esta dañado")
}

//Exercise twelve
//Convertir una nota numérica a letra: A (90–100), B (80–89), C (70–79), D (60–69), F (menos de 60). 
// Imprimir la letra correspondiente.

let nota = 50;

if(nota > 90 && nota < 100){
    console.log("su nota es A")
} else if(nota > 80 && nota < 89){
    console.log("su nota es B")
} else if(nota > 70 && nota < 79){
    console.log("su nota es C")
} else if(nota > 60 && nota < 69){
    console.log("su nota es D")
} else if(nota < 60){
    console.log("su nota es F")
} else {
    console.log("NO se registró su calificacion")
}

//Exercise thirteen
//Dada una hora en formato de 0 a 23, imprimir si es Madrugada (0–5), Mañana (6–11), Tarde (12–17) 
// o Noche (18–23).

let hora = 12;

if(hora >= 0 && hora <= 5){
    console.log("La hora es la madrugada")
} else if(hora >= 6 && hora <= 11){
    console.log("La hora es en la mañana")
} else if(hora >= 12 && hora <= 17){
    console.log("La hora es en la tarde")
} else if(hora >= 18 && hora <= 23){
    console.log("La hora es en la noche")
} else {
    console.log("Hora no válida")
}

//Exercise fourteen
//Si el usuario es "admin" O si el usuario es "moderador", imprimir "Acceso permitido". 
// Si no, imprimir "Acceso denegado"

let usuarioAdmin = false;
let usuarioModerador = true;

if(usuarioAdmin || usuarioModerador){
    console.log("Acceso permitido")
} else {
    console.log("Acceso Denegado")
}

//Exercises fifteen
//Si el día es sábado o domingo, imprimir "Es fin de semana". Si no, imprimir "Es día de semana".

let esSabado = true;
let esDomingo = true;

if(esSabado  || esDomingo ){
    console.log("Es fin de semana")
} else {
    console.log("Es día de semana")
}

//Exercise 21
// Si el usuario es "jerel" Y la contraseña es "1234", imprimir "Sesión iniciada". 
// Si el usuario es correcto pero la contraseña no, imprimir "Contraseña incorrecta". 
// Si el usuario tampoco es correcto, imprimir "Usuario no encontrado"

const usuario = "Luisa";
let password = "Lu2058";

if(usuario === "Luisa" && password === "Lu2057"){
    console.log("Sesion iniciada")
} else if(usuario === "Luisa" && password !== "Lu2057"){
    console.log("Contraseña incorrecta")
} else {
    console.log("Usuario no encontrado")
}

//Exercise 22
//Si el total de compra es mayor a $50 O si el cliente tiene membresía premium, el envío es gratis. 
// Si no cumple ninguna de las dos condiciones, imprimir que el envío cuesta $5.

let totalCompra = 50;
let membresiaPremium = true;

if(totalCompra > 50 || membresiaPremium){
    console.log("Tienes envío gratis")
} else {
    console.log("El costo del envio cuesta $5")
}

//Exercise 23
//Para adoptar una mascota, la persona debe tener más de 18 años, NO vivir en apartamento Y tener
//ingresos mayores a $1000. Si cumple todo, imprimir que puede adoptar. 
//Si no, que no cumple los requisitos.

let edadAdoptante = 18;
let viviendaCasa = true;
let ingresos = 1200;

if(edadAdoptante >= 18 && viviendaCasa && ingresos > 1000){
    console.log("La persona puede adoptar una mascota")
}else{
    console.log("No cumple con los requisitos para adoptar")
}

//Exercise 24
//Según la operación indicada ("sumar", "restar", "multiplicar", "dividir"), calcular el resultado 
// entre dos números e imprimirlo. Si se intenta dividir entre cero, imprimir un mensaje de error.

//=====================================================================================================//

//Funciones

//Saludo personalizado

function saludoTeam(nombre){
    console.log("Hola estudiante: ", nombre)
}
saludoTeam("Matias");
saludoTeam("Sofia");
saludoTeam("Luisa");

//Crea una función llamada `verificarEdad` que reciba una edad y retorne "Mayor de edad" 
// si tiene 18 o más, o "Menor de edad" si no. Imprimir el resultado.

function verificarEdad(edadEjercicio){
    if(edadEjercicio >= 18){
        return "Es mayor de edad"
    }
    else{
        return "Es menor de edad"
    }
}

const resultadoEdad = verificarEdad(16);
console.log(resultadoEdad)

//Crea una función llamada `verificarAcceso` que reciba usuario y contrasena.
//  Si el usuario es "admin" Y la contrasena es "1234", retornar "Acceso concedido". 
// Si el usuario es correcto pero la contrasena no, retornar "Contrasena incorrecta". 
// Si ninguno es correcto retornar "Usuario no encontrado"

function verificarAcceso(usuario, contraseña){
    if(usuario === "admin" && contraseña === 1234)
        return "Acceso concedido"
    else if(usuario === "admin" && contraseña !== 1234) {
        return "Contraseña incorrecta"
    } else{
        return "Usuario no encontrado"
    }
}

const verificacionAcceso = verificarAcceso("admin",1234)
console.log(verificacionAcceso)

//Crea una función llamada `doble` que reciba un número y retorne el doble de ese número. 
// Guarda el resultado en una variable e imprímelo.

function doble(a){
    return a * 2
}

const resultadoDoble = doble(8);
console.log(resultadoDoble)

//Crea una función llamada `parOImpar` que reciba un número y retorne si es "Par" o "Impar". 
// Pista: un número es par si el residuo de dividirlo entre 2 es igual a 0 (usa el operador `%`)

function parOImpar(n){
    
    if(n % 2 === 0){
        return "El numero es par"
    }
    else{
        return "El numero es impar"
    }
}

const numeroParOImpar = parOImpar(4);
console.log(numeroParOImpar);

//Crea una función llamada `clasificarNumero` que reciba un número y retorne: "Positivo" si es mayor a 0,
//"Negativo" si es menor a 0, o "Cero" si es exactamente 0

function clasificarNumero(nDos){
    if(nDos > 0 ){
        return "Es positivo"
    } else if(nDos < 0){
        return "Es negativo"
    }else (nDos === 0)
        return "Cero"
}

const numeroCero = clasificarNumero(0);
console.log(numeroCero);

//Crea una función llamada `calcularArea` que reciba el ancho y el alto de un rectángulo y retorne el resultado
//de multiplicarlos. Imprímelo en consola.

function calcularArea(width,height){
    return width * height
}

const areaRectangulo = calcularArea(24,35);
console.log("Este es el área del rectangulo: ", areaRectangulo)

//Crea una función llamada `evaluarNota` que reciba una nota numérica. 
// Si es mayor o igual a 60, retornar "Aprobado". Si es menor, retornar "Reprobado". 
// Probarla con distintos valores.

function evaluarNota(noteN){
    if(noteN >= 60){
        return "Aprobado"
    }
    else{
        return "Reprobado"
   
    }
}

const notaCheck = evaluarNota(0);
console.log(notaCheck);

//Crea una función llamada `calcularEnvio` que reciba el total de una compra y si el cliente tiene membresía
//premium. Si el total es mayor a $50 O tiene membresía, el envío es gratis. Si no, el envío cuesta $5.
//Retornar el costo del envío.

function calcularEnvio(valorCompra,membresia){
    if(valorCompra > 50 && membresia){
        return "Recibes el total de la compra"
    }else if(valorCompra > 50 || membresia){
        return "El envío es gratis"
    }else{
        return "El envío cuesta $5"
    }

}

console.log(calcularEnvio(10, true));

//Crea una función llamada `presentar` que reciba nombre, edad y ciudad como parámetros. 
// La función debe retornar una frase que diga: "Me llamo [nombre], tengo [edad] años y vivo en [ciudad]".
// Imprímela en consola

function presentar(nombre,edad,ciudad){
    return "Me llamo: " + nombre +", " + "tengo: " + edad + " " + "años y vivo en: " + ciudad;
}

console.log(presentar("Luisa", 34, "Villamaria"));

//Crea una función llamada `describirClima` que reciba la temperatura. Si es menor a 10, retornar 
// "Hace mucho frío". Si está entre 10 y 25, retornar "Clima agradable". Si es mayor a 25, 
// retornar "Hace calor"

function describirClima(temp){
    if(temp < 10){
        return "Hace mucho frio"
    } else if(temp >= 10 && temp <=25){
        return "Clima agradable"
    } else if(temp > 25){
        return "Hace calor"
    } 
}

console.log(describirClima(25));

//Crea una función llamada `categorizarUsuario` que reciba los puntos de un usuario. Si tiene más de 1000
//puntos es "VIP", entre 500 y 1000 es "Premium", entre 100 y 499 es "Regular", menos de 100 es "Nuevo".
//Retornar la categoría

function categorizarUsuario(puntosU){
    if(puntosU >= 1000){
        return "Eres cliente VIP"
    }
    else if(puntosU >= 500 && puntosU < 1000){
        return "Eres cliente Premium"
    }else if(puntosU >= 100 && puntosU <= 499){
        return "Eres cliente Regular"
    }else{
        return "Eres nuevo"
    }
}
console.log(categorizarUsuario(100));

//Crea una función llamada `validarContrasena` que reciba una contrasena. Si tiene 8 o más caracteres 
// Y NO es "12345678", retornar "Contrasena válida". Si no, retornar "Contrasena débil". Pista: usa
//`contrasena.length` para saber cuántos caracteres tiene

function validarContrasena(contrasena){
    if(contrasena.length >=8 && contrasena !== 12345678){
        return "Contraseña valida"
    }else{
        return "Contraseña debil"
    }
}

console.log(validarContrasena('9999999999'));

//Crea una función llamada `celsiusAFahrenheit` que reciba una temperatura en Celsius y retorne su
//equivalente en Fahrenheit. La fórmula es: (celsius * 9/5) + 32. Pruébala con 100 grados

function celsiusAFahrenheit(gradoCelsiu){
    const conversionFarenheit = (gradoCelsiu *9/5 + 32)
    return "La temperatura farenheit equivale a: " + conversionFarenheit
}
console.log(celsiusAFahrenheit(100));

