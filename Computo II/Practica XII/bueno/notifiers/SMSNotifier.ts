import { INotifier } from "./INotifier.ts";

export class SMSNotifier implements INotifier {
  send(userName: string): void {
    console.log(`📱 Bienvenido ${userName}, gracias por registrarte por SMS.`);
  }
}
