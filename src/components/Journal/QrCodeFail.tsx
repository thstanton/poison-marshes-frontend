import Lottie from "lottie-react";
import StickyLabel from "../UI/StickyLabel";
import lockedAnimation from "../../assets/lotties/locked-animation.json";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import HintPrompt from "./HintPrompt";

export default function QrCodeFail() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/journal");
    }, 10000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="mt-8 flex items-center justify-center">
      <StickyLabel>
        <h1 className="text-info">We weren't expecting you...</h1>
        <p className="font-special">
          Your quest has not taken you here, yet. Check your journal for
          instructions.
        </p>
        <Lottie className="w-60" animationData={lockedAnimation} loop={false} />
        <HintPrompt />
      </StickyLabel>
    </div>
  );
}
