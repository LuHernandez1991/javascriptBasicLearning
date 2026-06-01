const capProductoH2 = document.getElementById('producto');
const capPrecioH2 = document.getElementById('precio');
const capStockH2 = document.getElementById('stock');
const capButtonH2 = document.getElementById('btnComprar');

//TextContent: Esta propiedad te permite acceder solo al texto que está dentro de la etiqueta, 
// ignorando cualquier etiqueta HTML interna.

console.log("Producto:", capProductoH2.textContent);
console.log("Precio:", capPrecioH2.textContent); 
console.log("Stock:", capStockH2.textContent);
console.log("Texto del botón:", capButtonH2.textContent);

//addEventListener escucha eventos y espera a que ocurra una acción específica y sirve para decirle al navegador
//que cuando haya un click en un elemento el realice o ejecute una acción (elemento: button, click el evento)

capButtonH2.addEventListener('click', () => {
    capButtonH2.textContent = "Compra realizada";
    
    console.log("cambio texto del button OK");
});