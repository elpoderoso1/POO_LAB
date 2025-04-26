import { IPaymentStrategy } from "../interfaces/IPaymentStrategy"; 
import { CreditCardPayment } from "../strategies/CreditCardPayment"; 
import { PayPalPayment } from "../strategies/PayPalPayment"; 
import { CryptoPayment } from "../strategies/CryptoPayment"; 

export type PaymentType = "credit" | "paypal" | "crypto"; 

export class PaymentFactory { 
    static createStrategy(type: PaymentType): IPaymentStrategy { 
        switch (type) {
            case "credit": return new CreditCardPayment(); 
            case "paypal": return new PayPalPayment(); 
            case "crypto": return new CryptoPayment(); 
            default: 
                throw new Error("Método de pago no soportado.");
        }
    }
}