import { INotificationValidator } from "../interfaces/INotificationValidator";

export class PushValidator implements INotificationValidator {
    validate(message: string): string[] {
        const errors = [];
        if (!message.trim()) errors.push("El mensaje no puede estar vacio.");
        return errors;
    }
}
