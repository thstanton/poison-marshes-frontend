import PoisonMarshesHeader from "../../components/Public/PoisonMarshesHeader";
import StickyLabel from "../../components/UI/StickyLabel";

export default function SignedUp() {
  return (
    <>
      <PoisonMarshesHeader />
      <StickyLabel>
        <h1 className="text-3xl text-red-700 md:text-5xl">
          Welcome Truthseeker
        </h1>
        <p className="font-special">
          Instructions will follow when the festival begins...
        </p>
      </StickyLabel>
    </>
  );
}
