console.log("Hola Luisa, estas son funciones")

/**¿que es una funcion?
 es algo repetitivo, una acción que se hace concretamente

 function saludar(){
    console.log("Hola a todos")
 }
asi se llama para usar:

 saludar();

 

 function saludar(nombre, note){
    console.log("Hola estudiantes: ", nombre, "su nota es: " + note)
 }

 saludar("Nataly", 5);
 saludar("Nataly", 5);
 saludar("Nataly", 5);
 saludar("Nataly", 5);
 

 function sumar( a , b){
    return a + b;

 }

 const resultado = sumar(40,50);
 console.log("Resultado de suma es: ", resultado)


 function verifyIsMajor (age){
    if(age >= 18){
        return "Eres mayor"
    } else {
        return "Eres menor"
    }
 }

 const result = verifyIsMajor(19);
 console.log(result);
 
function verifyIsMajor (age){
   if(age >= 18){
        return true// porque eres mayor de edad
    }else{
        return false //porque soy menor de edad
    }
 }

 function puedoEntrar(edad,tenerInvitacion){
    const ageResult = verifyIsMajor(edad);

    if(ageResult && tenerInvitacion){
        return "Puedes entrar al evento"
    }else if (ageResult && !tenerInvitacion){
        return "Necesita invitacion para entrar"
    }
        return "NO puedes entrar al evento"
 }

 console.log(puedoEntrar(18,true));
 console.log(puedoEntrar(25,false));
 console.log(puedoEntrar(16,true));
 */

 //Ejercicio 26
//Niños menores de 12 pagan $3. Adultos mayores de 65 pagan $4. Todos los demás pagan $8. Además, si
//es martes, todos pagan la mitad del precio. Imprimir el precio final.

 function precioCine (edad,dia){
    if(edad < 12){
        const valor = 3
        if(dia === "martes"){
            return valor /2;
        }
        return valor;
    }
    if(edad > 65){
        const valorA = 4
        if(dia === "martes"){
            return valorA /2;
        }
        return valorA;
    }
    const valorB = 8;
        if(dia === "martes"){
            return valorB /2;
        }
    return "Puedes pagar $8"

 }