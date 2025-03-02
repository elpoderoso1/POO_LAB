abstract class FiguraGeometrica {
    abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica {
    constructor(
        public radio: number
    ) {
        super();
    }
    calcularArea(): number {
      return Math.PI * this.radio ** 2;
    }
}

class Rectangulo extends FiguraGeometrica {
    constructor(
        public base: number, 
        public altura: number
    ) {
        super();
    }
    calcularArea(): number {
      return this.base * this.altura;
    }
}

const circulo = new Circulo(2);
console.log(circulo.calcularArea()); // 12.566370614359172