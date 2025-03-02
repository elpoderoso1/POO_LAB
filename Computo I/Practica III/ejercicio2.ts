interface Vehiculo { 
    acelerar(): void; 
    frenar(): void; 
} 
class Auto implements Vehiculo { 
    acelerar(): void { 
        console.log("El auto está acelerando."); 
    }
    frenar(): void { 
        console.log("El auto está frenando."); 
    }
}

class Moto implements Vehiculo { 
    acelerar(): void { 
        console.log("La moto está acelerando."); 
    } 
    frenar(): void { 
    console.log("La moto está frenando."); 
    }
} 

const auto = new Auto(); 
const moto = new Moto(); 
auto.acelerar(); 
moto.acelerar();