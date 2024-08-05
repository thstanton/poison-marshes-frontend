import { UserContext } from "./UserContext";
import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "../lib/axiosConfig";
import { AccountWithUserWithoutPassword } from "../types/Account";

interface UserProviderProps {
  children: React.ReactNode;
}

export default function UserProvider({ children }: UserProviderProps) {
  const {
    data,
    refetch: refetchUser,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["account"],
    queryFn: async () => {
      try {
        const result =
          await api.get<AccountWithUserWithoutPassword>("/auth/is-logged-in");
        return result.data;
      } catch (error) {
        throw new Error("Failed to fetch user data");
      }
    },
    staleTime: 5 * 60 * 1000,
  });

  const refreshTokens = useMutation({
    mutationFn: () => {
      return api.get("/auth/refresh");
    },
    onSuccess() {
      refetchUser();
    },
    onError(error) {
      console.error(error);
    },
  });

  const user: AccountWithUserWithoutPassword | null = data ?? null;

  return (
    <UserContext.Provider
      value={{ user, setUser: () => {}, refreshTokens, isLoading, error }}
    >
      {children}
    </UserContext.Provider>
  );
}
