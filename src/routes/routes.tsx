import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminRoutes } from "./admin.routes";
import { facultyRoutes } from "./faculty.routes";
import { studentRoutes } from "./student.routes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  /* ----List of Admin Routes------- */
  {
    path: "/admin",
    element: <App />,
    children: adminRoutes,
  },
  /* ----List of Faculty Routes------- */
  {
    path: "/faculty",
    element: <App />,
    children: facultyRoutes,
  },
  /* ----List of Faculty Routes------- */
  {
    path: "/student",
    element: <App />,
    children: studentRoutes,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
