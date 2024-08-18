// import { useMutation } from "@tanstack/react-query";
import { LoginDetails } from "../../types/Account";
import { useNavigate } from "react-router-dom";
// import { api } from "../../lib/axiosConfig";
// import { useUser } from "../../hooks/useUser";
import { useState } from "react";
import { AxiosError } from "axios";
import { useAuth } from "../../contexts/useAuth";

interface LoginFormProps {
  qrCode?: boolean;
}

export default function LoginForm({ qrCode }: LoginFormProps) {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const loginDetails: LoginDetails = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    login(loginDetails, {
      onSuccess: () => {
        if (!qrCode) navigate("/journal");
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          setError(error.response?.data.message);
        }
      },
    });
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
          className="input input-bordered bg-transparent"
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered bg-transparent"
          name="password"
        />
        <button type="submit" className="btn">
          Log In
        </button>
        {error && (
          <p className="text-center font-mono text-sm font-normal text-red-500">
            Error: {error}
          </p>
        )}
      </form>
    </>
  );
}
