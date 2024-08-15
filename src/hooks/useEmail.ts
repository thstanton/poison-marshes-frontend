import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/axiosConfig";
import { Email } from "../types/Email";

const fetchEmail = async (emailId: number) => {
  try {
    const response = await api.get<Email>(`/levels/email/${emailId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch email data");
  }
};

export const useEmail = (emailId: number) => {
  return useQuery({
    queryKey: ["email", emailId],
    queryFn: () => fetchEmail(emailId),
  });
};
