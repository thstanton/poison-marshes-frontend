import { Act } from "./Act";

export interface Level {
  id: number;
  sequence: number;
  name: string;
  flavourText: string;
  task: string;
  solution: null;
  hints: string[];
  videoUrl: null;
  createdAt: string;
  updatedAt: string;
  actSequence: number;
  act: Act;
}
