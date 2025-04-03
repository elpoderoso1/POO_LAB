import { injectable } from "inversify";

export interface INotificationService {
    sendNotification(message: string): void;
}

@injectable()
export class EmailNotifacationService implements INotificationService {
    sendNotification(message: string): void {
        console.log(`Enviando email: ${message}`);
    }
}