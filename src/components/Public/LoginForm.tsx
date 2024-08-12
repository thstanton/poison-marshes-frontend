import { useMutation } from "@tanstack/react-query";
import { LoginDetails } from "../../types/Account";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/axiosConfig";
import { useUser } from "../../hooks/useUser";
import { useState } from "react";
import { AxiosError } from "axios";

interface LoginFormProps {
  qrCode?: boolean;
}

export default function LoginForm({ qrCode }: LoginFormProps) {
  const navigate = useNavigate();
  const { refetch } = useUser();
  const [error, setError] = useState<string>("");

  const submit = useMutation({
    mutationFn: (loginDetails: LoginDetails) => {
      setError("");
      return api.post("/auth/login", loginDetails);
    },
    onSuccess() {
      refetch();
      if (!qrCode) navigate("/journal");
    },
    onError(error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
      }
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
        className="flex w-full flex-col gap-2 font-special"
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
        <button type="submit" className="btn">
          Log In
        </button>
        {error && (
          <p className="text-left font-mono text-sm font-normal text-red-500">
            Error: {error}
          </p>
        )}
      </form>
    </>
  );
}
