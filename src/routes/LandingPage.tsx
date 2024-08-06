import Countdown from "../components/Countdown";
import SignUpForm from "../components/SignUpForm";
import StickyLabel from "../components/StickyLabel";

export default function LandingPage() {
  return (
    <>
      <div>
        <h1 className="pb-2 text-center font-unica text-6xl font-bold text-stone-300/60 drop-shadow">
          The Poison Marshes
        </h1>
        <Countdown />
      </div>
      <StickyLabel>
        <div>
          <p>We need your help to save the village.</p>
          <p>Find out more - soon</p>
        </div>
        <SignUpForm />
      </StickyLabel>
      <div className="absolute bottom-0 w-full py-4 text-center font-special text-neutral">
        <p>
          The Poison Marshes is part of{" "}
          <a href="https://alrewas-artsfest.co.uk" target="_blank">
            Alrewas Arts Festival 2024
          </a>
        </p>
      </div>
    </>
  );
}
