import { IPaymentValidator } from "../interfaces/IPaymentValidator";

export class CreditCardValidator implements IPaymentValidator {
    validate(amount: number): string[] {
        const errors = [];
        if (amount <= 0) errors.push("El monto debe ser mayor a cero.");
        if (amount > 5000) errors.push("Límite de tarjeta: máximo $5000.");
        return errors;
    }
}