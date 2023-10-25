import { Home } from "pages/Home";
import { Login } from "pages/auth/Login";
import { NotFound } from "pages/error/NotFound";
import { Unauthorized } from "pages/error/Unauthorized";
import { Navigate } from "react-router-dom";

const router = [
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "",
    element: <Navigate to="home"/>,
  },
  {
    path: "auth",
    element: <Login />,
  },
  {
    path: "unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default router;
