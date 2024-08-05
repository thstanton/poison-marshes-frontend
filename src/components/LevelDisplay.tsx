import SolutionEntry from "./SolutionEntry";
import { Level } from "../types/Level";

interface LevelDisplayProps {
  level: Level;
}

export default function LevelDisplay({ level }: LevelDisplayProps) {
  return (
    <>
      <div className="rounded-lg border-2 border-solid border-stone-700 drop-shadow">
        <div className="rounded-t-lg bg-stone-400 p-4 text-center font-rock text-2xl text-stone-700">
          <h1>{level.name}</h1>
        </div>
        <div className="min-h-32 rounded-b-lg bg-white p-4 font-special text-slate-900">
          <p>{level.flavourText}</p>
        </div>
      </div>
      <div className="mt-4 rounded-lg border-2 border-solid border-stone-700 text-slate-900 drop-shadow">
        <div className="rounded-t-lg bg-yellow-300 p-4 text-center font-rock">
          <h2>Task</h2>
        </div>
        <div className="min-h-32 rounded-b-lg bg-yellow-200 p-4 font-special">
          <p>{level.task}</p>
        </div>
      </div>
      {level.solution && <SolutionEntry />}
      <button className="btn btn-circle btn-lg absolute bottom-2 right-2 mt-4 border-none bg-red-500 font-rock text-2xl text-white drop-shadow-xl">
        ?
      </button>
    </>
  );
}
