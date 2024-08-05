import { useMutation } from "@tanstack/react-query";
import { LoginDetails } from "../types/Account";
import { useUser } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { api } from "../lib/axiosConfig";

export default function LoginForm() {
  const userContext = useUser();
  const navigate = useNavigate();

  const submit = useMutation({
    mutationFn: (loginDetails: LoginDetails) => {
      return api.post("/auth/login", loginDetails, { withCredentials: true });
    },
    onSuccess(data) {
      userContext?.setUser(data.data.account);
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
          className="text-stone input input-bordered border-yellow-600 bg-transparent"
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="text-stone input input-bordered border-yellow-600 bg-transparent"
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
