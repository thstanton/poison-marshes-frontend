import { AdvancedImage } from "@cloudinary/react";
import { cld } from "../../main";
import { CloudinaryImage } from "@cloudinary/url-gen/index";
import BackButton from "../../components/UI/BackButton";

export default function WormPuzzle() {
  const image1 = cld.image("PM_A1S2_puzzle_2_zh65au");
  const image2 = cld.image("PM_A1S2_puzzle_3_b5gptd");
  const image3 = cld.image("PM_A1S2_puzzle_4_mq8rdd");
  const image4 = cld.image("PM_A1S2_puzzle_1_ulmska");
  const fullImage = cld.image("PM_A1S2_puzzle_all_j31tgr");

  return (
    <div className="min-h-dvh bg-worm-puzzle-bg bg-auto bg-fixed bg-repeat">
      <div className="p-12 drop-shadow-lg">
        <AdvancedImage cldImg={fullImage} />
      </div>
      <div className="flex w-full flex-col flex-wrap items-center justify-center gap-4 md:flex-row">
        <Polaroid image={image1} caption="Methodist" />
        <Polaroid image={image2} caption="Scout Hut" />
        <Polaroid image={image3} caption="Garage" />
        <Polaroid image={image4} caption="Village Hall" />
      </div>
      <BackButton />
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
  return (
    <div
      className={`relative m-2 w-full min-w-20 max-w-80 rotate-2 bg-white p-6 drop-shadow-xl md:w-1/2`}
    >
      <AdvancedImage cldImg={image} className="drop-shadow" />
      <p className="-rotate-2 pt-2 text-center font-rock">{caption}</p>
    </div>
  );
};
