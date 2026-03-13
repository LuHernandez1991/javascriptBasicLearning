//Creá un objeto que represente un producto con nombre y precio. 
// Agregale un método que muestre el precio con un 21% de IVA incluido.

/*const producto ={
    nombre: "azucar",
    precio: 1300,
precioIva(){
    const iva = 0.21
    return producto.precio * iva;
}
}

console.log(producto.precioIva());
*/

//Creá un objeto que represente un usuario con nombre, apellido y email. 
// Agregale un método que 
// use template literals para mostrar la presentación completa. Agregale otro método que convierta el email a minúsculas antes de mostrarlo
//a minúsculas antes de mostrarlo.

const infoUsuario = {
        nombre: "Maria",
        apellido: "Ramirez",
        email: "TEST@TEST.COM",
    saludoUsuario: function(){
        return `Informacion de usuario: nombre: ${infoUsuario.nombre}, apellido: ${infoUsuario.apellido}, y su email: ${infoUsuario.email}`
    },
    converEmailMinus(){
        return `Este es el email en minúscula: ${infoUsuario.email.toLocaleLowerCase()}`
    }
};
console.log(infoUsuario.saludoUsuario());
console.log(infoUsuario.converEmailMinus());
console.log(`nombre: ${typeof infoUsuario.nombre} apellido: ${typeof infoUsuario.apellido} email: ${typeof infoUsuario.email}`);

//investigación del typeof: es un operador de javascript y sirve para saber el tipo de dato que contiene una variable
//o una expresión, para que sirve? para antes de operar con los valores de variables enterarnos si podemos usarlos
//y de que forma hacerlo o tratarlos para no cometer errores en código. como se usa: typeof nombreVariable; o
// typeof(nombreVariable);

///////////////////////////////////////////////////////////////7

//Creá un objeto que represente un producto con nombre, precio y stock. Agregale un método que
//use un ternario para mostrar si hay stock disponible o no. Agregale otro método que muestre el
//nombre del producto siempre en mayúsculas.

const producto = {
    nombre: "Peine",
    precio: 1500,
    stock: 10,
    stockPeine (){
        return producto.stock > 0  ?"Aun hay stock de peines" : "No hay stock";
    },
    nombreMayus (){
        return `Nombre producto en mayuscula: ${producto.nombre.toLocaleUpperCase()}`
    }
}
console.log(producto.stockPeine());
console.log(producto.nombreMayus());
console.log(producto.precio.toFixed(2));

//Investigacion sobre tofixed: es una herramienta en javascript para formatear numeros, especificamente controlar
//decimales que se quieren mostrar, sirve para limitar numeros largos a una cantidad fija de digitos 
// despues del punto, también redondea, si es superior a 5 o superior redondea hacia arriba. También transforma
//el numero en una cadena de texto

////////////////////////////////////////////////////////////////////////

//Creá un objeto que represente un alumno con nombre, apellido y nota. Agregale un método que
//use if/else para mostrar si aprobó o desaprobó. La nota mínima para aprobar es 6. El mensaje
//debe incluir el nombre completo armado con template literals.

const alumno = {
    nombre:"Laura",
    apellido: "Rendon",
    nota: 10,
    notaFinal (){
        if(alumno.nota >= 0 && alumno.nota <= 10 && alumno.nota >= 6){
            return `${alumno.nombre} ${this.apellido} aprobó la materia`
        }
        return "Desaprobó la materia"
        
    }

};
console.log(alumno.notaFinal());

//Investigación sobre el &&: sirve para encadenar condiciones, su regla es que para ser verdadera
//deben ser todas las partes verdaderas, si alguna es falsa el resultado final es falso

//////////////////////////////////////////////////////////////////////////

//Creá un objeto que represente una cuenta bancaria con titular y saldo. Agregale un método que
//reciba un monto y lo deposite. Agregale otro método que use if/else para retirar dinero solo si hay
//saldo suficiente. Todos los mensajes deben usar template literals.


