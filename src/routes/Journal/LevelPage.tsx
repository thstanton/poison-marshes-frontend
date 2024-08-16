import LevelDisplay from "../../components/Journal/LevelDisplay";
import LoadingIndicator from "../../components/UI/LoadingIndicator";
import { useState } from "react";
import { usePrevLevels } from "../../hooks/usePrevLevels";
import StickyLabel from "../../components/UI/StickyLabel";
import { useNavigate } from "react-router";
import LevelNav from "../../components/Journal/LevelNav";

export default function LevelPage() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const {
    data: completedLevels,
    isLoading,
    error,
    isSuccess,
  } = usePrevLevels();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isSuccess && completedLevels.length <= 0) {
    return <StickyLabel>Your journey has just begun</StickyLabel>;
  }

  if (isSuccess) {
    return (
      <>
        <LevelNav
          sequence={completedLevels[index].sequence}
          actSequence={completedLevels[index].actSequence}
          prevHandler={
            index < completedLevels?.length - 1
              ? () => setIndex(index + 1)
              : undefined
          }
          nextHandler={
            index > 0 ? () => setIndex(index - 1) : () => navigate("/journal")
          }
        />
        <LevelDisplay level={completedLevels[index]} complete={true} />
      </>
    );
  }
}
