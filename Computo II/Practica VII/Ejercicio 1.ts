/*
Imaginemos que estamos creando un sistema para manejar diferentes tipos de dispositivos (por ejemplo, impresoras, escáneres). 
51 usamos una sola Interfaz Dispositivo, seria incorrecto incluir métodos como escanear en una clase de impresora. 
En su lugar, crearemos interfaces separadas para las Funcionalidades especificas. 
*/

interface Imprimible{ 
    imprimir(): void; 
}

interface Escaneable{ 
    escanear(): void; 
} 

class Impresora001 implements Imprimible{ 
    imprimir(): void {
        console.log(`Imprimiendo doc...`); 
    }
} 

class Escanear001 implements Escaneable{ 
    escanear(): void {
        console.log(`'Escaneando doc...`);
    }
} 

class Multifuncional implements Imprimible, Escaneable{ 
    imprimir(): void {
        console.log(`Imprimiendo desde clase multifuncional doc...`);
    }

    escanear(): void {
        console.log(`Escanenado desde clase multifuncional doc....`);
    }
} 

const impresora = new Impresora001(); 
//Solo puede imprimir 
impresora.imprimir();

const escaner = new Escanear001(); 
//Solo puede escanear
escaner.escanear();

const mult1 = new Multifuncional();
//Puede hacer ambas cosas
mult1.escanear();
mult1.imprimir();