import { Mage } from "./characters/Mage.ts";
import { Warrior } from "./characters/Warrior.ts";

const originalMage = new Mage("Gandalf", 50, ["Bastón", "Túnica"]);
const originalWarrior = new Warrior("Aragorn", 45, ["Espada", "Escudo"]);

const mageClone = originalMage.clone();
mageClone.name = "Radagast";
mageClone.equipment.push("Sombrero mágico");

const warriorClone = originalWarrior.clone();
warriorClone.name = "Boromir";
warriorClone.level = 40;

console.log("Original Mage:", originalMage);
console.log("Clon Mage:", mageClone);

console.log("Original Warrior:", originalWarrior);
console.log("Clon Warrior:", warriorClone);
