import { Printer } from "./Printer.ts";

export class ConsolePrinter implements Printer {
  print(text: string): void {
    console.log(`🖨️ Imprimiendo en consola: ${text}`);
  }
}
