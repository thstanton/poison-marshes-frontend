import { useState } from "react";
import { UserContext } from "./UserContext";
import { AccountWithUserWithoutPassword } from "../types/Account";

interface UserProviderProps {
  children: React.ReactNode;
}

export interface UserContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  user: AccountWithUserWithoutPassword | null;
  setUser: React.Dispatch<
    React.SetStateAction<AccountWithUserWithoutPassword | null>
  >;
}

export default function UserProvider({ children }: UserProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<AccountWithUserWithoutPassword | null>(null);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
