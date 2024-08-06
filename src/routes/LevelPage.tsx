import LevelDisplay from "../components/LevelDisplay";
import LoadingIndicator from "../components/LoadingIndicator";
import { useLevels } from "../hooks/useLevel";
import { useState } from "react";

export default function LevelPage() {
  const [index, setIndex] = useState(0);
  const { data: levels, isLoading, error } = useLevels();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (levels) {
    return (
      <>
        <div className="my-3 flex justify-between font-rock">
          {index > 0 && (
            <button
              className="btn btn-outline"
              onClick={() => setIndex(index - 1)}
            >
              Prev
            </button>
          )}
          {index < levels?.length - 1 && (
            <button
              className="btn btn-outline"
              onClick={() => setIndex(index + 1)}
            >
              Next
            </button>
          )}
        </div>
        <LevelDisplay level={levels[index]} />
      </>
    );
  }
}
