import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRef, FormEvent } from "react";
import { z } from "zod";
import { api } from "../../lib/axiosConfig";

export default function SignUpForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const submit = useMutation({
    mutationFn: (email: string) => {
      return api.post("/api/new-user", { email }, { withCredentials: true });
    },
  });

  const getErrorMessage = (error: AxiosError): string => {
    if (!error.response) {
      return "An unknown error occurred. Please try again later.";
    }

    switch (error.response.status) {
      case 400:
        return "Bad request. Please check your input.";
      case 409:
        return "This email is already registered. Please use a different email.";
      case 500:
        return "Internal server error. Please try again later.";
      default:
        return "An error occurred. Please try again.";
    }
  };

  const emailSchema = z.string().email("Please enter a valid email");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      return;
    }
    submit.mutate(email);
  };

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
    submit.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-2 flex flex-col gap-2 font-special text-base"
      ref={formRef}
    >
      <input
        type="email"
        name="email"
        className="input input-bordered border-yellow-600 bg-transparent text-stone-800"
        placeholder="Enter Your Email"
        required
      />
      {submit.isSuccess ? (
        "Check your email"
      ) : submit.isError ? (
        <span className="flex items-center justify-center gap-2 text-red-500">
          {getErrorMessage(submit.error as AxiosError)}
          <button className="btn btn-error btn-xs" onClick={handleReset}>
            Try again
          </button>
        </span>
      ) : (
        <button
          className="0 btn border-0 bg-yellow-500 text-neutral drop-shadow-sm"
          type="submit"
        >
          Join Us{" "}
          {submit.isPending && (
            <span className="loading loading-spinner"></span>
          )}
        </button>
      )}
    </form>
  );
}
