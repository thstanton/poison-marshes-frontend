import { useMutation } from "@tanstack/react-query";
import { LoginDetails } from "../../types/Account";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/axiosConfig";
import { useUser } from "../../hooks/useUser";

export default function LoginForm() {
  const navigate = useNavigate();
  const { refetch } = useUser();

  const submit = useMutation({
    mutationFn: (loginDetails: LoginDetails) => {
      return api.post("/auth/login", loginDetails);
    },
    onSuccess() {
      refetch();
      navigate("/journal");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const loginDetails: LoginDetails = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    submit.mutate(loginDetails);
  };
  return (
    <>
      <h1>Log In</h1>
      <form
        className="flex flex-col gap-2 font-special"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Email"
          className="text-stone input input-bordered w-full border-yellow-600 bg-transparent"
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="text-stone input input-bordered w-full border-yellow-600 bg-transparent"
          name="password"
        />
        <button
          type="submit"
          className="btn border-0 bg-yellow-500 text-neutral drop-shadow-sm"
        >
          Log In
        </button>
      </form>
    </>
  );
}
