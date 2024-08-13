import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "../lib/axiosConfig";
import { useGame } from "./useGame";
import { usePrevLevels } from "./usePrevLevels";
import { useNavigate } from "react-router";

export const useLevelUpMutation = (mode?: "qrCode" | "journal") => {
  const { refetch: refetchGame } = useGame();
  const { refetch: refetchLevels } = usePrevLevels();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (solution: string) =>
      api.put("/games/advance-level", { solution }),
    onSuccess: () => {
      refetchGame();
      refetchLevels();
      navigate("/journal/level-up-success");
    },
    onError(error) {
      if (error instanceof AxiosError && error.response?.status === 422) {
        if (mode === "qrCode") {
          navigate("/journal/qr-code-fail");
        } else {
          navigate("/journal/level-up-fail");
        }
      }
    },
  });
};
