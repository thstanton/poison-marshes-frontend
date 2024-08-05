import { UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { createContext, useContext } from "react";
import { AccountWithUserWithoutPassword } from "../types/Account";

interface UserContextType {
  user: AccountWithUserWithoutPassword | null;
  setUser: (user: AccountWithUserWithoutPassword | null) => void;
  refreshTokens: UseMutationResult<
    AxiosResponse<{ account: AccountWithUserWithoutPassword }>,
    Error,
    void,
    unknown
  >;
  isLoading: boolean;
  error: Error | null;
}

export const UserContext = createContext<UserContextType | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
