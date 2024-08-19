class Personaje {
    name = "";
    life = 100;
    atack() {
        console.log(this.name + "ataque");
    }
    move() {
        console.log(this.name + "movimiento");
    }
}

class Heroe extends Personaje {
    atack() {
        console.log(this.name + " pow");
    }
    move() {
        console.log(this.name + " da un paso al frente");
    }
}
            

let heroe = new Heroe();
heroe.name = "Batman";

heroe.atack();
heroe.move();

