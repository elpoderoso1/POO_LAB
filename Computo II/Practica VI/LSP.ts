// Principio de Sustitución de Liskov

// Forma Incorrecta 

// class Ave { 
//     volar() { 
//         console.log("Volando ... "); 
//     } 
// } 

// class Pinguino extends Ave { 
//     volar() { 
//         throw new Error("Los pingüinos no pueden volar"); 
//     } 
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Forma Correcta 

class Ave {} 

class AveVoladora extends Ave { 
    volar() { 
        console.log("Volando..."); 
    }
} 

class Pinguino extends Ave {
    nadar() { 
        console.log("Nadando ... ");
    }
}