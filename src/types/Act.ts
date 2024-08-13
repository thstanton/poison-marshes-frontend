export interface Act {
  id: number;
  sequence: number;
  name: string;
  startDate: string;
  inProgress: boolean;
  preStartMessage?: string;
}
