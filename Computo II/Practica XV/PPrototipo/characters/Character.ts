export interface Character {
  name: string;
  level: number;
  equipment: string[];

  clone(): Character;
}
