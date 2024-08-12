import Lottie from "lottie-react";
import LoginForm from "../../components/Public/LoginForm";
import { useLevelUpMutation } from "../../hooks/useLevelUpMutation";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import progressBar from "../../assets/lotties/progress-bar.json";
import { useAuth } from "../../contexts/useAuth";
import StickyLabel from "../../components/UI/StickyLabel";

export default function QrCodes() {
  const { user, isLoading } = useAuth();
  const [searchParams] = useSearchParams();
  const solution = searchParams.get("solution");

  const mutateGame = useLevelUpMutation("qrCode");

  useEffect(() => {
    if (!solution) throw new Error("Nothing to see here...");
    const timer = setTimeout(() => {
      if (user && solution) {
        mutateGame.mutate(solution);
      }
    }, 6000);

    return () => clearTimeout(timer);
  }, [user, mutateGame, solution]);

  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-4 p-4">
      <h1 className="pb-2 text-center font-unica text-8xl font-bold text-stone-300/20 drop-shadow">
        The Poison Marshes
      </h1>
      {!user && (
        <>
          <h1 className="text-center text-xl">
            You could be onto something...but we need you to log in first.
          </h1>
          <StickyLabel>
            <LoginForm qrCode />
          </StickyLabel>
        </>
      )}
      {isLoading && <span className="loading-dots"></span>}
      {user && (
        <div className="flex flex-col items-center justify-between gap-4">
          <h2 className="text-center font-special text-3xl">
            You found something!
          </h2>
          <h1 className="animate-pulse text-center font-rock text-8xl text-black">
            {solution}
          </h1>
          <h2 className="mt-3 text-center text-3xl">Running some tests...</h2>
          <Lottie
            animationData={progressBar}
            // loop={false}
            className="-z-10 h-96 w-full"
          />
        </div>
      )}
    </div>
  );
}
