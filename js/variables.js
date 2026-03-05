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

// Crear 3 variables y evaluar la siguiente expresion: si tiene DNI y es mayor de edad y tiene nacionalidad 
// imprimir en consola que si puede votar. Si tengo nacionalidad y 
// soy mayor de edad imprimir "debes ir a la registraduria", en caso contrario, 
// imprimir en consola "no puedes votar"
//Tienes DNI?
//Edad
// Nacionalidad

const documentDni = true;
let edadVotante = 18;
const nacionalidadVotante = true;

if (documentDni && nacionalidadVotante >= 18){
    console.log("tienes DNI, eres mayor a 18 y tienes nacionalidad asi que PUEDES VOTAR")
}
if (documentDni && nacionalidadVotante <= 18){
    console.log("No eres mayor de edad, NO PUEDES VOTAR")
}
if(documentDni && nacionalidadVotante){
    console.log("No cuentas con DNI por lo tanto, NO PUEDES VOTAR")
} else{
    console.log("No cuentas con la documentación suficiente para votar")
}

