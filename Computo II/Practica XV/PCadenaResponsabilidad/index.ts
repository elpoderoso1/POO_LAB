import { Level1Support } from "./handlers/Level1Support.ts";
import { Level2Support } from "./handlers/Level2Support.ts";
import { Level3Support } from "./handlers/Level3Support.ts";

const level1 = new Level1Support();
const level2 = new Level2Support();
const level3 = new Level3Support();

// Crear cadena
level1.setNext(level2).setNext(level3);

// Probar peticiones
level1.handleRequest(1, "Restablecer contraseña");
level1.handleRequest(2, "Problema con la base de datos");
level1.handleRequest(3, "Servidor caído");
level1.handleRequest(4, "Incidente desconocido");

/*
Simular un sistema de soporte técnico donde cada nivel de soporte (Soporte Nivel 1, Nivel 2, y Nivel 3) decide si puede manejar un problema o lo pasa al siguiente.
*/