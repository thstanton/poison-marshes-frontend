import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignedUp from "./routes/SignedUp.tsx";
import WellfieldHome from "./routes/WellfieldHome.tsx";
import Register from "./routes/Register.tsx";
import Login from "./routes/Login.tsx";
import UserProvider from "./contexts/UserProvider.tsx";
import Journal from "./routes/Journal.tsx";
import ErrorPage from "./error-page.tsx";
import SignUpBackground from "./layouts/SignUpBackground.tsx";
import { api } from "./lib/axiosConfig.ts";
import { Game } from "./types/Game.ts";
import JournalLayout from "./layouts/JournalLayout.tsx";
import LevelPage from "./routes/LevelPage.tsx";

const router = createBrowserRouter([
  {
    element: <SignUpBackground />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
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
    path: "journal",
    element: <JournalLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Journal />,
        loader: async (): Promise<Game> => {
          try {
            const response = await api.get("/games/current");
            return response.data;
          } catch (error) {
            throw new Response("Failed to fetch game data", { status: 500 });
          }
        },
      },
      {
        path: "level/:levelSequence/:actSequence",
        element: <LevelPage />,
        loader: async ({ params }) => {
          try {
            const response = await api.get(
              `/levels/act/${params.actSequence}/sequence/${params.levelSequence}`,
            );
            return response.data;
          } catch (error) {
            throw new Response("Failed to fetch level data", { status: 500 });
          }
        },
      },
    ],
  },
  {
    path: "/wellfield",
    element: <WellfieldHome />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  </React.StrictMode>,
);
