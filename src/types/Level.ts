import { Act } from "./Act";
import { Email } from "./Email";

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
  email?: Email;
}
