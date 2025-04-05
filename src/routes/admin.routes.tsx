import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

export const adminPaths = [
  {
    index: true,
    element: <AdminDashboard />,
  },
  {
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "create-student",
    element: <CreateStudent />,
  },
  {
    path: "create-faculty",
    element: <CreateFaculty />,
  },
  {
    path: "create-admin",
    element: <CreateAdmin />,
  },
];

export const adminPathsAndNav = [
  {
    name: "Dashboard",
    path: "admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Create Student",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Faculty",
        path: "create-admin",
        element: <CreateAdmin />,
      },
    ],
  },
];
