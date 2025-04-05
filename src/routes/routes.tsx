import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPaths } from "./admin.routes";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  /* ----List of Admin Routes------- */
  {
    path: "/admin",
    element: <App />,
    children: adminPaths,
  },
  /* ----List of Faculty Routes------- */
  {
    path: "/faculty",
    element: <App />,
    children: facultyPaths,
  },
  /* ----List of Faculty Routes------- */
  {
    path: "/student",
    element: <App />,
    children: studentPaths,
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
