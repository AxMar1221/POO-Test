let currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;
// Seleccionamos el botón y el textarea
const runButton = document.getElementById('runButton');
const textarea1 = document.getElementById('textarea1');

// Texto inicial para el textarea
const textoInicial = `let saludo = "hola";\n
console.log(saludo);`;

// Establecemos el texto inicial en el textarea
textarea1.value = textoInicial;

// Función que se ejecuta al hacer clic en el botón
function ejecutar() {
    const codigo = textarea1.value;
    
    try {
        // Evaluar el código y capturar el resultado
        const resultado = eval(codigo);

    } catch (error) {
        // Mostrar errores en la consola del navegador
        console.error('Error:', error.message);
    }
}

// Asignamos la función al evento click del botón
runButton.addEventListener('click', ejecutar);

// Deshabilitar la selección, copia y pegado en el textarea
textarea1.addEventListener('copy', (e) => e.preventDefault());
textarea1.addEventListener('paste', (e) => e.preventDefault());
textarea1.addEventListener('cut', (e) => e.preventDefault());
