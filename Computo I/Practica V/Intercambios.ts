function intercambiar<T, U>(par: [T, U]): [U, T] {
    return [par[1], par[0]]
}

console.log(intercambiar(["hola", 10]));