import { useGame } from "../../hooks/useGame";

export default function ActWaiting() {
  const { data: game } = useGame();
  return (
    <div className="flex max-w-[800px] flex-col items-center justify-center gap-4 rounded-lg bg-stone-200 p-4 text-slate-800">
      <span className="loading loading-ring loading-lg"></span>
      <h1 className="font-unica text-5xl font-bold text-slate-400">
        Waiting...
      </h1>
      <p>
        {game?.level.act.preStartMessage || "The game will continue soon..."}
      </p>
    </div>
  );
}
