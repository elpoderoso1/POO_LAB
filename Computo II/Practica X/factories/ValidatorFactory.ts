import { PaymentType } from "./PaymentFactory";
import { IPaymentValidator } from "../interfaces/IPaymentValidator";
import { CreditCardValidator } from "../validators/CreditCardValidator";
import { PayPalValidator } from "../validators/PayPalValidator";
import { CryptoValidator } from "../validators/CryptoValidator";

export class ValidatorFactory {
    static createValidator(type: PaymentType): IPaymentValidator {
        switch (type) {
            case "credit": return new CreditCardValidator();
            case "paypal": return new PayPalValidator();
            case "crypto": return new CryptoValidator();
            default:
                throw new Error("Método de validación no soportada.")
        }
    }
}