// Principio de Responsabilidad Única

// Forma Incorrecta 

// class Reporte {
//     generarPDF() {
//         console.log("Generando PDF...");
//     }

//     guardarEnDB() {
//         console.log("Guardando en la base de datos...");
//     }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Forma Correcta

class Reporte {
    generarContenido(): string {
        return "Contenido del reporte";
    }
}

class ExportadorPDF {
    exportar(reporte: Reporte) {
        console.log("Exportando a PDF:" + reporte.generarContenido());
    }
}
