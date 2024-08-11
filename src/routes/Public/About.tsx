import { Link } from "react-router-dom";
import StickyLabel from "../../components/UI/StickyLabel";
import PoisonMarshesHeader from "../../components/Public/PoisonMarshesHeader";

export default function About() {
  return (
    <>
      <PoisonMarshesHeader />
      <StickyLabel>
        <h1 className="font-unica text-5xl">About</h1>
        <div className="text-left font-sans text-lg font-normal">
          <p className="pb-4">
            The Poison Marshes is{" "}
            <strong>an immersive story-driven adventure game</strong> set in
            Alrewas, taking place during{" "}
            <strong>Alrewas Arts Festival 2024</strong>.
          </p>
          <p className="pb-4">
            Your quest will lead you to{" "}
            <strong>locations across the village</strong> and{" "}
            <strong>online</strong>, with characters to meet, puzzles to solve
            and an epic story with the fate of the village at stake.
          </p>
          <p className="pb-4">
            You'll need a <strong>smartphone</strong> which can scan QR-codes
            and an <strong>email address</strong> to play.
          </p>
          <p className="pb-4">
            The game is suitable for all ages, but children under the age of 13
            should be accompanied by an adult.
          </p>
          <p className="pb-4">
            Are you ready to save the village?{" "}
            <Link className="link" to="/register">
              Sign up now!
            </Link>
          </p>
        </div>
      </StickyLabel>
    </>
  );
}
