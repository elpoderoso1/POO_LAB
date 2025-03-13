function identidad<T>(valor: T): T {
    return valor;
}

console.log(identidad<string>("Hola"));
console.log(identidad<number>(42));
