enum NivelAcademico {
    Primaria = "Primaria",
    Secundaria = "Secundaria",
    Universidad = "Universidad"
};

type Estudiante = {
    nombre: string,
    edad: number,
    nivelEstudio: NivelAcademico
};

function mostrarInfo(estudiante: Estudiante): string {
    return `Estudiante: ${estudiante.nombre}\nEdad: ${estudiante.edad}\nNivel de estudio: ${estudiante.nivelEstudio}`;
}

const estudiante001: Estudiante = { nombre: "Maria", edad: 21, nivelEstudio: NivelAcademico.Universidad };
console.log(mostrarInfo(estudiante001));