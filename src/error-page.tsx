import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import StickyLabel from "./components/UI/StickyLabel";

export default function ErrorPage() {
  const error = useRouteError();

  function errorMessage(error: unknown): string {
    if (isRouteErrorResponse(error)) {
      return `${error.status} ${error.statusText}`;
    } else if (error instanceof Error) {
      return error.message;
    } else if (typeof error === "string") {
      return error;
    } else {
      console.error(error);
      return "Unknown error";
    }
  }

  return (
    <div className="flex h-dvh flex-col items-center justify-evenly">
      <h1 className="pb-2 text-center font-unica text-8xl font-bold text-stone-300/10 drop-shadow">
        The Poison Marshes
      </h1>
      <StickyLabel>
        <h1 className="text-3xl text-red-700 md:text-5xl">Oops!</h1>
        <p className="font-special">Something went wrong</p>
        <p className="font-special">
          <i>{errorMessage(error)}</i>
        </p>
      </StickyLabel>
    </div>
  );
}
