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

//Que hace el Math.floor()?: esta funcion redondea un numero hacia abajo al numero entero mas cercano, elimina cualquier
//decimal

/////////////////////////////////////////////////////////////////////////////////////////7

//Creá un objeto que represente un empleado con nombre y lista de habilidades guardadas como un
//string separado por comas. Agregale un método que use .split() para mostrar cuántas habilidades
//tiene. Agregale otro método que use .includes() con if/else para verificar si tiene una habilidad
// específica que reciba como parámetro.

const empleadoH = {
    nombre: "Azucena",
    habilidades: "respetuosa, responsable, proactiva, honesta, leal",
    cantidadHabilidades(){
        const lista = this.habilidades.split(",")
        return `El empleado ${this.nombre} tiene ${lista.length} habilidades`
    },
    habilidadEspecific(habilidad){
        const habilidadProcess = habilidad.trim()
        if(this.habilidades.includes(habilidadProcess)){
            return `El empleado ${this.nombre} tiene la habilidad`
        }
        return`El empleado ${this.nombre} no tiene la habilidad`
    }
}

console.log(empleadoH.cantidadHabilidades());
console.log(empleadoH.habilidadEspecific("respetuosa"));

//Split agarra un string grande, y los separa por mini strings contando cada coma separadora por ejemplo y el includes sirve para
//para identificar si un string tiene o no el valor que se 


// ============================================
// 🐛 EJERCICIO: Bug Report
// ============================================
// Vas a modelar un bug report como objeto de JavaScript.
// Usa todo lo que ya sabes: objetos, funciones, arrow functions.


// ── PARTE 1 ──────────────────────────────────
// Crea un objeto llamado bugReport con estas propiedades:
//   id, titulo, severidad ("alta" / "media" / "baja"), estado, reportadoPor

const bugReport = {
    id: "QA-2000",
    titulo: "No funciona el buscador",
    severidad: "media",
    estado: "open",
    reportadoPor: "Luisa",
    describir(){
        return `ID: ${this.id}, Severidad: ${this.severidad}, Estado: ${this.estado}, Titulo del bug: ${this.titulo}`
    },
    cambiarEstado(nuevoEstado){
        this.estado = nuevoEstado;
        return `El estado se ha actualizado a: ${this.estado}`
    },
    esUrgente(){
        if(this.severidad === "alta"){
            return true
        }
        return false
    },

}

console.log(bugReport.describir());
console.log(bugReport.cambiarEstado("In progress"));
console.log(bugReport.esUrgente());



// ── PARTE 2 ──────────────────────────────────
// Agrega estas funciones DENTRO del objeto:

// describir()
//   Muestra en consola el id, severidad, estado y título del bug.

// cambiarEstado(nuevoEstado)
//   Recibe un nuevo estado y lo actualiza en el objeto.
//   Luego muestra: "Estado actualizado a: ..."

// esUrgente()
//   Retorna true si la severidad es "alta", false si no.
//   💡 ¿Qué operador ya conoces que te puede servir aquí?


// ── PARTE 3 ──────────────────────────────────
// Prueba tu objeto:

// 1. Llama a describir()
// 2. Cambia el estado a "en progreso" y llama a describir() de nuevo
// 3. Muestra en consola si el bug es urgente o no

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Creá un objeto que represente un pasajero con nombre, número de asiento y peso del equipaje en
//kilos. Agregale un método que use template literals para mostrar los datos del pasajero. 
// Agregale otro método que use if/else para calcular el cargo extra: el equipaje es gratuito hasta 23 kg, y por
//cada kilo extra se cobran $15

const pasajero = {
    nombre: "Benita",
    numeroAsiento: 23,
    pesoEquipaje: 10,
    showDatePax (){
        return `El pasajero se llama ${this.nombre}, tiene el asiento ${this.numeroAsiento}, y su equipaje pesa ${this.pesoEquipaje} KG`
    },
    calculatePesoEquipaje(){
        const kiloMax = 23;
        const valorKiloAdd = 15;

        const excedeKilos = Math.max(0,this.pesoEquipaje - kiloMax);
        return excedeKilos > 0 ? `El calor del cargo adicional es: ${excedeKilos * valorKiloAdd}`: 'No tienes cargo adicional'
    }

}

console.log(pasajero.showDatePax());
console.log(pasajero.calculatePesoEquipaje());





