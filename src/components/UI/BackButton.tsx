import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <button
      onClick={goBack}
      className="btn btn-outline text-center font-rock text-black"
    >
      Go Back
    </button>
  );
}
