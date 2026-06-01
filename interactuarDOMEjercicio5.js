    const input = document.getElementById('textoUsuario');
    const parrafo = document.getElementById('contador');
                           
    input.addEventListener('input', () => {
        
        const longitud = input.value.length;

        parrafo.textContent = `Caracteres escritos: ${longitud}`;
    });

//INPUT: A diferencia del evento change (que solo se activa cuando sales del campo) o el click, el evento input 
//se dispara cada vez que el valor del elemento cambia. Es decir: Si escribes una letra.
//Si borras un carácter. Si pegas un texto con el ratón. Esto es lo que permite que 
// la actualización sea "en tiempo real".