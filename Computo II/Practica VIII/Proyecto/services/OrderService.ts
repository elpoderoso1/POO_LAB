import { inject, injectable } from "inversify";
import { Order } from "../models/Order";
import { IOrderRepository } from "../repositories/OrderRepository";
import { TYPES } from "../types/types";

@injectable()
export class OrderService {
    constructor(
        @inject(TYPES.IOrderRepository) private orderRepository: IOrderRepository
    ) {}

    placeOrder(order: Order): void {
        console.log(`Procesando pedido para ${order.customer.name}...`);
        this.orderRepository.save(order);
    }
}