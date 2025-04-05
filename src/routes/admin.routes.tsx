import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

type TRoute = {
  path: string;
  element: ReactNode;
};

export const adminPaths = [
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

export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
  if (item.element && item.path) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }
  if (item.children) {
    item.children.forEach((childItem) => {
      acc.push({
        path: childItem.path,
        element: childItem.element,
      });
    });
  }

  return acc;
}, []);
