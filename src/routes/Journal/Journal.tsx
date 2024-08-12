import { Link } from "react-router-dom";
import ActWaiting from "../../components/Journal/ActWaiting";
import HintModal from "../../components/Journal/HintModal";
import LevelDisplay from "../../components/Journal/LevelDisplay";
import SolutionEntry from "../../components/Journal/SolutionEntry";
import { useGame } from "../../hooks/useGame";
import { usePrevLevels } from "../../hooks/usePrevLevels";

export default function Journal() {
  const { data: game } = useGame();
  const { data: prevLevels, isSuccess } = usePrevLevels();

  return (
    <>
      <div className="mx-auto max-w-[800px] p-2">
        {isSuccess && prevLevels.length > 0 && (
          <Link to="/journal/levels" className="btn btn-sm mb-3">
            {"<"} Prev
          </Link>
        )}
        {game?.level.act.inProgress ? (
          <>
            <LevelDisplay level={game?.level} />
            {game?.level.solution && <SolutionEntry />}
            <HintModal hints={game?.level.hints} />
          </>
        ) : (
          <ActWaiting />
        )}
      </div>
    </>
  );
}
