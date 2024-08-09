import { useState } from "react";

export default function HintModal({ hints }: { hints: string[] }) {
  const [index, setIndex] = useState(0);
  const [showHelpForm, setShowHelpForm] = useState(false);

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
          {showHelpForm && (
            <form className="mt-4">
              <textarea
                className="textarea textarea-bordered w-full"
                rows={4}
                name="help"
                placeholder="Sorry to hear you got stuck! Type what you got stuck on here and we'll help you out!"
              />
            </form>
          )}
          <div className="modal-action">
            {index < hints.length - 1 ? (
              <button
                className="btn btn-primary"
                onClick={() => {
                  if (index < hints.length - 1) setIndex(index + 1);
                }}
              >
                Next
              </button>
            ) : !showHelpForm ? (
              <button
                className="btn btn-primary"
                onClick={() => setShowHelpForm(true)}
              >
                I'm Still Stuck, HELP!
              </button>
            ) : (
              <button className="btn btn-primary">Submit</button>
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
