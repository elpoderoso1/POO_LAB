import { Printer } from "../printers/Printer.ts";
import { ExternalPrintService } from "../external/ExternalPrintService.ts";

export class ExternalPrinterAdapter implements Printer {
  private externalService: ExternalPrintService;

  constructor(externalService: ExternalPrintService) {
    this.externalService = externalService;
  }

  print(text: string): void {
    // Adaptamos el método 'print' al método 'sendToPrinter' del externo
    this.externalService.sendToPrinter(text);
  }
}