/**
 * ejercicio 12
 * Creá un objeto que represente un pasajero con nombre, número de asiento y peso del equipaje en kilos. 
 * Agregale un método que use template literals para mostrar los datos del pasajero. 
 * Agregale otro método que use if/else para calcular el cargo extra: el equipaje es gratuito hasta 23 kg, 
 * y por cada kilo extra se cobran $15. ■ Investigá: ¿Qué hace Math.max()? Usalo para calcular los kilos de exceso sin 
 * necesitar un if/else para ese cálculo puntual. realiza ese ejercicio
 */

const pasajeroJerel = {
    nombre: "Juana",
    nAsiento: 23,
    pesoEquipaje: 23,
    showDatosPasajero(){
        return ` el pasajero se llama ${this.nombre} , tiene el asiento ${this.nAsiento} , y su equipaje pesa ${this.pesoEquipaje} KG`
    },
    calculatePesoEquipaje(){
        const kiloMAximoPermitido = 23;
        const ValorKiloAdicional = 15;
 
        // funciona
        const exedeEquipaje = Math.max(this.pesoEquipaje - kiloMAximoPermitido);
        return exedeEquipaje > 0 ?  ` el valor del cargo adicional es : ${exedeEquipaje * ValorKiloAdicional}`:
                                    'no tienes cargo adicional'


         // funciona 
        if(this.pesoEquipaje > kiloMAximoPermitido){
            const kiloAdicional = this.pesoEquipaje - kiloMAximoPermitido 
            return ` el valor del cargo adicional es : ${kiloAdicional * ValorKiloAdicional}`; 
        }else{
            return 'no tienes cargo adicional';
        }
    }
}

console.log(pasajeroJerel.calculatePesoEquipaje());


////////////////////////////////////////////////////////////////////////////////////////////////////////

//Creá un objeto que represente un auto con marca, modelo y kilometraje. Agregale un método que
//use if/else para mostrar si el auto necesita service urgente (más de 10.000 km), service próximo
//(entre 7.500 y 10.000 km) o está al día (menos de 7.500 km). Agregale otro método que muestre la
//descripción completa del auto usando template literals con el modelo siempre en mayúsculas.

const automovil = {
    marca: "Ford",
    modelo: "2026",
    kilometraje: 1800,
    servicioUrgente(){
        if(this.kilometraje > 10000){
            return "Necesita servicio urgente"
        }else if(this.kilometraje >=7500 && this.kilometraje <= 10000){
            return "Servicio está próximo"
        }else if(this.kilometraje <=7500 && this.kilometraje > 40){
            return "Esta al día"
        }
    },
    infoCompleta (){
        const proximo= 2500;
        const kmFaltantes = this.kilometraje < proximo ? proximo - this.kilometraje : proximo - (this.kilometraje % proximo);
        return `Características del auto: marca ${this.marca}, modelo: ${this.modelo}, kilometraje: ${this.kilometraje}. Le faltan ${kmFaltantes} para su proximo mantenimiento`
    }
    

}
console.log(automovil.servicioUrgente());
console.log(automovil.infoCompleta());

//Investigacion: Qué es el operador % (módulo)? se usa para obtener el residuo o lo que sobra de una division entre dos 
//numeros enteros

/////////////////////////////////////////////////////////////////////////////////////////////////////

//Creá un objeto que represente un mensaje de chat con remitente, texto y leído (booleano).
//Agregale un método que use un ternario para mostrar el estado del mensaje como 'leído' o 'no
//leído'. Agregale otro método que use .length con if/else para avisar si el mensaje es demasiado
//largo (más de 140 caracteres).

const mensaje = {
    remitente: "tigo",
    texto: "Lee el mensaje que hay para ti",
    leido: false,
    estadoMensaje(){
        return this.leido ? "Leido" : "No leido";
    },
    longitMensaje (){
        if(this.texto.length <= 140){
            return "El mensaje es aceptable"
        }
        return "El mensaje es demasiado largo"
    },
    inversionEstado (){
        this.leido = !this.leido;
        return this.leido ? "No leido" : "Leido";
    }
}

console.log(mensaje.estadoMensaje());
console.log(mensaje.longitMensaje());
console.log(mensaje.inversionEstado());

