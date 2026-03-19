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

//Paso 8: Verificar categorias con .includes()

const categorias = ["auth", "pagos", "productos", "notificaciones"]

const verificarCategoria = (cat) => {
    if(categorias.includes(cat)){
        console.log(`✅ La categoría ${cat} esta registrada`);
    }else {
        console.log(`❌ La categoría ${cat} No esta registrada`);
    }
}

verificarCategoria("pagos");
verificarCategoria("envios"); 
verificarCategoria("auth"); 
verificarCategoria("reportes"); 

// Paso 9: Buscar un ticket con .find()

const buscarTicket = (idBuscado) => {
    const resultado = tickets.find(ticket => ticket.id === idBuscado)
    if(resultado != undefined){
        console.log(`Ticket encontrado: [${resultado.id}] ${resultado.titulo} ${resultado.prioridad} ${resultado.categoria}`)
    }else {
        console.log(`❌ No existe ningun ticket con el id ${resultado}`)
    }
}
buscarTicket("TKT-003");
buscarTicket("TKT-007");
buscarTicket("TKT-099");


let cantidadTicketPrioridadAlta = 0;
let cantidadTicketAbiertos = 0;
let cantidadTicketAbiertoYPrioridadAlta = 0;

const reporteFinal = () => {
    for(const ticket of tickets){
        if(ticket.prioridad == "alta" && ticket.estado == "abierto"){
            cantidadTicketAbiertoYPrioridadAlta++;
        }
        if(ticket.prioridad == "alta"){
            cantidadTicketPrioridadAlta++;
        }
        if(ticket.estado == "abierto"){
            cantidadTicketAbiertos++;
        }
    }
    let estadoSistema = "🟢 ESTABLE";
    if(cantidadTicketAbiertoYPrioridadAlta >= 3 ){
        estadoSistema = "🔴 CRITICO";
    }else if(cantidadTicketAbiertoYPrioridadAlta >= 1 && cantidadTicketAbiertoYPrioridadAlta <= 2){
        estadoSistema = "🟡 ATENCION";
    }

    console.log("===========================");
    console.log("    REPORTE DEL SISTEMA    ");
    console.log("===========================");
    console.log("Total de tickets:    ",tickets.length);
    console.log("Prioridad alta:      ",cantidadTicketPrioridadAlta);
    console.log("Tickets abiertos:    ",cantidadTicketAbiertos);
    console.log("===========================");
    console.log("Estado del sistema:        ",estadoSistema);
}

reporteFinal()

