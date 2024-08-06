export interface User {
  id: number;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  confirmed: boolean;
  accountId: number | null;
}
