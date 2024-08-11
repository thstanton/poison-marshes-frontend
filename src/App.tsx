import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import ErrorPage from "./error-page";
import JournalLayout from "./layouts/Journal/JournalLayout";
import SignUpBackground from "./layouts/SignUpBackground";
import Journal from "./routes/Journal/Journal";
// import LandingPage from "./routes/Public/LandingPage";
import LevelPage from "./routes/Journal/LevelPage";
import Login from "./routes/Public/Login";
import Register from "./routes/Public/Register";
// import SignedUp from "./routes/Public/SignedUp";
import VideoPage from "./routes/Journal/VideoPage";
import WellfieldHome from "./routes/Static/WellfieldHome";
import { AuthProvider } from "./contexts/useAuth";
import Admin from "./layouts/Journal/Admin/Admin";
import Games from "./routes/Admin/Games";
import LevelCreateForm from "./components/Admin/LevelCreateForm";
import CreateEdit from "./layouts/Journal/Admin/CreateEdit";
import LevelUpSuccess from "./components/Journal/LevelUpSuccess";
import LevelUpFail from "./components/Journal/LevelUpFail";
import About from "./routes/Public/About";
// import LevelUpdatePage from "./components/Admin/LevelUpdatePage";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <SignUpBackground />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        // {
        //   path: "/",
        //   element: <LandingPage />,
        // },
        // {
        //   path: "/signed-up",
        //   element: <SignedUp />,
        // },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/about",
          element: <About />,
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
                {
                  path: "level-up-success",
                  element: <LevelUpSuccess />,
                },
                {
                  path: "level-up-fail",
                  element: <LevelUpFail />,
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
                    // {
                    //   path: "edit",
                    //   element: <LevelUpdatePage />,
                    // },
                  ],
                },
                // {
                //   path: "acts",
                //   element: <CreateEdit />,
                //   // children: [
                //   //   {
                //   //     path: "create",
                //   //     element: <LevelCreateForm />,
                //   //   },
                //   //   {
                //   //     path: "edit",
                //   //     element: <LevelUpdatePage />,
                //   //   },
                //   // ],
                // },
                {
                  path: "games",
                  element: <Games />,
                },
                // {
                //   path: "emails",
                //   element: <CreateEdit />,
                //   // children: [
                //   //   {
                //   //     path: "create",
                //   //     element: <LevelCreateForm />,
                //   //   },
                //   //   {
                //   //     path: "edit",
                //   //     element: <LevelUpdateForm />,
                //   //   },
                //   // ],
                // },
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
