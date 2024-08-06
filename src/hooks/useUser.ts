import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/axiosConfig";
import { Account } from "../types/Account";

const fetchUser = async (): Promise<Account> => {
  try {
    const result = await api.get<Account>("/auth/is-logged-in");
    return result.data;
  } catch (error) {
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
