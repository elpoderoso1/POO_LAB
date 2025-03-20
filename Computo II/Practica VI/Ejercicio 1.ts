// Aplicando SRP
// Refactoriza una clase Empleado que actualmente maneja tanto cálculos salariales como impresión de reportes.

class Empleado002 { 
    constructor(public nombre: string, public salarioBase: number) {} 

    calcularSalario(): number { 
        return this.salarioBase * 1.1; 
    } 
} 

class ReporteEmpleado { 
    generar (empleado: Empleado002): string { 
        return `Empleado: ${empleado.nombre}, Salario: ${empleado.calcularSalario()}`;
    } 
} 

const empleado = new Empleado002("Juan", 2000); 
const reporte = new ReporteEmpleado(); 
console.log(reporte.generar (empleado));