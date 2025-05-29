import { SupportHandler } from "./SupportHandler.ts";

export class Level2Support extends SupportHandler {
  handleRequest(level: number, message: string): void {
    if (level === 2) {
      console.log(`🧪 Nivel 2 resolviendo: ${message}`);
    } else {
      super.handleRequest(level, message);
    }
  }
}
