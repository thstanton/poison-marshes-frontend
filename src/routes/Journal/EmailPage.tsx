import { useNavigate, useParams } from "react-router-dom";
import EmailDisplay from "../../components/Journal/EmailDisplay";
import { useEmail } from "../../hooks/useEmail";

export default function EmailPage() {
  const { emailId } = useParams();
  const { data: email } = useEmail(Number(emailId));
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="mx-4 flex h-full flex-col items-center justify-between gap-8">
      <EmailDisplay />
      <button
        onClick={goBack}
        className="btn btn-outline font-rock text-stone-200"
      >
        Go Back
      </button>
    </div>
  );
}
