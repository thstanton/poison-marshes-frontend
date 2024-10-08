import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import ErrorPage from "./error-page";
import JournalLayout from "./layouts/Journal/JournalLayout";
import SignUpBackground from "./layouts/SignUpBackground";
import Journal from "./routes/Journal/Journal";
import LevelPage from "./routes/Journal/LevelPage";
import Login from "./routes/Public/Login";
import Register from "./routes/Public/Register";
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
import QrCodes from "./routes/Public/QrCodes";
import QrCodeFail from "./components/Journal/QrCodeFail";
import NewsArticle from "./routes/Static/NewsArticle";
import WormPuzzle from "./routes/Static/WormPuzzle";
import EmailPage from "./routes/Journal/EmailPage";
import WormRiddle from "./routes/Static/WormRiddle";
import SpottersGuide from "./routes/Static/SpottersGuide";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <SignUpBackground />,
      errorElement: <ErrorPage />,
      children: [
        // {
        //   path: "/",
        //   element: <LandingPage />,
        // },
        // {
        //   path: "/signed-up",
        //   element: <SignedUp />,
        // },
        {
          path: "/",
          element: <Login />,
        },
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
                  path: "email",
                  element: <EmailPage />,
                },
                {
                  path: "level-up-success",
                  element: <LevelUpSuccess />,
                },
                {
                  path: "level-up-fail",
                  element: <LevelUpFail />,
                },
                {
                  path: "qr-code-fail",
                  element: <QrCodeFail />,
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
                  ],
                },
                {
                  path: "games",
                  element: <Games />,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: "/codes/:levelId",
      element: <QrCodes />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/static",
      children: [
        {
          path: "lzzc25puo0",
          element: <WellfieldHome />,
        },
        {
          path: "lzzbyebc93",
          element: <NewsArticle />,
        },
        {
          path: "lzzc05oej0",
          element: <WormPuzzle />,
        },
        {
          path: "lzzc0c7qo0",
          element: <WormRiddle />,
        },
        {
          path: "m02fi2t3bn",
          element: <SpottersGuide />,
        },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
