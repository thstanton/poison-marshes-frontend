import { Context, createContext, useContext } from "react";
import { useUser } from "../hooks/useUser";
import { Account, LoginDetails } from "../types/Account";
import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "../lib/axiosConfig";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextProps {
  user: Account | undefined;
  isLoading: boolean;
  isSuccess: boolean;
  refetch: () => void;
  login: UseMutateFunction<Account, Error, LoginDetails, unknown>;
}

const AuthContext: Context<AuthContextProps | undefined> = createContext<
  AuthContextProps | undefined
>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { data: user, isLoading, isSuccess, refetch } = useUser();
  const queryClient = useQueryClient();

  const { mutate: login } = useMutation({
    mutationFn: (loginDetails: LoginDetails) => {
      return api.post<LoginDetails, Account>("/auth/login", loginDetails);
    },
    onSuccess(data) {
      queryClient.setQueryData(["user"], data);
    },
    onError(error) {
      if (error instanceof AxiosError) {
        return error.response?.data.message;
      }
    },
  });

  return (
    <AuthContext.Provider
      value={{ user, isLoading, isSuccess, refetch, login }}
    >
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
