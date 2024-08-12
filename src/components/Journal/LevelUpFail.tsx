import Lottie from "lottie-react";
import StickyLabel from "../UI/StickyLabel";
import lockedAnimation from "../../assets/lotties/locked-animation.json";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function LevelUpFail() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/journal");
    }, 7000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="mt-8 flex items-center justify-center">
      <StickyLabel>
        <h1 className="text-error">Incorrect Solution</h1>
        <p className="font-special">This door remains closed - for now...</p>
        <Lottie className="w-60" animationData={lockedAnimation} loop={false} />
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
      </StickyLabel>
    </div>
  );
}
