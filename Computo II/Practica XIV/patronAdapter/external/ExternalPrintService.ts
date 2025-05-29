export class ExternalPrintService {
  sendToPrinter(content: string): void {
    console.log(`📡 [EXTERNO] Enviando a impresora externa: ${content}`);
  }
}
