
import CreateStudentByFaculty from "../pages/faculty/CreateStudentByFaculty";
import FacultyClass from "../pages/faculty/FacultyClass";
import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import { TRouteAndNavItemList } from "../types";
import navItemListConvertor from "../utils/navItemListConvertor";
import routeListConvertor from "../utils/routeListConvertor";


export const facultyPaths: TRouteAndNavItemList[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "Faculty Management",
    children: [
      {
        name: "Create Student By Faculties",
        path: "create-student",
        element: <CreateStudentByFaculty/>,
      },
      {
        name: "Faculty Classes",
        path: "faculty-classes",
        element: <FacultyClass />,
      },
      
    ],
  },
];

export const facultyRoutes = routeListConvertor(facultyPaths);
export const facultyNavItems = navItemListConvertor(facultyPaths, "faculty");