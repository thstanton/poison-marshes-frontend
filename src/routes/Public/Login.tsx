import { Link, useNavigate } from "react-router-dom";
import Countdown from "../../components/Public/Countdown";
import LoginForm from "../../components/Public/LoginForm";
import StickyLabel from "../../components/UI/StickyLabel";
import PoisonMarshesHeader from "../../components/Public/PoisonMarshesHeader";
import { useAuth } from "../../contexts/useAuth";

export default function Login() {
  const { isSuccess } = useAuth();
  const navigate = useNavigate();

  if (isSuccess) navigate("/journal");

  return (
    <>
      <PoisonMarshesHeader />
      <Countdown />
      <StickyLabel>
        <LoginForm />
        <div className="text-center font-special text-lg">
          <p>
            Don't have an account yet?{" "}
            <Link to="/register" className="link">
              Sign up
            </Link>
          </p>
          <Link to="/about" className="link mt-3">
            What is this?
          </Link>
        </div>
      </StickyLabel>
    </>
  );
}
