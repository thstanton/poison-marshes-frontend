import Lottie from "lottie-react";
import StickyLabel from "../UI/StickyLabel";
import unlockAnimation from "../../assets/lotties/unlock-animation.json";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function LevelUpSuccess() {
  const { data: user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/journal");
    }, 6000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="mt-8">
      <StickyLabel>
        <h1 className="text-red-600">Well done, {user?.name}</h1>
        <p className="font-special">
          You are one step closer toward saving the village
        </p>
        <Lottie className="w-60" animationData={unlockAnimation} loop={false} />
      </StickyLabel>
    </div>
  );
}
