import { useNavigate, useSearchParams } from "react-router-dom";
import YouTube from "react-youtube";

export default function VideoPage() {
  const [searchParams] = useSearchParams();
  const vidId = searchParams.get("vidId");
  const title = searchParams.get("title");
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="mx-4 flex h-full flex-col items-center justify-between gap-8">
      <h1 className="font-unica text-5xl text-stone-400">{title}</h1>
      <div className="w-full">
        <YouTube
          videoId={vidId}
          opts={{ width: "100%", playerVars: { autoplay: 1 } }}
        />
      </div>
      <button
        onClick={goBack}
        className="btn btn-outline font-rock text-stone-200"
      >
        Go Back
      </button>
    </div>
  );
}
