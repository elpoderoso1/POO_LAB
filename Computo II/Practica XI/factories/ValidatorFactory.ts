import { INotificationValidator } from "../interfaces/INotificationValidator";
import { Channel } from "./NotifierFactory";
import { EmailValidator } from "../validators/EmailValidator";
import { SMSValidator } from "../validators/SMSValidator";
import { PushValidator } from "../validators/PushValidator";

export class ValidatorFactory {
    static create(channel: Channel): INotificationValidator {
        switch (channel) {
            case "email": return new EmailValidator(); 
            case "sms": return new SMSValidator(); 
            case "push": return new PushValidator();
            default:
                throw new Error("Canal de notificacion no soportado")
        }
    }
}