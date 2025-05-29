export abstract class SupportHandler {
  protected nextHandler: SupportHandler | null = null;

  setNext(handler: SupportHandler): SupportHandler {
    this.nextHandler = handler;
    return handler;
  }

  handleRequest(level: number, message: string): void {
    if (this.nextHandler) {
      this.nextHandler.handleRequest(level, message);
    } else {
      console.log("❌ No hay un nivel de soporte disponible para este problema.");
    }
  }
}
