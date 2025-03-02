interface Volador {
    volar(): void;
}

class Pajaro implements Volador {
    volar(): void {
        console.log(`El pájaro esta volando.`);
    }
}

let pajaro = new Pajaro();
pajaro.volar();