const cuentaBancaria = {
    titular: "Mendez",
    saldo: 1200000,
    recibeDinero (monto){
        cuentaBancaria.saldo += monto;
        return `Hola ${cuentaBancaria.titular}, haz depositado $${monto} a tu cuenta, tu nuevo saldo es: $${cuentaBancaria.saldo}`
        
    },
    retiroDinero (monto){

        if(monto <= cuentaBancaria.saldo){
            cuentaBancaria.saldo -= monto;
            return `Hola ${cuentaBancaria.titular} retiraste $${monto}, tu nuevo saldo es $${cuentaBancaria.saldo}`
        }
        const diferenciaSaldoDeposito = Math.abs(cuentaBancaria.saldo - monto)
        return `Hola ${cuentaBancaria.titular}, tu saldo es $${cuentaBancaria.saldo}, no tienes saldo suficiente, te hace falta ${diferenciaSaldoDeposito}`
    }

};

console.log(cuentaBancaria.recibeDinero(300000));
console.log(cuentaBancaria.retiroDinero(2000000));

//Investigación Math abs: este devuelve un valor absoluto de un numero, convierte numeros negativos en positivos y si 
//el numero es positivo lo deja tal cual. Se usa para saber la distancia o magnitud de algo. sirve para validar
//que el numero sea positivo antes de operar


//Creá un objeto que represente un empleado con nombre, puesto y salario. Agregale un método que use 
// .toUpperCase() para mostrar el puesto en mayúsculas. Agregale otro método que use if/else para 
// mostrar si el salario es alto (más de $200.000), medio (entre $100.000 y $200.000) o bajo (menos de $100.000)

const empleado = {
    nombre: "Sofia",
    puesto: "Administradora",
    salario: 50000,
    nombrePuestoMayus (){
        const puestoDefecto = empleado.puesto || "empleado general";
        return `Puesto en mayuscula ${puestoDefecto.toLocaleUpperCase()}`
    },
    rangoSalario (){
        if (empleado.salario > 200000){
            return "El salario es alto";
        }else if (empleado.salario >= 100000 && empleado.salario === 200000 ){
            return "El salario es medio"
        }
        return "El salario es bajo"
    }
}

console.log(empleado.nombrePuestoMayus());
console.log(empleado.rangoSalario());


//Investigación que es el operador ||?: se llama OR logico, este operador es mas flexible y solo necesita que una de las
//condiciones se cumpla para que el resultado sea true

////////////////////////////////////////////////////////////////////////////////////////////////

//Creá un objeto que represente un formulario de registro con nombre de usuario y contraseña.
//Agregale un método que use .trim() y .length con if/else para validar que el nombre de usuario
//tenga entre 4 y 12 caracteres. Agregale otro que valide que la contraseña tenga al menos 8 caracteres.

const paciente = {
    usuario: "administracion",
    contrasena: "1",
    validacionUsuario (){
        const limpiarUsuario = this.usuario.trim();
        if(limpiarUsuario.length >= 4 && limpiarUsuario.length <= 12){
            return "El nombre de usuario cumple"
        }
        return "Nombre de usuario no aceptable"
        
    },
    validacionContrasena(){
        if(this.contrasena.length >= 8 ){
            return "La contraseña es segura"
        }
        return "La contraseña es debil"

    },
    contrasenaProtegida(){
        const proteccion = this.contrasena.padStart(20, "0");
        return `Contraseña protegida: ${proteccion}`
    }   

}

console.log(paciente.validacionUsuario());
console.log(paciente.validacionContrasena());
console.log(paciente.contrasenaProtegida());

// Investigá: ¿Qué hace .padStart()? rellena el inicio de una cadena de texto con otro caracter hasta que esta alcance
//una longitud específica, por ejemplo, este solo actua si el numero que le das es mayor al actual, recordar que javascript
//resuelve primero lo del padStart y luego el resto de codigo (para cuando queramos imprimirlo en consola)

//////////////////////////////////////////////////////////////////////////////////////////////

//Creá un objeto que represente una canción con título, artista y duración en segundos. 
// Agregale un método que use variables internas para convertir la duración a minutos y segundos y la muestre
//con template literals. Agregale otro método que use un ternario para mostrar si la canción dura más
//o menos de 3 minutos (180 segundos).

const cancion = {
    titulo: "El mundo",
    artista: "prueba",
    duracionSec: 190,
    conversionMin(){
        const minutos = Math.floor(this.duracionSec / 60);
        const segundos = this.duracionSec % 60;
        return `La duracion de la cancion es: ${minutos}: ${segundos}`
    },
    duracionCancion(){
        return this.duracionSec > 180 ? "La cancion dura mas de 3 minutos" : "La cancion no dura mucho"
    }

}

console.log(cancion.conversionMin());
console.log(cancion.duracionCancion());













