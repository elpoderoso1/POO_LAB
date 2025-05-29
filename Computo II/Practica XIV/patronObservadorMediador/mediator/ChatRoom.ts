import { IUser } from "../interfaces/IUser.ts";

export class ChatRoom {
  private users: IUser[] = [];

  register(user: IUser): void {
    this.users.push(user);
  }

  sendMessage(from: string, message: string): void {
    console.log(`\n💬 ${from} dice: "${message}"`);

    this.users.forEach(user => {
      if ((user as any).name !== from) {
        user.receiveMessage(from, message);
      }
    });
  }
}
