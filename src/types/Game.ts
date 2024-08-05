import { Level } from "./Level";

export interface Game {
  id: number;
  accountId: number;
  levelId: number;
  createdAt: string;
  updatedAt: string;
  level: Level;
}
