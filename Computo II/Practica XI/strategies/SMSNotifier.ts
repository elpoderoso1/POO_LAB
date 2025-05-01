import { INotifier } from "../interfaces/INotifier";

export class SMSNotifier implements INotifier {
    send(message: string): void {
        console.log(`SMS enviado: ${message}`);
    }
}