import { useSearchParams } from "react-router-dom";
import EmailDisplay from "../../components/Journal/EmailDisplay";
import BackButton from "../../components/UI/BackButton";

export default function EmailPage() {
  const [searchParams] = useSearchParams();
  const from = searchParams.get("from");
  const subject = searchParams.get("subject");
  const html = searchParams.get("html");

  return (
    <div className="mx-4 flex h-full flex-col items-center justify-between gap-8">
      {from && subject && html && (
        <EmailDisplay from={from} subject={subject} html={html} />
      )}
      <BackButton />
    </div>
  );
}
