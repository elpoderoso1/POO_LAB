import { IPaymentStrategy } from "../interfaces/IPaymentStrategy";

export class CreditCardPayment implements IPaymentStrategy {
    pay(amount: number): void {
        console.log(`Pagando $${amount} con tarjeta de crédito.`);
    }
}