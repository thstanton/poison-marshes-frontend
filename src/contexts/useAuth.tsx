import { Context, createContext, useContext } from "react";
import { useUser } from "../hooks/useUser";
import { Account } from "../types/Account";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextProps {
  user: Account | undefined;
  isLoading: boolean;
  isSuccess: boolean;
  refetch: () => void;
}

const AuthContext: Context<AuthContextProps | undefined> = createContext<
  AuthContextProps | undefined
>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { data: user, isLoading, isSuccess, refetch } = useUser();

  return (
    <AuthContext.Provider value={{ user, isLoading, isSuccess, refetch }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
