import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./routes/app.tsx";
import Home from "./routes/home.tsx";
import Report from "./routes/report.tsx";
import Profile from "./routes/profile.tsx";
import Register from "./routes/register.tsx";
import Dashboard from './routes/dashboard.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "report",
        element: <Report />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
