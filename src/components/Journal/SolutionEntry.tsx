import { useState } from "react";
import { useLevelUpMutation } from "../../hooks/useLevelUpMutation";

export default function SolutionEntry() {
  const [solution, setSolution] = useState<string>("");
  const mutateGame = useLevelUpMutation();

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
      </div>
    </div>
  );
}
