import PoisonMarshesHeader from "../../components/Public/PoisonMarshesHeader";
import RegisterAccountForm from "../../components/Public/RegisterAccountForm";
import StickyLabel from "../../components/UI/StickyLabel";

export default function Register() {
  return (
    <>
      <PoisonMarshesHeader />
      <StickyLabel>
        <RegisterAccountForm />
      </StickyLabel>
    </>
  );
}
