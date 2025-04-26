import { IPaymentValidator } from "../interfaces/IPaymentValidator";

export class CryptoValidator implements IPaymentValidator {
    validate(amount: number): string[] {
        const errors = [];
        if (amount < 10) errors.push("Monto mínimo de cripto: $10.");
        return errors;
    }
}