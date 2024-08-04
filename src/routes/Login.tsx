import LoginForm from "../components/LoginForm";
import SignUpBackground from "../components/SignUpBackground";
import StickyLabel from "../components/StickyLabel";

export default function Login() {
  return (
    <SignUpBackground>
      <h1 className="pb-2 text-center font-unica text-6xl font-bold text-stone-300/60 drop-shadow">
        The Poison Marshes
      </h1>
      <StickyLabel>
        <LoginForm />
      </StickyLabel>
    </SignUpBackground>
  );
}
