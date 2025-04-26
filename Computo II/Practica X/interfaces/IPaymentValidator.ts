export interface IPaymentValidator {
    validate(amount: number): void;
}