//Investigación: ¿Qué hace el operador ! (negación)? es un operador que se usa para invertir el valor de verdad de una expresion
//lo verdadero se vuelve falso y lo falso verdadero.

////////////////////////////////////////////////////////////////////////////////////////////////////7

//Creá un objeto que represente una tienda con nombre, dirección y si está abierta. 
// Agregale un método que use .toUpperCase() para mostrar el nombre de la tienda. Agregale otro método que 
// use un ternario para mostrar si la tienda está abierta o cerrada.

const tienda ={
    nombre: "Merca+",
    direccion: "cra 23",
    abierta: true,
    tiendaMayus(){
        return `Este es el nombre de la tienda ${this.nombre.toUpperCase()}`
    },
    estadoTienda(){
        return this.abierta ? "La tienda esta abierta": "Esta cerrado"
    },
    nombreTiendaChaining(){
        return this.nombre.trim().toLowerCase();
    }
}

console.log(tienda.tiendaMayus());
console.log(tienda.estadoTienda());
console.log(tienda.nombreTiendaChaining());

//Investiga: ¿Qué es la concatenación de métodos (method chaining)? es una técnica que permite ejecutar varios metodos, uno tras otro
//en una sola linea de codigo

//////////////////////////////////////////////////////////////////////////////////////////////////////

//Creá un objeto que represente un libro con título, autor y cantidad de páginas. Agregale un método
//que use .slice() para mostrar solo los primeros 10 caracteres del título seguidos de '...' si el título es
//más largo. Agregale otro método con if/else para clasificarlo como lectura corta (menos de 150
//páginas), media (entre 150 y 400 páginas) o larga (más de 400 páginas).

const libro = {
    titulo: "El amor en los tiempos del colera",
    autor: "Gabriel Garcia",
    cantidadPage: 800,
    caracteresFirst (){
        if(this.titulo.length > 10){
            return this.titulo.slice(0,10) + "...";
        }else{
            this.titulo;
        }
    },
    tiempoLectura (){
        if(this.cantidadPage < 150){
            return "Lectura corta";
        } else if(this.cantidadPage >= 150 && this.cantidadPage <=400){
            return "Lectura media"
        }
        return "Es muy larga"

    },
    primeraLetra(){
        const inicial = this.autor.charAt(0);
        const apellidoA = this.autor.slice(7);
        return `${inicial}. ${apellidoA}`;
    }
}
console.log(libro.caracteresFirst());
console.log(libro.tiempoLectura());
console.log(libro.primeraLetra());

//Investigá: ¿Qué hace .charAt(0)?.Se usa para obtener el caracter que esta en una posición específica de un texto, el 0 indica
//el punto de partida para comenzar a contar es decir que si es 0 devolvera siempre la primera letra o primer simbolo de cadena

///////////////////////////////////////////////////////////////////////////////////////////

//Creá un objeto que represente un jugador con nombre, nivel y puntos. Agregale un método que
//reciba puntos ganados y los sume. Usá variables internas y if/else para verificar si los puntos
//alcanzan para subir de nivel: se necesitan 1.000 puntos por nivel. Si se sube de nivel, los puntos
//vuelven a 0. Mostrá todos los mensajes con template 

const jugador = {
    nombre:"Lorenzo",
    nivel: 2,
    puntos: 2300,
    scorePuntos(newPuntos){
        this.puntos += newPuntos
        return `Este es tu nuevo score: ${this.puntos} `
    },
    nivelPuntos (){
        const pointNecesary = 1000;
        const updateLevel = this.puntos >= pointNecesary;
        const resetPoint = this.puntos % pointNecesary;
        if(updateLevel){
            this.nivel += 1;
            this.puntos = resetPoint;
            return `Haz subido el nivel, ahora eres: ${this.nivel}, ahora tus puntos son: ${this.puntos}`
        } else {
            const faltante = pointNecesary - this.puntos;
            return `Aun no alcanzas el nivel esperado, ánimo, te faltan ${faltante} puntos para el siguiente nivel`
        }
    }
}

console.log(jugador.scorePuntos(500))
console.log(jugador.nivelPuntos())

//Investigacion: Qué es el operador % (módulo)? se usa para obtener el residuo o lo que sobra de una division entre dos 
//numeros enteros

/////////////////////////////////////////////////////////////////////////////////////////////

