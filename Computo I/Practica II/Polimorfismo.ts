import Animal from "./Herencia";

class Gato extends Animal {
    constructor(nombre: string) {
        super(nombre);
    }
    
    sonido(): void {
        console.log('Miau Miau');
    }
}

let gato1 = new Gato('Garfield');
gato1.sonido();