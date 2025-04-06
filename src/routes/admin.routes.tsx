import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { TRouteAndNavItemList } from "../types/types";
import routeListConvertor from "../utils/routeListConvertor";
import navItemListConvertor from "../utils/navItemListConvertor";

export const adminPaths: TRouteAndNavItemList[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Create Member",
        path: "create-Member",
        element: <CreateStudent />,
      },
    ],
  },
];

export const adminRoutes = routeListConvertor(adminPaths);
export const adminNavItems = navItemListConvertor(adminPaths, 'admin');
