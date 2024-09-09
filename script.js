let currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;
// Seleccionamos el botón y el primer textarea
const runButton = document.getElementById('runButton');
const textarea1 = document.getElementById('textarea1');

// Función que se ejecuta al hacer clic en el botón
function ejecutar() {
    const codigo = textarea1.value;
    
    try {
        // Evaluar el código y capturar el resultado
        const resultado = eval(codigo);
        
        // Mostrar el resultado en la consola del navegador
        console.log('Resultado:', resultado);
    } catch (error) {
        // Mostrar errores en la consola del navegador
        console.error('Error:', error.message);
    }
}

// Asignamos la función al evento click del botón
runButton.addEventListener('click', ejecutar);
