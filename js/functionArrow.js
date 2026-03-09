console.log("explicacion funcion flecha");

//esto es lo mismo que una función, cual es la diferencia entre el arrow y una normal? pues la sintaxis

function verifyIsMAjor(edad){
    if(edad >= 18){
        return true
    } else{
        return false
    }
}

//con arrow

const verifyIsMajor =(age)=>{
    if(age >= 18){
        return true
    } else{
    return false
}
}

console.log("resultado desde una function",verifyIsMAjor(19));
console.log("resultado desde una function con flecha",verifyIsMajor(67));