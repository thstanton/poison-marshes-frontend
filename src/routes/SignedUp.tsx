import SignUpBackground from "../components/SignUpBackground";
import StickyLabel from "../components/StickyLabel";

export default function SignedUp() {
  return (
    <SignUpBackground>
      <h1 className="pb-2 text-center font-unica text-6xl font-bold text-stone-300/60 drop-shadow">
        The Poison Marshes
      </h1>
      <StickyLabel>
        <h1 className="text-3xl text-red-700 md:text-5xl">
          Welcome Truthseeker
        </h1>
        <p className="font-special">
          Instructions will follow when the festival begins...
        </p>
      </StickyLabel>
    </SignUpBackground>
  );
}
