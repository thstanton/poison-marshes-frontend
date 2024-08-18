import { AdvancedImage } from "@cloudinary/react";
import { cld } from "../../main";

export default function WormRiddle() {
  const image = cld.image("PM_A1_S4_xdrceu");
  return (
    <div className="min-h-dvh bg-worm-puzzle-bg bg-auto bg-fixed bg-repeat">
      <AdvancedImage cldImg={image} />
    </div>
  );
}
