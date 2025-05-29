export interface IUser {
  receiveMessage(from: string, message: string): void;
}