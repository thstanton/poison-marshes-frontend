import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/axiosConfig";

export interface GamesDashboardItem {
  id: number;
  accountId: number;
  levelId: number;
  createdAt: string;
  updatedAt: string;
  level: GamesDashboardLevelInfo;
  account: GamesDashboardAccountInfo;
}
interface GamesDashboardLevelInfo {
  sequence: number;
  actSequence: number;
  name: string;
}
interface GamesDashboardAccountInfo {
  name: string;
  user: GamesDashboardUserInfo;
}
interface GamesDashboardUserInfo {
  email: string;
}

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
