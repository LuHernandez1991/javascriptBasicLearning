console.log("========================COMIENZO A SUFRIR, NO TEMERÉ===================================")
console.log("=============================PARTE UNO=================================================")

const inventarioStore = [
    {id:"P1", nombre:"ThinkPad", categoria:"Laptops", precio:1000000 , stock:6, disponible:true},
    {id:"P2" , nombre:"Mouse", categoria:"Accesorios", precio:50000 , stock:28, disponible:true},
    {id:"P3" , nombre:"Auriculares", categoria:"Audio", precio:20000, stock:15, disponible:true},
    {id:"P4" , nombre:"Samsung A21", categoria:"Moviles", precio:700000, stock:10, disponible:true},
    {id:"P5" , nombre:"MacBook" , categoria:"Laptops", precio:4000000, stock:0, disponible:true},
    {id:"P6" , nombre:"Base computador" , categoria:"Accesorios", precio:200000, stock:1, disponible:false},
]

console.log("Total de productos registrados:" ,inventarioStore.length);
console.log("Primer producto: " ,inventarioStore[0]);
console.log("Ultimo producto: " ,inventarioStore[inventarioStore.length-1])

console.log("=============================PARTE DOS=================================================")

function evaluarStock (stock){
        if(stock > 10){
            return "◼️​ Stock suficiente ";
        }else if(stock > 0 && stock <= 10){
            return "◼️​ Stock bajo ";
        }else{ 
            return "◼️​ Sin stock ";
        }
};


function evaluarCatalogo(item) {
    let estadoStock = item.stock > 10 ? "◼️ Stock suficiente" : (item.stock > 0 ? "◼️ Stock bajo" : "◼️ Sin stock");
    let estadoCatalogo = item.stock > 0 ? "◼️ En catálogo" : "◼️ Fuera del catálogo";
    return `${item.nombre} | ${estadoStock} | ${estadoCatalogo}`;
};


console.log("=============================PARTE TRES=================================================")

const inventarioProductos = ()=> {
    for (let i = 0; i < inventarioStore.length; i++) {
        let item = inventarioStore[i];
        let precioFinal = item.precio;

        let descuentoReal = item.categoria === "Laptops" ? 0.05 : (item.categoria === "Moviles") ? 0.03 :0;
        let valorDescontado = item.precio * descuentoReal;

        precioFinal = item.precio - valorDescontado;

        if(item.categoria === "Laptops" || item.categoria === "Moviles") {
            console.log(`${item.nombre} | Valor bruto: ${item.precio} | Descuento: ${valorDescontado} | Valor neto: ${precioFinal}`);
        }
        console.log("--------------------------------------------------------------------------------");
    }
}

inventarioProductos()

console.log("=============================PARTE CUATRO=================================================")

console.log("===============================================================================")

console.log(" ◼️​ Inventario StoreTrack — Reporte completo")

console.log("===============================================================================")

const reporteGeneral = () => {
    let sumaValorNeto = 0;
    for (let i = 0; i < inventarioStore.length; i++) {
        let item = inventarioStore[i];
        
        // Calculamos la tasa y el neto aquí para que existan en este bloque
        let tasa = item.categoria === "Laptops" ? 0.05 : (item.categoria === "Moviles" ? 0.03 : 0);
        let precioFinal = item.precio - (item.precio * tasa);
        sumaValorNeto += precioFinal;

            console.log(`◼️ ${item.nombre}
        Categoria: ◼️ ${item.categoria}
        Precio: $${item.precio.toLocaleString()}
        Stock: ${item.stock} unidades -> ${evaluarStock(item.stock)}
        Catalogo: ${evaluarCatalogo(item)}
        Valor neto: $${precioFinal.toLocaleString()}`);
        
        console.log("----------------------------------------------------------------------");
    }
    console.log(" ◼️ RESUMEN");

    console.log("Total productos: ",inventarioStore.length);
    console.log(`Total valor neto : ${sumaValorNeto.toLocaleString()}`);

    console.log("===============================================================================")

}
reporteGeneral()

console.log("===============================RETO==============================================")

const stockProductos = ()=>{
    let  arrayProductos= [];
    let contador = 0;
    for(let i=0; i < inventarioStore.length; i++){
        let p = inventarioStore[i];

        if(p.stock < 5 && p.disponible === true){
            contador++;
            arrayProductos.push( ` - ${p.nombre} | Stock: ${p.stock}`);
        }
    }
    console.log (`◼️​◼️​ Productos críticos (bajo stock y activos: ${contador})`)
    if (arrayProductos.length > 0) {
        return arrayProductos.join("\n");
    } else {
        return "No hay productos críticos.";
    }
            
}

console.log(stockProductos());
