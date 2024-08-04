import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignedUp from "./routes/SignedUp.tsx";
import WellfieldHome from "./routes/WellfieldHome.tsx";
import Register from "./routes/Register.tsx";
import Login from "./routes/Login.tsx";
import UserProvider from "./contexts/UserProvider.tsx";
import Journal from "./routes/Journal.tsx";

const router = createBrowserRouter([
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
  {
    path: "/journal",
    element: <Journal />,
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
