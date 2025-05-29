import { IUser } from "../interfaces/IUser.ts";

export class User implements IUser {
  constructor(public name: string) {}

  receiveMessage(from: string, message: string): void {
    console.log(`[${this.name}] 📩 Mensaje de ${from}: "${message}"`);
  }
}
