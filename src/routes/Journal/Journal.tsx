import ActWaiting from "../../components/Journal/ActWaiting";
import HintModal from "../../components/Journal/HintModal";
import LevelDisplay from "../../components/Journal/LevelDisplay";
import SolutionEntry from "../../components/Journal/SolutionEntry";
import { useGame } from "../../hooks/useGame";

export default function Journal() {
  const { data: game } = useGame();
  return (
    <>
      <div className="mx-auto max-w-[800px] p-2">
        {game?.level.act.inProgress ? (
          <>
            <LevelDisplay level={game?.level} />
            {game?.level.solution && <SolutionEntry />}
            <HintModal hints={game?.level.hints} />
          </>
        ) : (
          <ActWaiting actMessage={game?.level.act.preStartMessage} />
        )}
      </div>
    </>
  );
}
