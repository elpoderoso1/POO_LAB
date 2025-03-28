/*
Principio de Segregación de Interfaces (ISP - Interface Segregation Principle)
Este principio establece que una interfaz no debe obligar a una clase a implementar métodos que no utiliza. En lugar de tener una interfaz grande y
general, debemos dividirla en interfaces más pequeñas y específicas...
*/

// Ejemplo incorrecto de ISP
// interface Worke{
//     work():void;
//     eat():void;
// }

// class Developer implements Worke {
//     work(): void {
//         console.log(`Escribiendo codigo...`);
//     }

//     eat(): void {
//         console.log(`Comiendo...`);
//     }
// }

// class Robot implements Worke {
//     work(): void {
//         console.log(`El robot esta trabajando...`);
//     }

//     eat(): void {
//         console.log(`Method not implemented.`);
//     }
// }

//Ejemplo correcto (Aplicando ISP) 
interface Work{ 
    work():void; 
} 

interface Eatable{ 
    eat():void; 
}

class Developer implements Work, Eatable{ 
    work(): void { 
        console.log('Escribiendo codigo...'); 
    } 
    eat(): void { 
        console.log('Almorzando ...'); 
    } 
    } 

class Robot implements Work{ 
    work(): void { 
        console.log('El robot esta trabajando...'); 
    } 
} 

//Beneficio 
/* 
Claridad a la hora de implementar nuestras interfaces. 
Codigo mas legible y estructurado. 
Las clases no estan obligadas a implementar metodos que no necesiten 
*/