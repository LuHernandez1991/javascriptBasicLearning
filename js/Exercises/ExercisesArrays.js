const ticket1 = {
    id: "TKT-001",
    titulo: "Login no responde",
    prioridad: "alta",
    estado: "Abierto",
    categoria: "Auth",
    resumenTicket (){
        return `[${this.id}] ${this.titulo} - Estado: ${this.estado} - Prioridad: ${this.prioridad}`
    }

}
console.log(ticket1.id);
console.log(ticket1.titulo);
console.log(ticket1.estado);
console.log(ticket1.resumenTicket());

const tickets = [
    {id:"TKT-001", titulo:"Login no responde",prioridad:"alta", estado:"abierto", categoria:"auth" },
    {id:"TKT-002", titulo:"Productos no cargan",prioridad:"media", estado:"En progreso", categoria:"productos" },
    {id:"TKT-003", titulo:"Error al procesar pago",prioridad:"alta", estado:"abierto", categoria:"pagos" },
    {id:"TKT-004", titulo:"Filtro de búsqueda roto",prioridad:"baja", estado:"cerrado", categoria:"productos" },
    {id:"TKT-005", titulo:"Sesión expira muy rápido",prioridad:"media", estado:"abierto", categoria:"auth" },
    {id:"TKT-006", titulo:"Email de confirmación no llega",prioridad:"alta", estado:"en progreso", categoria:"notificaciones" },
    {id:"TKT-007", titulo:"Precio incorrecto en carrito",prioridad:"alta", estado:"abierto", categoria:"pagos" },
    {id:"TKT-008", titulo:"Botón de logout no funciona",prioridad:"baja", estado:"cerrado", categoria:"auth" },
]

console.log("Total de tickets",tickets.length)

for(const ticket of tickets){
    console.log(`${ticket.id} | ${ticket.titulo}`)
}

const clasificarPrioridad = (ticket) => {
    if(ticket.prioridad === "alta"){
        console.log(`🔴 ${ticket.id} | ${ticket.titulo}`)
    } else if(ticket.prioridad === "media"){
        console.log(`🟡 ${ticket.id} | ${ticket.titulo}`)
    }else{
        console.log(`🟢 ${ticket.id} | ${ticket.titulo}`)
    }

};
for(const ticket of tickets){
    clasificarPrioridad(ticket);
}

//Paso 6: mostrar estado con ternario

const mostrarEstado =(ticket)=>{
    const etiqueta = ticket.estado === "cerrado" ? "[Cerrado]" : "[Activo]"
    console.log(`${etiqueta} ${ticket.id} | ${ticket.titulo}`)

}

for(const ticket of tickets){
    mostrarEstado(ticket);
}

//Paso 7: contar tickets por estado

let abiertos = 0;
let enProgreso = 0;
let cerrados = 0;

for(const ticket of tickets){
    if(ticket.estado == 'abierto'){
        abiertos++;
    }else if(ticket.estado == 'cerrado'){
        cerrados++;
    }
    else {
        enProgreso++;
    }
}

console.log('-----Resumen de estados------')
console.log('Abiertos', abiertos)
console.log('En progreso', enProgreso)
console.log('Cerrados', cerrados)


