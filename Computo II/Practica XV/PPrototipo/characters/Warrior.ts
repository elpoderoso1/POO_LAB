import { Character } from "./Character.ts";

export class Warrior implements Character {
  constructor(
    public name: string,
    public level: number,
    public equipment: string[]
  ) {}

  clone(): Warrior {
    return new Warrior(this.name, this.level, [...this.equipment]);
  }
}
