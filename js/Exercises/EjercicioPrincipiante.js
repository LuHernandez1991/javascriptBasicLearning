console.log("==========COMIENZA LO BUENO==============")

console.log("============PARTE UNO==============")

const empleadoUno  = {
    id:"#1",
    nombre:"Daniel Guarin",
    departamento:"Desarrollo",
    activo: true,
}
const empleadoDos  = {
    id:"#2",
    nombre:"Mariana Fuentes",
    departamento:"QA",
    horasExtras: 3,
}
const empleadoTres  = {
    id:"#3",
    nombre:"Joaquin Largo",
    departamento:"Administrador",
}
console.log(`Empleado: ${empleadoUno.id} | ${empleadoUno.nombre} | Departamento: ${empleadoUno.departamento}`);
console.log(`Empleado: ${empleadoDos.id} | ${empleadoDos.nombre} | Departamento: ${empleadoDos.departamento}`);
console.log(`Empleado: ${empleadoTres.id} | ${empleadoTres.nombre} | Departamento: ${empleadoTres.departamento}`);

console.log("============PARTE DOS===============")

const EmpleadosCorporate = [
        {id:"#1",nombre:"Daniel Guarin",departamento:"Desarrollo",activo: true},
        {id:"#2", nombre:"Mariana Fuentes", departamento:"QA", horasExtras: 3},
        {id:"#3",nombre:"Joaquin Largo",departamento:"Administrador"},
        {id:"#4",nombre:"Alejandra Martinez",departamento:"Desarrollo", activo: false},
        {id:"#5",nombre:"Jordan Abello",departamento:"QA"}
]
console.log("El array tiene esta cantidad de empleados" ,EmpleadosCorporate.length);
console.log("El primer empleado de la lista es: " ,EmpleadosCorporate[0]);
console.log("El ultimo empleado de la lista es: " ,EmpleadosCorporate[EmpleadosCorporate.length-1])

for(let i=0; i < EmpleadosCorporate.length; i++){
    console.log(EmpleadosCorporate[i].nombre)
}

console.log("============PARTE TRES===============")

let salarioBase = 500000;
let empleadoHorasExtras = EmpleadosCorporate.find(emp => emp.horasExtras !== undefined)

const calcularSalario = (empleado) => {
    let horaExtra;
    if(empleado.departamento ==="Desarrollo" || empleado.departamento === "QA"){
        horaExtra = 25;
    }else if(empleado.departamento === "Ventas"){
        horaExtra = 20;
    }else if(empleado.departamento === "Administrador"){
        horaExtra = 15;
    }else{
        horaExtra = 10;
    }
    return salarioBase + (empleado.horasExtras * horaExtra)
}

for(let i=0; i < EmpleadosCorporate.length; i++){
    console.log(`${EmpleadosCorporate[1].nombre} - Salario total: ${calcularSalario(empleadoHorasExtras)}`)
}

console.log("============PARTE CUATRO===============")

const getEstado = (empleado) => {
    return empleado.activo ? "✅​ Activo": "❎ Inactivo"
}
for(let i=0; i < EmpleadosCorporate.length; i++){
    console.log(`Empleado ${EmpleadosCorporate[i].id} | [${EmpleadosCorporate[i].nombre}] - [${getEstado(EmpleadosCorporate[i])}]`)
}

console.log("============PARTE CINCO===============")

console.log("============================================================================")

const imprimirNomina = () => {
    for(let i=0; i < EmpleadosCorporate.length; i++){
        let emp = EmpleadosCorporate[i]; 

        console.log(`◼️​Empleado [${emp.id}]`);
        console.log(`◼️​Nombre [${emp.nombre}]`)
        console.log(`◼️​Departamento [${emp.departamento}]`)
        if(emp.activo !== undefined){
            console.log(`◼️​Estado [${getEstado(EmpleadosCorporate[i])}]`)
        }
        if(emp.horasExtras){
            console.log(`◼️​Salario Base ${salarioBase}`)
            console.log(`◼️​Horas Extras ${emp.horasExtras}`)
            console.log(`◼️​Salario total ${calcularSalario(emp)}`)
        }else{
        console.log(`◼️​Salario total NO asignado`)
        }   
        console.log("------------------------------------------------")
    }

}
imprimirNomina()

console.log("============================================================================")

console.log("============RETO EXTRA===============")

const getEmpleadosConExtra = ()=>{
    let newArrayEmpleados = [];
    for(let i=0; i < EmpleadosCorporate.length; i++){
        let emp = EmpleadosCorporate[i];
        
        if(emp.horasExtras > 0){
            newArrayEmpleados.push(emp)
        }
    }
    return newArrayEmpleados;   

}
const empleadoConHoraExtra = getEmpleadosConExtra();

console.log(`Emplead@ con horas extras: ${empleadoConHoraExtra.length}`)

    for(let j=0; j < empleadoConHoraExtra.length; j++){
        console.log(`Nombre: ${empleadoConHoraExtra[j].nombre}`);
        console.log(`Numero de horas extras: ${empleadoConHoraExtra[j].horasExtras}`)
    }

console.log("================================FINAL========================================")
