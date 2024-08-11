import { useMutation } from "@tanstack/react-query";
import { api } from "../../lib/axiosConfig";
import { useState } from "react";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";
import { useGame } from "../../hooks/useGame";
import { usePrevLevels } from "../../hooks/usePrevLevels";

export default function SolutionEntry() {
  const [solution, setSolution] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { refetch: refetchGame } = useGame();
  const { refetch: refetchLevels } = usePrevLevels();
  const navigate = useNavigate();

  const mutateGame = useMutation({
    mutationFn: async (solution: string) =>
      api.put("/games/advance-level", { solution }),
    onSuccess: () => {
      refetchGame();
      refetchLevels();
      navigate("/journal/level-up-success");
    },
    onError(error) {
      if (error instanceof AxiosError && error.response?.status === 422) {
        navigate("/journal/level-up-fail");
      } else {
        setError(error.message);
      }
    },
  });

  const handleSubmit = () => {
    const cleanSolution = solution.trim().toLowerCase();
    mutateGame.mutate(cleanSolution);
  };

  return (
    <div className="mt-4 rounded-lg border-2 border-solid border-stone-700 text-slate-900 drop-shadow">
      <div className="rounded-t-lg bg-green-700 p-4 text-center font-rock">
        <h2>Solution</h2>
      </div>
      <div className="flex flex-row gap-2 rounded-b-lg bg-green-200 p-4 font-special">
        <input
          className="input input-bordered w-full border-stone-700 bg-white"
          value={solution}
          onChange={(e) => setSolution(e.target.value)}
        />
        <button
          className="btn bg-green-700 font-rock text-white"
          disabled={mutateGame.isPending || !solution}
          onClick={handleSubmit}
        >
          Submit{" "}
          {mutateGame.isPending && <span className="loading-spinner"></span>}
        </button>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    </div>
  );
}
