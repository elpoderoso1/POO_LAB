import { INotifier } from "../interfaces/INotifier";
import { EmailNotifier } from "../strategies/EmailNotifier";
import { SMSNotifier } from "../strategies/SMSNotifier";
import { PushNotifier } from "../strategies/PushNotifier";

export type Channel = "email" | "sms" | "push";

export class NotifierFactory {
    static create(channel: Channel): INotifier {
        switch (channel) {
            case "email": return new EmailNotifier(); 
            case "sms": return new SMSNotifier(); 
            case "push": return new PushNotifier();
            default:
                throw new Error("Canal de notificacion no soportado")
        }
    }
}