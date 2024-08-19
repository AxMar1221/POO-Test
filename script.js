       // Función para crear un nuevo Personaje
       function crearPersonaje(nombre, vida) {
        // Usar un closure para encapsular atributos
        const obj = {
            nombre: nombre,
            vida: vida,
            atacar: function() {
                document.getElementById('resultado-personaje').innerHTML += `${this.nombre} ataca!<br>`;
            },
            obtenerVida: function() {
                return this.vida;
            },
            modificarVida: function(nuevaVida) {
                this.vida = nuevaVida;
            }
        };
        return obj;
    }

    // Función para crear un nuevo Guerrero, que hereda de Personaje
    function crearGuerrero(nombre, vida, fuerza) {
        const personaje = crearPersonaje(nombre, vida);
        
        // Usar Object.assign para agregar propiedades adicionales
        const guerrero = Object.assign(personaje, {
            fuerza: fuerza,
            atacar: function() {
                document.getElementById('resultado-guerrero').innerHTML += `${this.nombre} ataca con fuerza!<br>`;
            }
        });
        
        return guerrero;
    }

    // Crear una instancia de Personaje
    const personaje = crearPersonaje('Batman', 100);
    personaje.atacar(); // Output: Gandalf ataca!
    document.getElementById('resultado-personaje').innerHTML += `Vida: ${personaje.obtenerVida()}<br>`;
    personaje.modificarVida(80);
    document.getElementById('resultado-personaje').innerHTML += `Vida después de modificar: ${personaje.obtenerVida()}<br>`;

    // Crear una instancia de Guerrero
    const guerrero = crearGuerrero('Guasón', 100, 50);
    guerrero.atacar(); // Output: Aragorn ataca con fuerza!
    document.getElementById('resultado-guerrero').innerHTML += `Vida: ${guerrero.obtenerVida()}<br>`;
    guerrero.modificarVida(80);
    document.getElementById('resultado-guerrero').innerHTML += `Vida después de modificar: ${guerrero.obtenerVida()}<br>`;

    // Función para reiniciar resultados (opcional)
function reiniciar() {
    document.getElementById('resultado-personaje').innerHTML = '<h2>Heroe</h2>';
    document.getElementById('resultado-guerrero').innerHTML = '<h2>Villano</h2>';
    mostrarResultados();
}