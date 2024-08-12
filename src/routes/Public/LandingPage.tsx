import Countdown from "../../components/Public/Countdown";
import PoisonMarshesHeader from "../../components/Public/PoisonMarshesHeader";
import SignUpForm from "../../components/Public/SignUpForm";
import StickyLabel from "../../components/UI/StickyLabel";

export default function LandingPage() {
  return (
    <>
      <div>
        <PoisonMarshesHeader />
        <Countdown />
      </div>
      <StickyLabel>
        <div>
          <p>We need your help to save the village.</p>
          <p>Find out more - soon</p>
        </div>
        <SignUpForm />
      </StickyLabel>
    </>
  );
}
