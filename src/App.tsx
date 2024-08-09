import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import ErrorPage from "./error-page";
import JournalLayout from "./layouts/JournalLayout";
import SignUpBackground from "./layouts/SignUpBackground";
import Journal from "./routes/Journal/Journal";
import LandingPage from "./routes/Public/LandingPage";
import LevelPage from "./routes/Journal/LevelPage";
import Login from "./routes/Public/Login";
import Register from "./routes/Public/Register";
import SignedUp from "./routes/Public/SignedUp";
import VideoPage from "./routes/Journal/VideoPage";
import WellfieldHome from "./routes/Static/WellfieldHome";
import { AuthProvider } from "./contexts/useAuth";
import Admin from "./layouts/Admin";
import Games from "./routes/Admin/Games";
import LevelCreateForm from "./components/Admin/LevelCreateForm";
import LevelUpdateForm from "./components/Admin/LevelUpdateForm";
import CreateEdit from "./layouts/CreateEdit";

export default function App() {
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
      element: <ProtectedRoute />,
      children: [
        {
          element: <JournalLayout />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: "/journal",
              element: <Journal />,
              children: [
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
              path: "/admin",
              element: <Admin />,
              children: [
                {
                  path: "levels",
                  element: <CreateEdit />,
                  children: [
                    {
                      path: "create",
                      element: <LevelCreateForm />,
                    },
                    {
                      path: "edit",
                      element: <LevelUpdateForm />,
                    },
                  ],
                },
                {
                  path: "acts",
                  element: <CreateEdit />,
                  children: [
                    {
                      path: "create",
                      element: <LevelCreateForm />,
                    },
                    {
                      path: "edit",
                      element: <LevelUpdateForm />,
                    },
                  ],
                },
                {
                  path: "games",
                  element: <Games />,
                },
                {
                  path: "emails",
                  element: <CreateEdit />,
                  children: [
                    {
                      path: "create",
                      element: <LevelCreateForm />,
                    },
                    {
                      path: "edit",
                      element: <LevelUpdateForm />,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: "/wellfield",
      element: <WellfieldHome />,
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
