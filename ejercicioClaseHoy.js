//Ejercicio DOS
//1. crear funcion
//2. crear promesa
//3. crear logica
//4. Devolver la promesa

function validarEdad(numero){
    return new Promise((resolve, reject)=>{
        if(numero >= 18){
            resolve("Acceso Permitido");
        }else{
            reject("Acceso Denegado: menor de edad")
        }
    })

}

validarEdad(19).then((resultado) => {
    console.log("resultado de la promesa:", resultado);//se ejecuta cuando la promesa se resuelve exitosamente
}).catch((error) => {
    console.log("resultado de la promesa:", error);//se ejecuta cuando la promesa se rechaza
});

//Ejercicio DOS
//1. crear 3 funciones y devolver promesas en cada una de ellas
//2. funcion1 devuelver numero 5 despues de 1/2 s
//3. funcion2 devolver numero pasado Por parametro multiplicado por 2 despues de 1/2 s
//4. funcion2 devolver numero pasado Por parametro sumado mas 10 despues de 1/2 s

function funcionUno(){
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve(5)
        }, 500);
    })
};

function funcionDos(n){
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve(n * 2)
        }, 500);
    })
};

function funcionTres(n){
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve(n + 10)
        }, 500);
    })
}

funcionUno().then((resultado)=>{
    console.log("este es el resultado de la promesa", resultado)
    return funcionDos(6)
}).then((resultado)=>{
    console.log("resultado encadenamiento",resultado)
    return funcionTres(8)
}).then((resultado)=>{
    console.log("resultado de encadenamiento funciontres", resultado)
});

//async/await con try/catch
//1. crear funcion async llamada dividir
//2. recibe 2 numeros
//3. constante que llame al await para la funcion
//4. crear logica (if/else)
//5. uso de try/catch

async function dividir(num1,num2){
    if(num2 === 0){
        throw new Error("No se puede dividir entre cero");
    }
    return num1 / num2;
}
async function resultadoFinal() {
    try {
        const resultado = await dividir(10, 0);
        console.log("Este es el resultado final: ", resultado);
    } catch (error) {
        console.error(error.message);
    }
}

resultadoFinal();





