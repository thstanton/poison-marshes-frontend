import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState, useRef, FormEvent } from "react";
import { api } from "../../lib/axiosConfig";
import { registerSchema } from "../../schemas/registerAccountForm";
import { Account, AccountCreateDto } from "../../types/Account";
import { useAuth } from "../../contexts/useAuth";
import { useNavigate } from "react-router";

interface ValidationErrors {
  email: string[];
  name: string[];
  password: string[];
}

export default function RegisterAccountForm() {
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({
    email: [],
    name: [],
    password: [],
  });
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const validateForm = (account: AccountCreateDto, confirmPassword: string) => {
    const errors: ValidationErrors = {
      email: [],
      name: [],
      password: [],
    };

    if (account.password !== confirmPassword) {
      errors.password.push("Passwords do not match");
    }

    const result = registerSchema.safeParse(account);
    if (!result.success) {
      result.error.errors.forEach((error) => {
        const fieldName = error.path[0];
        if (
          fieldName === "email" ||
          fieldName === "password" ||
          fieldName === "name"
        ) {
          errors[fieldName].push(error.message);
        }
      });
      setValidationErrors(errors);
    } else {
      setValidationErrors({
        email: [],
        name: [],
        password: [],
      });
    }
    return result;
  };

  const { login } = useAuth();

  const submit = useMutation({
    mutationFn: (account: AccountCreateDto) => {
      return api.post<AccountCreateDto, Account>(
        "/accounts/register",
        { account },
        { withCredentials: true },
      );
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const account: AccountCreateDto = {
      email: formData.get("email") as string,
      name: formData.get("name") as string,
      password: formData.get("password") as string,
    };

    const confirmPassword = formData.get("confirmPassword") as string;

    const result = validateForm(account, confirmPassword);
    if (!result.success) {
      return;
    }

    submit.mutate(account, {
      onSuccess: () => {
        login(
          {
            email: account.email,
            password: account.password,
          },
          {
            onSuccess: () => {
              navigate("/journal");
            },
          },
        );
      },
    });
  };

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
    setValidationErrors({ email: [], name: [], password: [] });
    submit.reset();
  };

  return (
    <>
      <h1>Create Your Account</h1>
      <form
        className="flex w-full flex-col gap-2 font-special"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <input
          className="text-stone input input-bordered bg-transparent"
          type="text"
          placeholder="Email"
          name="email"
        />
        {validationErrors.email && (
          <ul className="font-sans text-sm font-light text-red-700">
            {validationErrors.email.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
        <input
          className="text-stone input input-bordered bg-transparent"
          type="text"
          placeholder="Name"
          name="name"
        />
        {validationErrors.name && (
          <ul className="font-sans text-sm font-light text-red-700">
            {validationErrors.name.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
        <input
          className="text-stone input input-bordered bg-transparent"
          type="password"
          placeholder="Password"
          name="password"
        />
        <input
          className="text-stone input input-bordered bg-transparent"
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
        />
        {validationErrors.password && (
          <ul className="font-sans text-sm font-light text-red-700">
            {validationErrors.password.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
        {submit.isSuccess ? (
          "Check your email"
        ) : submit.isError ? (
          <span className="font-sans text-sm font-light text-red-700">
            {getErrorMessage(submit.error as AxiosError)}
            <button className="btn btn-error btn-xs" onClick={handleReset}>
              Try again
            </button>
          </span>
        ) : (
          <button className="btn" type="submit">
            Submit{" "}
            {submit.isPending && (
              <span className="loading loading-spinner"></span>
            )}
          </button>
        )}
      </form>
    </>
  );
}
