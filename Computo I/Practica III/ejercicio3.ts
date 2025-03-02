import * as readline from "node:readline";

class Circulo {
    constructor(
        private radio: number
    ) {}

    calcularArea(): number {
        return Math.PI * Math.pow(this.radio, 2);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa el radio del circulo: ", (respuesta) => {
    const radio = parseFloat(respuesta);
    const circulo = new Circulo(radio);
    console.log(`El área del círculo es: ${circulo.calcularArea().toFixed(2)}`);
    rl.close(); 
});