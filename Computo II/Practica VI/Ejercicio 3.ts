// Aplicando LSP
// Diseña una jerarquía de clases para representar vehículos eléctricos y de combustión sin romper LSP.

abstract class Vehiculo001 { 
    constructor(public modelo: string) {} 

    abstract acelerar(): void; 
} 

class VehiculoCombustion extends Vehiculo001 { 
    acelerar(): void { 
        console.log(`${this.modelo} acelera usando gasolina.`); 
    } 
} 

class VehiculoElectrico extends Vehiculo001 { 
    acelerar(): void { 
        console.log(`${this.modelo} acelera con batería.`); 
    } 
} 

const autoGasolina = new VehiculoCombustion("Toyota Corolla"); 
const autoElectrico = new VehiculoElectrico ("Tesla Model 3"); 
autoGasolina.acelerar();
autoElectrico.acelerar(); 