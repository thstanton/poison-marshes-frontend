import { useState } from "react";

export default function HintModal({ hints }: { hints: string[] }) {
  const [index, setIndex] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          const modal = document.getElementById(
            "hint_modal",
          ) as HTMLDialogElement;
          modal.showModal();
        }}
        className="btn btn-circle btn-lg absolute bottom-2 right-2 mt-4 border-none bg-red-500 font-rock text-2xl text-white drop-shadow-xl"
      >
        ?
      </button>
      <dialog id="hint_modal" className="modal">
        <div className="modal-box">
          <h3 className="mb-2 text-center font-rock text-lg">
            Hint {index + 1} of {hints.length}
          </h3>
          <p className="font-special">{hints[index]}</p>
          <div className="modal-action">
            {index < hints.length - 1 && (
              <button
                className="btn btn-primary"
                onClick={() => {
                  if (index < hints.length - 1) setIndex(index + 1);
                }}
              >
                Next
              </button>
            )}
            <form method="dialog">
              <button className="btn btn-primary">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
