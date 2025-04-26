import { IPaymentStrategy } from "../interfaces/IPaymentStrategy"; 
import { IPaymentValidator } from "../interfaces/IPaymentValidator"; 
export class PaymentProcessor { 
    constructor( 
        private strategy: IPaymentStrategy, 
        private validator: IPaymentValidator 
    ) {}

    process(amount: number): void { 
        const errors = this.validator.validate(amount); 
        
        if (errors.lenght > 0) { 
            console.log("X Error en la validación del pago:"); 
            errors.forEach(e => console.log(" - " + e)); 
            return;
        }

        try { 
            console.log("Procesando pago ... "); 
            this.strategy.pay(amount); 
            console.log("Pago completado con éxito."); 
        } catch (error) { 
            console.log("* Ocurrió un error al procesar el pago *:", error); 
        } 
    } 
}