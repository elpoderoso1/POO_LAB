import { IPaymentStrategy } from "../interfaces/IPaymentStrategy";

export class PayPalPayment implements IPaymentStrategy {
    pay(amount: number): void {
        console.log(`Pagando $${amount} con PayPal.`);
    }
}