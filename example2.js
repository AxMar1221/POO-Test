class Animal {
    name = "";
    makaSound() {
        console.log(this.name + "hace sonido");
    }
}

class Cow extends Animal {
    makeSound() {
        console.log("La vaca " + this.name + " hace muuuuuu");
    }
}
            

let cow = new Cow();
cow.name = "Lola";

cow.makeSound();