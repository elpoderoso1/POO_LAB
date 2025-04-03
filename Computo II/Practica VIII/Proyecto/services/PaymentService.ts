import { injectable } from "inversify";

export interface IPaymentProcessor {
    processPayment(amount: number): void;
}

@injectable()
export class PayPalPaymentProcess implements IPaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Pago procesado con PayPal: $${amount}`);
    }
}

@injectable()
export class CreditCardPaymentProcessor implements IPaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Pago procesado con Tarjeta de Credito: $${amount}`);
    }
}