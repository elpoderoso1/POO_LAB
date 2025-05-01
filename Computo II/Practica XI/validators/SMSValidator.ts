import { INotificationValidator } from "../interfaces/INotificationValidator";

export class SMSValidator implements INotificationValidator {
    validate(message: string): string[] {
        const errors = [];
        if (message.length > 160) errors.push("El mensaje SMS no debe excederse de 160 caracteres.");
        return errors;
    }
}