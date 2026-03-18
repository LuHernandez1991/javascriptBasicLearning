console.log("Arrays en javascript");
/**
 * const name = "ana";
 * const nameUno = "Pedro";
 * const nameDos = "Maria";
 * 
 * const names = ["ana", "Maria", "Pedro"]
 * un sitio donde puedo almacenar muchas cosas
 * como recupero la informacion guardada en cada una de las posiciones del array, todos empiezan con indice 0, ej: ana es 0, Maria es 1....
 * console.log(names.lenght) para saber cuantos elementos tiene el array
 * console.log(names[0]) imprime ana
 * console.log(names[1]) imprime maria
 * console.log(names[2]) improme Pedro
 * console.log(names[3])
 * 
 * console.log("como acceder al ultimo elemento del array?,"" names[names.length -1])
 * 
 * A los arrays puede agregarse elementos o quitar elementos
 * 
 * .push() agrega un nuevo elemento al array
 * names.push("Matias");
 * 
 * .pop() quita el ultimo elemento del array (y lo devuelve)
 * console.log("elemento eliminado es: ", names.pop())
 * console.log(names)
 * 
 * .unshift agrega un elemento al incio de un array
 * names.unshift("David")
 * console.log(names)
 * 
 * para quitar el primer elemento del array
 * .shift()
 * names.shift("David") //elimina a David y si se replica la funcion se elimina el elemento en posicion 0
 * console.log(names)
 */

const metodosHttp = ["GET", "POST", "PUT", "PATCH", "DELETE"]

//INCLUDES() BUSCA UN ELEMENTO EN EL ARRAY Y RETORNA TRUE SI EL ELEMENTO EXISTE EN EL ARRAY Y FALSE SI NO
console.log(metodosHttp.includes("GET"))

//indexOf() retorna el indice de la primera coincidencia en el array en caso que existan varios, eligirá la posicion del primero que encuentre
console.group(metodosHttp.indexOf("POST"));


//como iteramos en un array

//for...of nos permite pasar por cada elemento del array osea de uno en uno,esto es exclusivo para recorrer arrays

for(const statusCode of metodosHttp){
    console.log("cada codigo: ",statusCode)
}

const personas = [
    {nombre: "Luisa", apellido: "Hernandez", edad: 18},
    {nombre: "Matias", apellido: "Gutierrez", edad: 3},
    {nombre: "Sofia", apellido: "Rendon", edad: 12}
]

for(const persona of personas){
    console.log("nombre de la persona", persona.nombre)
    console.log("apellido de la persona", persona.apellido)

}
for(const persona of personas){
    if(persona.edad > 19){
        console.log("La primera persona que cumple la condicion es: ", persona);
        break;
    }
}

const findEdad = personas.find(persona => persona.edad > 19);
console.log(findEdad);

const productos = [
    {id:102, nombre:"laptop",precio:2000},
    {id:103, nombre:"celular",precio:1000},
    {id:104, nombre:"tablet",precio:1500},
    {id:105, nombre:"monitor",precio:500},
]

for(const producto of productos){
    console.log (`nombre del producto: ${producto.nombre}, y su precio es: ${producto.precio}`);

}
//recorrer el array de productos y mostrar el nombre y precio de cada uno

