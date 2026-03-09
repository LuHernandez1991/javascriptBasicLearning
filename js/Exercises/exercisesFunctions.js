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

