abstract class Animal {
    constructor(
        public name: string
    ) {}

    abstract makeSound(): void;

    move(): void {
        console.log(`${this.name} está moviéndose.`);
    }
}

/* 
const animal1 = new Animal('Dog'); // Error: No se puede crear una instancia de una clase abstracta
*/