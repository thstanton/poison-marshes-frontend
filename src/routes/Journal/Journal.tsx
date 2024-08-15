import { useNavigate } from "react-router-dom";
import ActWaiting from "../../components/Journal/ActWaiting";
import HintModal from "../../components/Journal/HintModal";
import LevelDisplay from "../../components/Journal/LevelDisplay";
import SolutionEntry from "../../components/Journal/SolutionEntry";
import { useGame } from "../../hooks/useGame";
import { usePrevLevels } from "../../hooks/usePrevLevels";
import LevelNav from "../../components/Journal/LevelNav";

export default function Journal() {
  const { data: game } = useGame();
  const { data: prevLevels, isSuccess } = usePrevLevels();
  const navigate = useNavigate();

  return (
    <>
      {game && (
        <LevelNav
          sequence={game.level.sequence}
          actSequence={game.level.actSequence}
          prevHandler={
            isSuccess && prevLevels.length > 0
              ? () => navigate("/journal/levels")
              : undefined
          }
        />
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
    </>
  );
}
