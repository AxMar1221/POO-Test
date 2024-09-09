// Seleccionamos el botón y los textareas
const runButton = document.getElementById('runButton');
const textarea1 = document.getElementById('textarea1');
const textarea2 = document.getElementById('textarea2');

// Función que se ejecuta al hacer clic en el botón
function ejecutar() {
    const codigo = textarea1.value;
    
    try {
        // Evaluar el código y capturar el resultado
        const resultado = eval(codigo);
        
        // Mostrar el resultado en el segundo textarea
        textarea2.value = resultado;
    } catch (error) {
        // Mostrar errores en el segundo textarea
        textarea2.value = 'Error: ' + error.message;
    }
}

// Asignamos la función al evento click del botón
runButton.addEventListener('click', ejecutar);
