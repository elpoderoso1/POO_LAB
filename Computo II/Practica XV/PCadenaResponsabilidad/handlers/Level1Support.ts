import { SupportHandler } from "./SupportHandler.ts";

export class Level1Support extends SupportHandler {
  handleRequest(level: number, message: string): void {
    if (level === 1) {
      console.log(`🧰 Nivel 1 resolviendo: ${message}`);
    } else {
      super.handleRequest(level, message);
    }
  }
}
