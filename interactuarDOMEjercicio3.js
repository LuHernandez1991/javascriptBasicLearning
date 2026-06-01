const campoUno = document.getElementById("campo1");
const campoDos = document.getElementById("campo2");
const buttonTres = document.getElementById("btnMostrar");

buttonTres.addEventListener('click', () => {

    const nombre = campoUno.value;
    const edad = campoDos.value;

    console.log(`Nombre: ${nombre} | Edad: ${edad}`);
});

//En JavaScript, cuando obtienes un elemento del DOM que es un campo de entrada (como un input, 
// textarea o select), el navegador crea un objeto para ese elemento. 
// La propiedad .value contiene el estado actual del texto o dato que reside dentro de ese campo.