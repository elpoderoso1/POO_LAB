enum EstadoPedido {
    Pendiente = "Pendiente",
    EnPreparacion = "En Preparación",
    Entregado = "Entregado",
};

type Pedido = {
    id: number,
    cliente: string,
    estado: EstadoPedido
};

function mostrarPedido(pedido: Pedido): string {
    return `Pedido: ${pedido.id}\nCliente: ${pedido.cliente}\nEstado: ${pedido.estado}`;
}

const pedido001: Pedido = { id: 1, cliente: "Maria Jose", estado: EstadoPedido.Pendiente };
const pedido002: Pedido = { id: 2, cliente: "Fatima Ramos", estado: EstadoPedido.EnPreparacion };

console.log(mostrarPedido(pedido001));
console.log(mostrarPedido(pedido002));

function entregarPedido(pedido: Pedido): void {
    pedido.estado = EstadoPedido.Entregado;
}

entregarPedido(pedido001);
console.log(mostrarPedido(pedido001));