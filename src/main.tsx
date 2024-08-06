import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "./lib/axiosConfig.ts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ErrorPage from "./error-page.tsx";
import JournalLayout from "./layouts/JournalLayout.tsx";
import SignUpBackground from "./layouts/SignUpBackground.tsx";
import Journal from "./routes/Journal.tsx";
import LandingPage from "./routes/LandingPage.tsx";
import LevelPage from "./routes/LevelPage.tsx";
import Login from "./routes/Login.tsx";
import Register from "./routes/Register.tsx";
import SignedUp from "./routes/SignedUp.tsx";
import WellfieldHome from "./routes/WellfieldHome.tsx";
import VideoPage from "./routes/VideoPage.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30000,
      retry(failureCount, error) {
        if (
          error instanceof AxiosError &&
          (error.response?.status === 401 || error.response?.status === 400)
        ) {
          return false;
        }
        return failureCount <= 1;
      },
    },
  },
  queryCache: new QueryCache({
    onError(error) {
      if (
        error instanceof AxiosError &&
        (error.response?.status === 401 || error.response?.status === 400)
      ) {
        console.log("Attempting to refresh token...");
        api.post("/auth/refresh");
      }
    },
  }),
});

const router = createBrowserRouter([
  {
    element: <SignUpBackground />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/signed-up",
        element: <SignedUp />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    element: <JournalLayout />,
    path: "/journal",
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Journal />,
      },
      {
        path: "levels",
        element: <LevelPage />,
      },
      {
        path: "video",
        element: <VideoPage />,
      },
    ],
  },
  {
    path: "/wellfield",
    element: <WellfieldHome />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
