import { PaymentFactory, PaymentType } from "./factories/PaymentFactory";
import { ValidatorFactory } from "./factories/ValidatorFactory";
import { PaymentProcessor } from "./services/PaymentProcessor";

const paymentMethods: PaymentType[] = ["credit", "paypal", "crypto"];

paymentMethods.forEach(method => {
    console.log("----------------------------------------------------------");
    console.log(`Método de pago: ${method.toUpperCase()}`);

    const strategy = PaymentFactory.createStrategy(method);
    const validator = ValidatorFactory.createValidator(method);
    const processor = new PaymentProcessor(strategy, validator);

    processor.process(8000);
});