import { Character } from "./Character.ts";

export class Mage implements Character {
  constructor(
    public name: string,
    public level: number,
    public equipment: string[]
  ) {}

  clone(): Mage {
    return new Mage(this.name, this.level, [...this.equipment]);
  }
}
