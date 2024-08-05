import RegisterAccountForm from "../components/RegisterAccountForm";
import StickyLabel from "../components/StickyLabel";

export default function Register() {
  return (
    <>
      <h1 className="pb-2 text-center font-unica text-6xl font-bold text-stone-300/60 drop-shadow">
        The Poison Marshes
      </h1>
      <StickyLabel>
        <RegisterAccountForm />
      </StickyLabel>
    </>
  );
}
