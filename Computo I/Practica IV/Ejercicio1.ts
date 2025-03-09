enum DiaSemana {
    Lunes,
    Martes,
    Miércoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo,
};

function obtenerDia(dia: DiaSemana): string {
    return `Hoy es ${DiaSemana[dia]}`;
}

console.log(obtenerDia(DiaSemana.Lunes));