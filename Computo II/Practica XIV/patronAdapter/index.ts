/*
Objetivo de la práctica:
Aprender a adaptar interfaces incompatibles sin modificar el código original, aplicando el Patrón de Diseño Adapter en un caso realista.

Contexto teórico breve:
El Patrón Adapter permite que clases con interfaces incompatibles trabajen juntas. Es como un "puente" que traduce una interfaz esperada hacia otra existente.

📦 Útil cuando necesitas integrar una API externa o librería antigua con tu sistema moderno.


Caso de práctica: Servicio de impresión
Tienes un sistema que usa una interfaz Printer con un método print(text: string), pero un proveedor externo te entrega una clase con un método diferente: sendToPrinter(content: string).

El objetivo es usar ese proveedor sin modificar su código.

    printers/Printer.ts                 ← Interfaz esperada
├── printers/ConsolePrinter.ts          ← Implementación nativa
├── external/ExternalPrintService.ts    ← Servicio externo con interfaz distinta
├── adapters/ExternalPrinterAdapter.ts  ← Adaptador
└── index.ts                            ← Uso y pruebas
*/
import { ConsolePrinter } from "./printers/ConsolePrinter.ts";
import { ExternalPrintService } from "./external/ExternalPrintService.ts";
import { ExternalPrinterAdapter } from "./adapters/ExternalPrinterAdapter.ts";

const consolePrinter = new ConsolePrinter();
consolePrinter.print("Factura de compra #123");

console.log("\n--- Usando adaptador para impresora externa ---\n");

const externalService = new ExternalPrintService();
const adapter = new ExternalPrinterAdapter(externalService);
adapter.print("Factura de compra #123");
