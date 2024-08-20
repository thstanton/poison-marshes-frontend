import { AdvancedImage } from "@cloudinary/react";
import { cld } from "../../main";
import BackButton from "../../components/UI/BackButton";

export default function SpottersGuide() {
  const image = cld.image("Spotter_s_Guide_small_utlf4b");
  return (
    <div className="min-h-dvh bg-gray-300 bg-auto bg-fixed bg-repeat">
      <div className="p-8 text-center font-mono">
        <h1 className="text-5xl font-bold">WORMnet</h1>
        <h2 className="text-2xl">Connected @ 192.168.6.180 Secure</h2>
      </div>
      <div className="p-8">
        <AdvancedImage cldImg={image} />
      </div>
      <div className="flex justify-center py-12">
        <BackButton />
      </div>
    </div>
  );
}
