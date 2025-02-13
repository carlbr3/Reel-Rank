import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/HomePage";
import Genres from "./pages/Genres";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/genres",
        element: <Genres genres={[]} />,
      },
      {
        path: "/profile",
        element: <UserProfile />,
      },
      {
        path: "/signup",
        element: <UserProfile />,
      },
      {
        path: "/login",
        element: <UserProfile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);