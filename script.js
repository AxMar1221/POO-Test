// Seleccionamos el botón y los textareas
const runButton = document.getElementById('runButton');
const textarea1 = document.getElementById('textarea1');
const textarea2 = document.getElementById('textarea2');

// Función para mostrar mensajes en la "consola"
function mostrarEnConsola(mensaje) {
    // Agregamos el nuevo mensaje al final del contenido actual del segundo textarea
    textarea2.value += mensaje + '\n';
}

// Función que se ejecuta al hacer clic en el botón
function ejecutar() {
    const codigo = textarea1.value;
    
    try {
        // Redefinir la consola para capturar mensajes
        const consolaOriginal = console.log;
        console.log = function(mensaje) {
            mostrarEnConsola(mensaje);
        };
        
        // Evaluar el código y capturar el resultado
        const resultado = eval(codigo);
        
        // Mostrar el resultado en la consola (segundo textarea)
        mostrarEnConsola('Resultado: ' + resultado);
    } catch (error) {
        // Mostrar errores en la consola (segundo textarea)
        mostrarEnConsola('Error: ' + error.message);
    }
}

// Asignamos la función al evento click del botón
runButton.addEventListener('click', ejecutar);
