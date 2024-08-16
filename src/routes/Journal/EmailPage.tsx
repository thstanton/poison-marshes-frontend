import { useNavigate, useSearchParams } from "react-router-dom";
import EmailDisplay from "../../components/Journal/EmailDisplay";

export default function EmailPage() {
  const [searchParams] = useSearchParams();
  const from = searchParams.get("from");
  const subject = searchParams.get("subject");
  const html = searchParams.get("html");
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="mx-4 flex h-full flex-col items-center justify-between gap-8">
      {from && subject && html && (
        <EmailDisplay from={from} subject={subject} html={html} />
      )}
      <button
        onClick={goBack}
        className="btn btn-outline font-rock text-stone-200"
      >
        Go Back
      </button>
    </div>
  );
}