//Creá un objeto que represente un restaurante con nombre, tipo de cocina y calificación del 1 al 5.
//Agregale un método que use .replace() para cambiar espacios por guiones en el nombre y pasarlo
//a minúsculas, mostrándolo como si fuera una URL. Agregale otro método con if/else para mostrar
//la calificación en texto: 1 es 'muy malo', 2 es 'malo', 3 es 'regular', 4 es 'bueno' y 5 es 'excelente'

const restaurante = {
    nombre:"Sabor y sazon",
    tipoCocina: "Casera",
    calificacion: 4,
    changeUno(){
        return `Cambiamos nuestra razon social: ${this.nombre.replaceAll(" ", "-").toLowerCase()}`
    },
    mostrarCalificacion(){
        if(this.calificacion === 5){
            return "Excelente";
        }else if(this.calificacion === 4){
            return "Bueno";
        }else if(this.calificacion === 3){
            return "Regular";
        }else if(this.calificacion === 2){
            return "Malo";
        }
        return "Muy malo"
    }

}

console.log(restaurante.changeUno());
console.log(restaurante.mostrarCalificacion());

//investigación replace() y replaceAll y diferencias: ambos se usan para buscar una parte de un texto y cambiarla por otra cosa
// replace es selectivo reemplazando la primera coincidencia que encuentre y replaceAll es masivo, busca todas las veces que 
//aparece la palabra y las cambia todas

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//Creá un objeto que represente un paciente con nombre, temperatura y presión arterial. Agregale un
//método que use if/else con variables internas para diagnosticar: la temperatura normal es entre 36
//y 37.5 grados, y la presión normal es entre 60 y 120. Si algún valor está fuera del rango, mostrá
//cuál es el problema. Mostrá el diagnóstico completo usando template literals.

const pacienteDos = {
    nombre: "Lucila",
    temperatura: 35,
    presionArterial: 80,
    temperaturaCheck(){
        const tempNormalMin = 36;
        const tempNormalMax = 37.5;
        const presionNormalMin = 60;
        const presionNormalMax = 120;
        const tempEsNormal = this.temperatura >= tempNormalMin && this.temperatura <= tempNormalMax;
        const presionEsNormal = this.presionArterial >= presionNormalMin && this.presionArterial <= presionNormalMax;

        if(tempEsNormal && presionEsNormal){
            return `La temperatura y presion de ${this.nombre} son estables`
        }else if(!tempEsNormal && !presionEsNormal){
            return `Revisar y tratar a la paciente ${this.nombre}, su temperatura y presion estan fuera de lo normal`
        }else if(!tempEsNormal){
            return `Revisar y tratar la temperatura de la paciente ${this.nombre}, su temperatura esta fuera de lo normal`
        }
        return `La presion de la paciente ${this.nombre} esta fuera de lo normal, revisar y tratar`

    }
}
console.log(pacienteDos.temperaturaCheck())

//Investigá: ¿Qué hace el operador && dentro de un if? Usalo para verificar ambas condiciones
//(temperatura Y presión) en una sola línea

//////////////////////////////////////////////////////////////////////////////////////////////////

//Creá un objeto que represente un cupón de descuento con código, porcentaje y si está activo.
//Agregale un método que reciba un precio y use if/else para aplicar el descuento solo si el cupón
//está activo y mostrar el precio final. Si no está activo, mostrar 'Cupón inválido'. Agregale otro
//método que muestre el código siempre en mayúsculas con .toUpperCase().

const cuponDescuento = {
    codigo: "QRHYX",
    porcentaje: 25,
    estaActivo: true,
    precio(precioProducto){
        const precioDescuento = precioProducto * 0.25;
        const precioFinal = precioProducto - precioDescuento;
        if(this.estaActivo === true){
            return `Este es el precio final del producto con descuento aplicado: ${precioFinal.toFixed(2)}`
        } else{
            return "El cupon no es válido"
        }
    },
    codigoMayus(){
        return `Este es el código en mayúsculas: ${this.codigo.toUpperCase()}`
    }


}

console.log(cuponDescuento.precio(15000));
console.log(cuponDescuento.codigoMayus());

