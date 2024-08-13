import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AxiosError } from "axios";
import App from "./App.tsx";
import { Cloudinary } from "@cloudinary/url-gen/index";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry(_, error) {
        if (error instanceof AxiosError) {
          if (error.response?.status === 401) {
            console.log("401 error!");
            return false;
          }
          console.log(error.response?.status);
        }
        console.log(error);
        return false;
      },
    },
  },
});

export const cld = new Cloudinary({
  cloud: {
    cloudName: "drbmqrolz",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      {(__APP_ENV__ === "development" ||
        __APP_ENV__ === "preview" ||
        __APP_ENV__ === "local") && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  </React.StrictMode>,
);
