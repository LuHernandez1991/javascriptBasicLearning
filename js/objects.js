console.log("Bienvenidos a objetos")

//objeto

/*const persona = {
    nombre: "Luisa",
    apellido: "Hernandez",
    edad: 18

};

//Renderizar el objeto completo
console.log("esto es un objeto: ",persona);

//Renderizar un objeto
console.log("esto es un objeto, nombre por ejemplo: ",persona.nombre);
console.log("esto es un objeto, apellido por ejemplo: ",persona.apellido);
console.log("esto es un objeto, edad por ejemplo: ",persona.edad);

//acceder a las propiedades del objeto con notación corchetes
console.log("------------------------------- acceder a las propiedades del objeto con notacion de corchetes-------------------");
console.log("esto es un objeto, nombre por ejemplo: ",persona["nombre"]);
console.log("esto es un objeto, apellido por ejemplo: ",persona["apellido"]);
console.log("esto es un objeto, edad por ejemplo: ",persona["edad"]);

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    anio:"2026",
    color: "rojo",
    precio: 200000,
}

console.log("propiedades del carro", carro);
carro.precio = 1500000000 // modificar las propiedades de un objeto
console.log("propiedades del carro han cambiado", carro);



///aqui se incluyen metodos dentro de un objeto, es como incluir una function dentro como el sumar en este caso

const personaDos = {
    nombre: "Pepita",
    apellido: "Perez",
    edad: 18,
    sumar (a,b){
        return a + b;
    },
    saludar: function(){
        return personaDos.nombre + personaDos.apellido;
    },
    multiplicar: (a,b)=>{
        return a*b;
    }
};
console.log(personaDos.saludar())
console.log("la suma de dos numeros es: ", personaDos.sumar(2,3))
console.log("la multiplicación de dos numeros es: ", personaDos.multiplicar(2,3));

//asi se llama un método personaDos.multiplicar();

const persona3 = new Object(); //esto también es un objeto

persona3.nombre("Matias");

console.log(persona3.nombre);*/

//Manipulación de strings

let nombreExampleDos = "Ana es la mejor estudiante del mundo";
let apellidoExampleDos = "Gomez";

console.log("procesar strings upperCase", nombreExampleDos.toLocaleUpperCase());

//toLowerCase

console.log("procesar string lower case", apellidoExampleDos.toLocaleLowerCase());

//longitud de un string

console.log("longitud del string", nombreExampleDos.length);

//quiero saber si una palabra existe o no

console.log(nombreExampleDos.includes("mejor"))

//Concatenar

const concatenado = nombreExampleDos.concat(" ",apellidoExampleDos);

console.log(concatenado);


//Indice de caracteres

const aa = "nombreCadena";

console.log(aa.length);
console.log(aa.charAt(0));
console.log(aa.charAt(12));
console.log(aa.charAt(aa.length -1));
