import LevelDisplay from "../../components/Journal/LevelDisplay";
import LoadingIndicator from "../../components/UI/LoadingIndicator";
import { useState } from "react";
import { usePrevLevels } from "../../hooks/usePrevLevels";
import StickyLabel from "../../components/UI/StickyLabel";
import { useNavigate } from "react-router";

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
        <div className="my-3 flex justify-between text-left">
          <div className="w-full">
            {index < completedLevels?.length - 1 && (
              <button
                className="btn btn-sm"
                onClick={() => setIndex(index + 1)}
              >
                {"<"} Prev
              </button>
            )}
          </div>
          <div className="w-full text-right">
            {index > 0 ? (
              <button
                className="btn btn-sm"
                onClick={() => setIndex(index - 1)}
              >
                Next {">"}
              </button>
            ) : (
              <button
                className="btn btn-sm"
                onClick={() => navigate("/journal")}
              >
                Next {">"}
              </button>
            )}
          </div>
        </div>
        <LevelDisplay level={completedLevels[index]} complete={true} />
      </>
    );
  }
}
