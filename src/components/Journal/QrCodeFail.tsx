import Lottie from "lottie-react";
import StickyLabel from "../UI/StickyLabel";
import lockedAnimation from "../../assets/lotties/locked-animation.json";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function QrCodeFail() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/journal");
    }, 10000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="m-8">
      <StickyLabel>
        <h1>We weren't expecting you...</h1>
        <p className="font-special">
          Your quest has not taken you here, yet. Check your journal for
          instructions.
        </p>
        <Lottie className="w-60" animationData={lockedAnimation} loop={false} />
        <p className="font-sans text-lg font-normal text-red-500">
          Need a hint? Click the{" "}
          <span className="btn btn-circle border-none bg-red-500 font-rock text-white drop-shadow-xl">
            ?
          </span>{" "}
          button in your journal.
        </p>
      </StickyLabel>
    </div>
  );
}
