import Lottie from "lottie-react";
import StickyLabel from "../UI/StickyLabel";
import unlockAnimation from "../../assets/lotties/unlock-animation.json";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/useAuth";
import { useGame } from "../../hooks/useGame";
import { MdOutlineEmail } from "react-icons/md";

export default function LevelUpSuccess() {
  const { user } = useAuth();
  const { data: game } = useGame();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/journal");
    }, 6000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="mt-8 flex items-center justify-center">
      <StickyLabel>
        <h1 className="text-primary">Well done, {user?.name}</h1>
        <p className="font-special">
          You are one step closer toward saving the village
        </p>
        <Lottie className="w-60" animationData={unlockAnimation} loop={false} />
        {game?.level.email && game?.level.act.inProgress && (
          <div className="flex items-center gap-2 font-special text-lg">
            <MdOutlineEmail /> Check your email
          </div>
        )}
      </StickyLabel>
    </div>
  );
}
