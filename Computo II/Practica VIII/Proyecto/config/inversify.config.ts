import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "../types/types";
import { IOrderRepository, OrderRepository } from "../repositories/OrderRepository";
import { OrderService } from "../services/OrderService";
import { IPaymentProcessor, PayPalPaymentProcess } from "../services/PaymentService";
import { EmailNotifacationService, INotificationService } from "../services/Emailservice";

const container = new Container();

container.bind<IOrderRepository>(TYPES.IOrderRepository).to(OrderRepository);
container.bind<OrderService>(TYPES.OrderService).to(OrderService);
container.bind<IPaymentProcessor>(TYPES.IPaymentProcessor).to(PayPalPaymentProcess);
container.bind<INotificationService>(TYPES.INotificationService).to(EmailNotifacationService);

export { container };