//Investigá: ¿Qué hace .toFixed(2)? Usalo para que el precio final siempre muestre dos decimales aunque
//el resultado sea exacto: es una herramienta en javascript para formatear numeros, especificamente controlar
//decimales que se quieren mostrar, sirve para limitar numeros largos a una cantidad fija de digitos 
// despues del punto, también redondea, si es superior a 5 o superior redondea hacia arriba. También transforma
//el numero en una cadena de texto

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Creá un objeto que represente un perfil de red social con nombre de usuario, cantidad de
//seguidores y verificado (booleano). Agregale un método que use un ternario para mostrar el
//nombre con o sin el simbolo de verificado. Agregale otro método con if/else para clasificar la
//cuenta: menos de 1.000 seguidores es 'cuenta nueva', entre 1.000 y 10.000 es 'cuenta en
//crecimiento', entre 10.000 y 100.000 es 'influencer', y más de 100.000 es 'cuenta masiva'.

const incognito = {
    nombreUsuario: "El Incognito",
    cantidadSeguid: 3000,
    cuentaVerify: true,
    simboloVerify(){
        return this.cuentaVerify ? "icono de cuenta verificada" : "No muestra icono de verificacion"
    },
    cantidadSeguidores(){
        const cuentaCrecimiento = this.cantidadSeguid >= 1000 && this.cantidadSeguid <= 10000;
        const influencer = this.cantidadSeguid >= 10000 && this.cantidadSeguid <= 100000;
        const cuentaMasiva = this.cantidadSeguid > 100000;
        const cuentaNueva = this.cantidadSeguid < 1000;
        if(cuentaMasiva){
            return `Eres un Influencer extrella, cuentas con mas de ${cuentaMasiva} seguidores`;
        } else if(influencer){
            return `Eres un buen Influencer, cuentas con mas de ${influencer} seguidores`;
        } else if(cuentaCrecimiento){
            return `Adelante! vas por buen camino, cuentas con mas de ${cuentaCrecimiento} seguidores`;
        } else if(cuentaNueva){
            return "No te rindas, con constancia y persistencia lo lograrás"
        }
    }
}

console.log(incognito.simboloVerify());
console.log(incognito.cantidadSeguidores());

//Qué es la igualdad estricta === y en qué se diferencia de ==? con == solo se compara el valor, mientras que con === se compara
//valor y tipo de valor, este ultimo es altamente estricto

////////////////////////////////////////////////////////////////////////////////////////

//Creá un objeto que represente un vuelo con origen, destino, hora de salida y si está retrasado.
//Agregale un método que use template literals para mostrar la información del vuelo. Agregale otro
//método que use un ternario para mostrar el estado como 'a tiempo' o 'retrasado'. Agregale un
//tercer método con if/else para mostrar la zona horaria del origen: si es 'Buenos Aires' mostrar
//'GMT-3', si es 'Madrid' mostrar 'GMT+1', si es 'Nueva York' mostrar 'GMT-5', y para cualquier otro
//origen mostrar 'zona horaria desconocida'

const vueloDir = {
    origen: "MAD",
    destino: "PER",
    horaSalida: "12:00",
    estado: "retrasado",
    infoVuelo(){
        return `Esta es la información del vuelo, IATA Origen: ${this.origen}, IATA destino: ${this.destino}, hora salida: ${this.horaSalida} y su estado es: ${this.estado}`    
    },
    estadoVuelo(){
        return this.estado === "En hora" ? "Estado de vuelo en hora" : "El vuelo esta retrasado"
    },
    zonaHoraria(){
        if(this.origen === "EZE"){
            return "Buenos Aires, su zona horaria es 'GMT-3'"
        }else if(this.origen === "LGA"){
            return "Nueva York, su zona horaria es 'GMT-5'"
        }else if(this.origen === "MAD"){
            return "Madrid, su zona horaria es 'GMT+1'"
        }
        return "Se desconoce la zona horaria del origen"
    }
}

console.log(vueloDir.infoVuelo());
console.log(vueloDir.estadoVuelo());
console.log(vueloDir.zonaHoraria());

//¿Para qué sirve la cláusula else if? sirve para evaluar multiples condiciones en orden

/////////////////////////////////////////////////////////////////////////////////////////////
//Creá un objeto que represente una receta con nombre, ingredientes como string separado por
//comas y tiempo de preparación en minutos. Agregale un método que use .split() para mostrar los
//ingredientes uno por uno. Agregale otro método con if/else para clasificar la receta como rápida
//(menos de 15 minutos), normal (entre 15 y 45 minutos) o elaborada (más de 45 minutos).

