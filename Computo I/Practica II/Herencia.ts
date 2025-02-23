export default class Animal {
    nombre: string;
    constructor(nombre: string) {
        this.nombre = nombre
    }
    sonido(){
        console.log('Hace un sonido...');
    }
}

class Perro extends Animal{
    constructor(nombre:string) {
        super(nombre);
    }

    sonido(): void {
        console.log('Guau Guau');
    }
}

let perro1 = new Perro('Firulais Clonado');
perro1.sonido();