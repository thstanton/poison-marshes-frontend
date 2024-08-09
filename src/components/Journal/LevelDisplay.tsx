import { Level } from "../../types/Level";
import { Link } from "react-router-dom";

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
        <div className="flex min-h-32 flex-col items-center justify-between rounded-b-lg bg-white p-4 font-special text-slate-900">
          <p>{level.flavourText}</p>
          {level.videoId && (
            <Link
              to={`/journal/video?vidId=${level.videoId}&title=${level.name}`}
              className="btn btn-outline"
            >
              Watch Video
            </Link>
          )}
        </div>
      </div>
      <div className="mt-4 rounded-lg border-2 border-solid border-stone-700 text-slate-900 drop-shadow">
        <div className="rounded-t-lg bg-yellow-300 p-4 text-center font-rock">
          <h2>Task</h2>
        </div>
        <div className="min-h-32 rounded-b-lg bg-yellow-200 p-4 font-special">
          <p>
            {level.task}
            <span className="animate-blink font-bold">_</span>
          </p>
        </div>
      </div>
    </>
  );
}
