import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/axiosConfig";
import { GamesDashboardItem } from "../types/Game";

const fetchGames = async () => {
  try {
    const result = await api.get<GamesDashboardItem[]>("/games");
    return result.data;
  } catch (error) {
    throw new Error("Failed to fetch game data");
  }
};

export default function useGamesDashboard() {
  return useQuery({ queryKey: ["games"], queryFn: fetchGames });
}
