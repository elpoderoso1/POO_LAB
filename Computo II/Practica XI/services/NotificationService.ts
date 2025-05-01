import { INotifier } from "../interfaces/INotifier";
import { INotificationValidator } from "../interfaces/INotificationValidator";

export class NotificationService {
    constructor(
        private notifier: INotifier,
        private validator: INotificationValidator
    ) {}

    notify(message: string): void {
        const errors = this.validator.validate(message);

        if (errors.length > 0) {
            console.log("Errores en la validacion");
            errors.forEach(e => 
                console.log(" - ", e)
            );
            return;
        }

        try {
            this.notifier.send(message);
            console.log("Notificacion enviada con exito");
        } catch (error) {
            console.log(`Ha ocurrido un error: ${error}`);
        }
    }
}