const receta = {
    nombre: "Torta de la abuela",
    ingredientes:"harina, huevos, mantequilla, azucar, limon",
    tiempoPreparacion: 145,
    mostrarIngredientes(){
        console.log(this.ingredientes.trim().split(","))
        return `Ingredientes de forma independiente: ${this.ingredientes})`
        
    },
    tiempoEspera(){
        if(this.tiempoPreparacion < 15){
            return `El tiempo de preparacion es rapido para preparar la ${this.nombre}`
        }else if(this.tiempoPreparacion > 15 && this.tiempoPreparacion < 45){
            return `El tiempo de preparacion de la ${this.nombre} es normal`
        }
        return `El tiempo de preparacion para la ${this.nombre} es muy elaborado`
    }
}

console.log(receta.mostrarIngredientes())
console.log(receta.tiempoEspera())

//trimStart() elimina espacios del inicio de una cadena, mientras que el trimEnd lo hace pero al final de cadena

////////////////////////////////////////////////////////////////////////////////////////////////////

//Creá un objeto que represente un gimnasio con nombre, precio mensual y si tiene pileta. 
// Agregale un método que use un ternario para mostrar si incluye pileta en el plan. 
// Agregale otro método que reciba la cantidad de meses y calcule el costo total mostrándolo con template literals.

const gimnasio = {
    nombre: "Strong Gym",
    precioMensual: 70000,
    pileta: true,
    tienePileta(){
        return this.pileta ? "Strong Gym te ofrece plan con pileta": "Strong Gym no incluye pileta en tu plan"
    },
    cantidadMeses(){
        const mesesGym = 12;
        const costoNumero = Number(this.precioMensual);
        const costoTotal = mesesGym * costoNumero;
        return `El costo total por ${mesesGym} meses es: ${costoTotal}`

    }
}

console.log(gimnasio.tienePileta());
console.log(gimnasio.cantidadMeses());

//Que hace Number(). El método o función Number() sirve para convertir un valor (que suele ser un texto) en un número 
// real con el que la computadora pueda hacer cálculos matemáticos.

/////////////////////////////////////////////////////////////////////////

//Creá un objeto que represente un estudiante con nombre, carrera y promedio. Agregale un método
// use .toLowerCase() para normalizar el nombre de la carrera antes de mostrarlo. Agregale otro
//método con if/else para mostrar el estado académico: promedio menor a 4 es 'en riesgo
//académico', entre 4 y 5.9 es 'puede rendir con previa', y 6 o más es 'habilitado para rendir el final'.

const estudiante = {
    nombre: "Abelardo",
    carrera: "Medicina",
    promedio: 4.9,
    nombreCarrera(){
        const carreraLower = this.carrera.toLowerCase();
        return `Este es el nombre de la carrera: ${carreraLower}`
    },
    promedioAcademico(){
        const promedioRedondeado = Math.round(this.promedio);
        if(promedioRedondeado <= 4){
            return `En riesgo, actualmente su promedio es ${promedioRedondeado}`
        }else if(promedioRedondeado > 4 && this.promedio <= 5.9){
            return `Puede rendir con previa, su promedio es ${promedioRedondeado}`
        }else if(promedioRedondeado > 6){
            return `Habilitado para rendir el final, su promedio es ${promedioRedondeado}`
        }
        return "Promedio desconocido"

    }
}
console.log(estudiante.nombreCarrera());
console.log(estudiante.promedioAcademico());

// Investigá: ¿Qué hace Math.round()? es una función fundamental que se utiliza para redondear un número al entero más cercano.
// si la parte es menor a 0.5 redondea hacia abajo, si la parte es 0.5 mayor redondea hacia arriba

//////////////////////////////////////////////////////////////////////////

//Creá un objeto que represente un producto de e-commerce con nombre, precio y categoría.
//Agregale un método que use .includes() con un ternario para mostrar si pertenece a la sección de
//ofertas: la categoría debe contener la palabra 'oferta' para que cuente. Agregale otro método que
//muestre el nombre del producto con la primera letra en mayúscula usando .slice() y
//.toUpperCase().

