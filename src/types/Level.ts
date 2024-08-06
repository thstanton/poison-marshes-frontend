import { Act } from "./Act";

export interface Level {
  id: number;
  sequence: number;
  name: string;
  flavourText: string;
  task: string;
  solution?: string;
  hints: string[];
  videoId?: string;
  createdAt: string;
  updatedAt: string;
  actSequence: number;
  act: Act;
}
