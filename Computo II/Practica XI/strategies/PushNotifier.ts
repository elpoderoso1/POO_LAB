import { INotifier } from "../interfaces/INotifier";

export class PushNotifier implements INotifier {
    send(message: string): void {
        console.log(`Push Notification enviado: ${message}`);
    }
}