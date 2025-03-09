type Empleado = {
    nombre: string;
    puesto: string;
    salario: number;
};

function mostrarEmpleado(empleado: Empleado): string {
    return `Empleado: ${empleado.nombre}\nPuesto: ${empleado.puesto}\nSalario: ${empleado.salario}`;
}

const empleadoEjemplo: Empleado = { nombre: "Liz", puesto: "Mesera", salario: 2500 };
console.log(mostrarEmpleado(empleadoEjemplo));