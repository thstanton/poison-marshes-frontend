import { Level } from "./Level";

export interface Game {
  id: number;
  accountId: number;
  levelId: number;
  createdAt: string;
  updatedAt: string;
  level: Level;
}

export interface GamesDashboardItem {
  id: number;
  accountId: number;
  levelId: number;
  createdAt: string;
  updatedAt: string;
  level: GamesDashboardLevelInfo;
  account: GamesDashboardAccountInfo;
}
interface GamesDashboardLevelInfo {
  sequence: number;
  actSequence: number;
  name: string;
}
interface GamesDashboardAccountInfo {
  name: string;
  user: GamesDashboardUserInfo;
}
interface GamesDashboardUserInfo {
  email: string;
}
