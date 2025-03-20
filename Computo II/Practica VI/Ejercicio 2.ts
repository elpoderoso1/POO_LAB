// Aplicando OCP
// Implementa una calculadora que soporte nuevas operaciones sin modificar la clase base.

interface Operacion { 
    calcular(a: number, b: number): number; 
    } 

class Suma001 implements Operacion { 
    calcular(a: number, b: number): number { 
        return a + b; 
    } 
} 

class Resta001 implements Operacion { 
    calcular(a: number, b: number): number { 
        return a - b; 
    } 
} 

class Multiplicacion001 implements Operacion { 
    calcular(a: number, b: number): number { 
        return a * b; 
    } 
} 

function operar (operacion: Operacion, a: number, b: number) { 
    return operacion.calcular(a, b); 
} 
    console.log(operar(new Suma001(), 5, 3))
    console.log(operar(new Resta001(), 5, 3));
    console.log(operar(new Multiplicacion001(), 5, 3));