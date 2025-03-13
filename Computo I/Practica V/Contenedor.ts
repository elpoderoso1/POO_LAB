class Contenedor<T> {
    private valor: T;
    constructor(valor: T) {
        this.valor = valor;
    }
    obtener(): T {
        return this.valor;
    }
    asignar(nuevoValor: T): void {
        this.valor = nuevoValor;
    }
}

const contenedorNumero = new Contenedor<number>(42);
console.log(contenedorNumero.obtener());
contenedorNumero.asignar(100);
console.log(contenedorNumero.obtener());