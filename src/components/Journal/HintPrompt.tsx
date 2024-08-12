export default function HintPrompt() {
  return (
    <div className="font-mono text-sm font-normal text-error-content md:text-base">
      <p className="mb-2 font-bold text-error">Need a hint? </p>
      <p>
        Click the{" "}
        <span className="btn btn-circle btn-sm border-none bg-red-500 font-rock text-white drop-shadow-xl md:btn-md">
          ?
        </span>{" "}
        button in your journal.
      </p>
    </div>
  );
}
