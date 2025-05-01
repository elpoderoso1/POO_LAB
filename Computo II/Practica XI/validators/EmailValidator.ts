import { INotificationValidator } from "../interfaces/INotificationValidator";

export class EmailValidator implements INotificationValidator {
    validate(message: string): string[] {
        const errors = [];
        if (!message.includes("@")) errors.push("El mensaje debe incluir un correo.");
        return errors;
    }
}