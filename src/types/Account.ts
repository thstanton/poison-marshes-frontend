export interface AccountCreateDto {
  email: string;
  name: string;
  password: string;
}

export interface LoginDetails {
  email: string;
  password: string;
}

export interface AccountWithUserWithoutPassword {
  user: {
    id: number;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    confirmed: boolean;
    accountId: number | null;
  };
  name: string;
  id: number;
  isAdmin: boolean;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}
