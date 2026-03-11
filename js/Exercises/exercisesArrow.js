//Crea una función llamada `generarTicket` que reciba el nombre del producto, la cantidad y el precio 
// unitario.La función debe retornar una frase con el resumen de la compra, por ejemplo: "Producto: Café | Cantidad: 3
//| Total: $9"


const generarTicket = (producto, cantidad, precio) => {
    return "Producto: " + producto + ", Cantidad: " + cantidad + ", Total: " + precio;
};

const resultado = generarTicket("Café", 1, 15.000);
console.log(resultado);