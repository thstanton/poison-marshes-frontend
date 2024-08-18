import { useState } from "react";
import { api } from "../../lib/axiosConfig";
import { Email } from "../../types/Email";
import { useAuth } from "../../contexts/useAuth";
import { useGame } from "../../hooks/useGame";

export default function HintModal({ hints }: { hints: string[] }) {
  const [index, setIndex] = useState(0);
  const [showHelpForm, setShowHelpForm] = useState(false);
  const { user } = useAuth();
  const { data: game } = useGame();
  const [requestHelpMessage, setRequestHelpMessage] = useState<
    string | undefined
  >();
  const [requestedHelpSuccess, setRequestedHelpSuccess] = useState(false);

  const handleSubmit = async () => {
    if (!requestHelpMessage) {
      return;
    }
    const response = await api.post<Email>("/api/email-single-user", {
      email: {
        to: "poisonmarshes@gmail.com",
        from: "Help Request Form <poison-marshes-support@cliki.in>",
        subject: `Help Request from ${user?.name}`,
        text: `${user?.name} (${user?.user.email}).\nLevel: ${game?.level.name} (Part ${game?.level.actSequence} Chapter ${game?.level.sequence})\nLevel solution: ${game?.level.solution}\n${requestHelpMessage}`,
        html: `<p>${user?.name} (${user?.user.email})</p><p>Level: ${game?.level.name} (Part ${game?.level.actSequence} Chapter ${game?.level.sequence})</p><p>Level solution: ${game?.level.solution}</p><p>${requestHelpMessage}</p>`,
      },
    });
    if (response.status === 201) {
      setRequestedHelpSuccess(true);
      setShowHelpForm(false);
    } else {
      console.error(response);
    }
  };

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
                onChange={(e) => setRequestHelpMessage(e.target.value)}
                value={requestHelpMessage}
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
              <button className="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
            )}
            <form method="dialog">
              <button className="btn btn-primary">Close</button>
            </form>
            {requestedHelpSuccess && (
              <p className="text-success">Help Request Submitted</p>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
