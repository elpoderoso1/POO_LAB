import { SupportHandler } from "./SupportHandler.ts";

export class Level3Support extends SupportHandler {
  handleRequest(level: number, message: string): void {
    if (level === 3) {
      console.log(`🧠 Nivel 3 resolviendo: ${message}`);
    } else {
      super.handleRequest(level, message);
    }
  }
}
