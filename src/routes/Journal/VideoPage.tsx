import { useSearchParams } from "react-router-dom";
import YouTube from "react-youtube";
import BackButton from "../../components/UI/BackButton";

export default function VideoPage() {
  const [searchParams] = useSearchParams();
  const vidId = searchParams.get("vidId");
  const title = searchParams.get("title");

  return (
    <div className="mx-4 flex h-full flex-col items-center justify-between gap-8">
      <h1 className="font-unica text-5xl text-stone-400">{title}</h1>
      <div className="w-full">
        <YouTube
          videoId={vidId}
          opts={{ width: "100%", playerVars: { autoplay: 1 } }}
        />
      </div>
      <BackButton />
    </div>
  );
}
