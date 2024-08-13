import { Game } from "./Game";
import { User } from "./User";

export interface AccountCreateDto {
  email: string;
  name: string;
  password: string;
}

export interface LoginDetails {
  email: string;
  password: string;
}

export interface Account {
  user: User;
  game?: Game;
  name: string;
  id: number;
  isAdmin: boolean;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}
