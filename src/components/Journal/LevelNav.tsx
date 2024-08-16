interface LevelNavProps {
  prevHandler?: React.MouseEventHandler<HTMLButtonElement>;
  nextHandler?: React.MouseEventHandler<HTMLButtonElement>;
  sequence: number;
  actSequence: number;
}

export default function LevelNav({
  prevHandler,
  nextHandler,
  sequence,
  actSequence,
}: LevelNavProps) {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex-1">
        {prevHandler && (
          <button onClick={prevHandler} className="btn btn-sm mb-3">
            {"<"} Prev
          </button>
        )}
      </div>
      <div className="mb-3 flex-1 p-2 text-center font-unica text-xl tracking-widest text-white">
        Part {actSequence} | Chapter {sequence}
      </div>
      <div className="flex-1 text-right">
        {nextHandler && (
          <button onClick={nextHandler} className="btn btn-sm mb-3">
            Next {">"}
          </button>
        )}
      </div>
    </div>
  );
}
