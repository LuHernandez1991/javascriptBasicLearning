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

//eliminar espacios

const arrowDeleteSpace = () => {
    const palabra = "como estan ustedes"
    console.log(palabra.trim())
}
arrowDeleteSpace();

//Ternario
const persona = {
    nombre: "Luisa",
    edad: 19,
    tieneDinero: true,
    dinero : 20000,
    calcularDinero(){
        const impuesto = .17;
        return this.tieneDinero ? this.dinero - (this.dinero * impuesto) :"No tiene dinero";
    }
}

persona.edad >= 18 && persona.tieneDinero && persona.calcularDinero() > 30000? console.log("Puede estudiar") : console.log("No puede estudiar");


/**
 * Crear 3 objetos, uno por cada producto tiene:
 * nombre string
 * precio number
 * stock number
 * categorias string = ropa, tecnologia, hogar,etc....
 * cada producto debe tener un metodo mostrar, este metodoeste metodo debe usar ternario para mostrar si esta disponible
 * o sin stock y muestre el nombre siempre en mayuscula
 */

const licuadora = {
    nombre: "Licuadora",
    precio: 100,
    stock: 10,
    categoria: "Hogar",
    mostrar(){
        console.log(`${this.nombre.toUpperCase()} - ${this.stock > 0 ? "Disponible" : "Sin stock"}`);
    }

}
const televisor = {
    nombre: "TV",
    precio: 120,
    stock: 10,
    categoria: "Tecnologia",
    mostrar(){
        console.log(`${this.nombre.toUpperCase()} - ${this.stock > 0 ? "Disponible" : "Sin stock"}`);
    }

}
const camisa = {
    nombre: "Camisa",
    precio: 150,
    stock: 10,
    categoria: "Ropa",
    mostrar(){
        console.log(`${this.nombre.toUpperCase()} - ${this.stock > 0 ? "Disponible" : "Sin stock"}`);
    }

}

/**
 * Crea un objeto llamado carrito con productoUno (empieza en null y se llena cuando se agregue);
 * productoDos (empieza en null);
 * productoTres (empieza en null);
 * total (empieza en 0);
 * 
 * tener un metodo agregarProducto(producto) que reciba un producto
 * dentro del metodo agregarProducto(producto)
 * se debe verificar si tiene stock, si lo tiene se agrega a productoUno
 * sino tiene stock, imprima mensaje que indique que no se puede agregar el producto
 * 
 */

const carrito = {
    productoUno: null,
    productoDos: null,
    productoTres: null,
    total: 0,
    agregarProducto(producto){
        const response = producto.stock > 0 ? 'tiene stock' : 'No tiene stock'
        
    }

}
