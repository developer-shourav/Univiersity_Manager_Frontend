import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { TRouteAndNavItemList } from "../types";
import routeListConvertor from "../utils/routeListConvertor";
import navItemListConvertor from "../utils/navItemListConvertor";
import { userRole } from "../utils/utils.constant";
import AcademicSemester from "../pages/admin/academicManagement/academicSemester";

export const adminPaths: TRouteAndNavItemList[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
    ],
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
export const adminNavItems = navItemListConvertor(adminPaths, userRole.ADMIN);
