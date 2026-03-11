//Creá un objeto que represente un producto con nombre y precio. 
// Agregale un método que muestre el precio con un 21% de IVA incluido.

const producto ={
    nombre: "azucar",
    precio: 1300,
precioIva(){
    const iva = 0.21
    return producto.precio * iva;
}
}

console.log(producto.precioIva());

