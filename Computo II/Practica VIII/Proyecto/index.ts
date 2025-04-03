import "reflect-metadata";
import { container } from "./config/inversify.config";
import { TYPES } from "../types/types";
import { Product } from "./models/Product";
import { Customer } from "./models/Customer";
import { Order } from "./models/Order";
import { OrderService } from "../services/OrderService";
import { IPaymentProcessor } from "../services/PaymentService";
import { INotificationService } from "./services/Emailservice";

const product1 = new Product(1, "Laptop", 1200);
const product2 = new Product(2, "Mouse", 50);

const customer = new Customer(1, "Juan Pérez", "juanitoelpro@gmail.com");

const order = new Order(1, customer, [product1, product2], product1.price + product2.price);

const orderService = container.get<OrderService>(TYPES.OrderService);
const paymentProcessor = container.get<IPaymentProcessor>(TYPES.IPaymentProcessor);
const notificationService = container.get<INotificationService>(TYPES.INotificationService);

orderService.placeOrder(order);
paymentProcessor.processPayment(order.total);
notificationService.sendNotification(`Pedido #${order.id} confirmado para ${customer.name}`);