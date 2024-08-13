import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/axiosConfig";
import { Game } from "../types/Game";

const fetchGame = async () => {
  try {
    const result = await api.get<Game>("/games/current");
    return result.data;
  } catch (error) {
    throw new Error("Failed to fetch game data");
  }
};

export const useGame = () => {
  return useQuery({ queryKey: ["game"], queryFn: fetchGame });
};
