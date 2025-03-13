class Motor {
    encender() {
        console.log("Motor encendido");
    }
}

class Auto001 {
    private motor: Motor;
    constructor() {
        this.motor = new Motor();
    }
    arrancar() {
        this.motor.encender();
        console.log("Auto en marcha");
    }
}

const miAuto = new Auto001();
miAuto.arrancar();