const productoTest = {
    nombre: "pestañina",
    precio: 25000,
    categoria: "Maquilaje",
    categoryOffer(){
        return this.categoria.includes("oferta") ? "La categoria tiene oferta" : "La categoria no tiene oferta";
    },
    nameProduct(){
        const letraInicial = this.nombre.charAt(0).toUpperCase();
        const restName = this.nombre.slice(1);
        const caractersEspecif = this.categoria.startsWith("M");
        const incluyeCategory = this.categoria.includes("M");
        return `${letraInicial}${restName} ${caractersEspecif} ${incluyeCategory}`
    }
}

console.log(productoTest.categoryOffer());
console.log(productoTest.nameProduct());

//Investigá: ¿Qué hace .startsWith()? es un método de los Strings (cadenas de texto) que sirve para verificar 
// si un texto comienza con una serie de caracteres específicos, el resultado siempre sera un valor booleano
// Usalo para verificar si la categoría empieza con la letra 'o' y compará
//ese resultado con el de .includes()

//////////////////////////////////////////////////////////////////////////////////////////

//Creá un objeto que represente un sistema de turnos con nombre del cliente, servicio y hora. La
//hora se guarda como número (por ejemplo, 14 para las 14:00). Agregale un método que use .trim()
//para limpiar el nombre antes de guardarlo. Agregale otro método con if/else para verificar si la hora
//está dentro del horario de atención de 9 a 18: si está dentro mostrar 'Turno confirmado', si no
//mostrar 'Fuera de horario de atencion

const turnos = {
    nombre: "Atlas",
    servicio: "nocturno",
    hora: 18,
    limpiezaNombre(){
        const nombreLimpio = this.nombre.trim() || "Cliente sin nombre";
        return nombreLimpio;
    },
    verifyHour(){
        if(this.hora >= 9 && this.hora <= 18){
            return `Turno confirmado a las: ${this.hora}`
        }
        return `Fuera del horario de atencion`
    }

}
console.log(turnos.limpiezaNombre());
console.log(turnos.verifyHour());

/////////////////////////////////////////////////////////////////////////////////

//Creá un objeto que represente un vehículo de delivery con patente, nombre del repartidor y
//cantidad de entregas del día. Agregale un método que use un ternario para mostrar si puede tomar
//más pedidos: el límite diario es 20 entregas. Agregale otro método que muestre la patente siempre
//en mayúsculas y sin espacios usando .toUpperCase() y .replace()

const vehiculoUber = {
    patente: "NC2026 113091",
    nombreRepartidor: "Javier",
    cantidadEntregas: 12,
    limitePedidos(){
        const limite = this.cantidadEntregas > 0 && this.cantidadEntregas <=20;
        return limite ? "Puede tomar mas pedidos" : "Llegaste al límite de pedidos diarios"
    },
    patenteMayus(){
        return `Esta es la patente: ${this.patente.toUpperCase().replace(" ", "-")}`
    }
}

console.log(vehiculoUber.limitePedidos());
console.log(vehiculoUber.patenteMayus());

///////////////////////////////////////////////////////////////////////////////////7

//Creá un objeto que represente un examen con materia, alumno, respuesta correcta y respuesta del
//alumno. Agregale un método que use .trim() y .toLowerCase() para normalizar ambas respuestas
//antes de compararlas. Usá if/else para mostrar 'Correcto' o 'Incorrecto' con el nombre del alumno y
//la materia usando template literals.

const examenFinal = {
    materia: "Sociales",
    alumno: "Sofi",
    respuestaOk: "Pluton",
    respuestaAlumno: "Jupiter",
    mostrarRespuesta(){
        const respuestaUno = this.respuestaOk.trim().toLowerCase();
        const respuestaA = this.respuestaAlumno.trim().toLowerCase();
        return `Respuesta correcta: ${respuestaUno}, y respuesta del alumno: ${respuestaA}`;

    },
    estadoRespuesta(){
        const requestOk = this.respuestaOk.trim().toLowerCase();
        const requestAlumno = this.respuestaAlumno.trim().toLowerCase();
        if(requestOk === requestAlumno ){
            return `La respuesta del alumno: ${this.alumno} fue correcta`
        }
        return `La respuesta del alumno: ${this.alumno} fue incorrecta`

    }
}
console.log(examenFinal.mostrarRespuesta());
console.log(examenFinal.estadoRespuesta());













