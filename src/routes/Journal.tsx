import { useLoaderData } from "react-router";
import { Game } from "../types/Game";
import ActWaiting from "../components/ActWaiting";
import LevelDisplay from "../components/LevelDisplay";

export default function Journal() {
  const game = useLoaderData() as Game;
  return (
    <>
      <div className="mx-auto max-w-[800px] p-2">
        {game.level.act.inProgress ? (
          <LevelDisplay level={game.level} />
        ) : (
          <ActWaiting actMessage={game.level.act.preStartMessage} />
        )}
      </div>
    </>
  );
}
