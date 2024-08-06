import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/axiosConfig";
import { Level } from "../types/Level";

const fetchLevels = async () => {
  try {
    const result = await api.get<Level[]>("/levels/current/all");
    return result.data;
  } catch (error) {
    throw new Error("Failed to fetch level data");
  }
};

export const useLevels = () => {
  return useQuery({ queryKey: ["levels"], queryFn: fetchLevels });
};
