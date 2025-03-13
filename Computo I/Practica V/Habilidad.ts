class Habilidad {
    constructor(private nombre: string) {}
    usarHabilidad() {
        console.log(`Usando la habilidad: ${this.nombre}`);
    }
}

class Personaje {
    constructor(private nombre: string, private habilidad: Habilidad) {}
    ejecutarHabilidad() {
        console.log(`${this.nombre} está ejecutando su habilidad: `);
        this.habilidad.usarHabilidad();
    }
}

const fuego = new Habilidad("Llamarada");
const personaje = new Personaje("Charizard", fuego)
personaje.ejecutarHabilidad();