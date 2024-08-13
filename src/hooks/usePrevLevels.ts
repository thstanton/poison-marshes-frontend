import { useQuery } from "@tanstack/react-query";
import { Level } from "../types/Level";
import { api } from "../lib/axiosConfig";
import { Game } from "../types/Game";

export const usePrevLevels = () => {
  const { data: gameData } = useQuery({
    queryKey: ["game"],
    queryFn: async (): Promise<Game> => {
      const response = await api.get("/game");
      return response.data;
    },
  });
  const levelId = gameData?.level.id;

  return useQuery({
    queryKey: ["completedLevels", levelId],
    queryFn: async (): Promise<Level[]> => {
      const response = await api.get(`/levels/completed/${levelId}`);
      return response.data;
    },
    enabled: !!levelId,
  });
};
