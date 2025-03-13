class Caja<T> {
    private contenido: T;
    constructor(valor: T) {
        this.contenido = valor;
    }
    obtenerContenido(): T {
        return this.contenido;
    }
}

const cajaNumerica = new Caja<number>(100);
console.log(cajaNumerica.obtenerContenido());