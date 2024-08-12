import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/axiosConfig";
import { Account } from "../types/Account";
import { AxiosError } from "axios";
import { refreshToken } from "../lib/tokenManager";

const fetchUser = async (): Promise<Account> => {
  try {
    const result = await api.get<Account>("/auth/is-logged-in");
    console.log(result);
    return result.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        try {
          await refreshToken();
          const result = await api.get<Account>("/auth/is-logged-in");
          return result.data;
        } catch (refreshError) {
          throw new Error(`Failed to refresh token: ${refreshError}`);
        }
      }
    }
    throw new Error("Failed to fetch user data");
  }
};

export const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    refetchOnWindowFocus: true,
  });
};
