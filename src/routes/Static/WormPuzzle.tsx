import { AdvancedImage } from "@cloudinary/react";
import { cld } from "../../main";
import { CloudinaryImage } from "@cloudinary/url-gen/index";

export default function WormPuzzle() {
  const image = cld.image("PM_WF_orwell");

  return (
    <div className="bg-worm-puzzle-bg min-h-dvh bg-auto bg-fixed bg-repeat">
      <div className="">
        <Polaroid image={image} caption="23rd by Methodist" />
        <Polaroid image={image} caption="23rd by Methodist" />
        <Polaroid image={image} caption="23rd by Methodist" />
        <Polaroid image={image} caption="23rd by Methodist" />
      </div>
    </div>
  );
}

const Polaroid = ({
  image,
  caption,
}: {
  image: CloudinaryImage;
  caption: string;
}) => {
  const rotateDeg = Math.floor(Math.random() * 6);
  const rotateDir = Math.floor(Math.random() * 2) === 0 ? "" : "-";
  return (
    <div
      className={`relative min-w-20 max-w-80 bg-white p-6 drop-shadow-xl ${rotateDir}rotate-${rotateDeg}`}
    >
      <AdvancedImage cldImg={image} className="drop-shadow" />
      <p className="-rotate-2 pt-2 text-center font-rock">{caption}</p>
    </div>
  );
};
