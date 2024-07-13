import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { FormEvent } from "react";

export default function SignUpForm() {
  const submit = useMutation({
    mutationFn: (email: string) => {
      return axios.post(`${import.meta.env.VITE_API_URL}/new-user`, { email });
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    console.log(email);
    submit.mutate(email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-2 flex flex-col gap-2 md:flex-row"
    >
      <input
        type="email"
        name="email"
        className="input input-bordered bg-transparent text-stone-800"
      />
      {submit.isSuccess ? (
        "Check your email"
      ) : submit.isError ? (
        "Something has gone wrong"
      ) : (
        <button
          className="btn border-0 bg-stone-400 text-neutral"
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
