console.log("Variables in JavaScript");

//¿que es una variable? es un espacio reservado en memoria, donde guardamos el valor para usarse despues como strings, numeros, booleanos

let age = 18; //guardar valores que a futuro van a cambiar

const firstName = "Luisa"; //guardar valores que no van a cambiar en el tiempo y no podra reasignarse

//camelcase siempre para las variables, es decir minus y segunda palabra mayus y todo seguido
//nombre descriptivo y acertado a lo que queremos guardar en ella

//Ejercicio - declarar una variable que describa a una persona e imprimir en consola

const nombre = "Luisa";
let edad = 34;
let peso = 55;
let estatura = 1.63;
const isFemenine = true;
const mother = true;
const pets = true;
let petsNumber = 2;

console.log("esta es la descripcion es: ", nombre,"su edad es:", edad, "su peso es: ", peso, "su estatura es: ", estatura, "su genero es Femenino: ",isFemenine, "esta persona es mamá: ", mother, "también tiene mascotas: ", pets, "y esta es la cantidad de mascotas que tiene: ", petsNumber)

/*Tabla de la verdad

1 = true
0= false

true && true = true

//if - else - elseIf 
*/

// Crear 3 variables y evaluar la siguiente expresion: si tiene DNI y es mayor de edad 
// y tiene nacionalidad imprimir en consola que si puede votar. Si tengo nacionalidad y 
// soy mayor de edad imprimir "debes ir a la registraduria", en caso contrario, 
// imprimir en consola "no puedes votar"

const documentDni = false;
let edadVotante = 19;
const nacionalidadVotante = true;

if (documentDni && nacionalidadVotante && edadVotante >= 18){
    console.log("tienes DNI, eres mayor a 18 y tienes nacionalidad asi que PUEDES VOTAR")
}else if (documentDni && nacionalidadVotante && edadVotante <= 18){
    console.log("No eres mayor de edad, NO PUEDES VOTAR")
}else if(!documentDni){
    console.log("No cuentas con DNI por lo tanto, NO PUEDES VOTAR")
} else {
    console.log("No cuentas con la documentación suficiente para votar")
}


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


