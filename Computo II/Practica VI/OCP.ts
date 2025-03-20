// Principio Open/Closed

// Forma Incorrecta 

// class Calculadora {
//     operar(tipo: string, a: number, b: number): number {
//         if (tipo === "suma") return a + b;
//         if (tipo === "resta") return a - b;
//         throw new Error("Operación no soportada");
//     }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Forma Correcta 

interface Operacion {
    calcular(a: number, b:number): number;
}

class Suma implements Operacion {
    calcular(a: number, b: number): number {
        return a + b;
    }
}

class Resta implements Operacion {
    calcular(a: number, b: number): number {
        return a - b;
    }
}