import StudentDashboard from "../pages/student/StudentDashboard";
import StudentEnroll from "../pages/student/StudentEnroll";
import StudentGetResult from "../pages/student/StudentGetResult";
import { TRouteAndNavItemList } from "../types";
import navItemListConvertor from "../utils/navItemListConvertor";
import routeListConvertor from "../utils/routeListConvertor";
import { userRole } from "../utils/utils.constant";

export const studentPaths: TRouteAndNavItemList[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "Student Management",
    children: [
      {
        name: "Student Enroll",
        path: "enroll-student",
        element: <StudentEnroll />,
      },
      {
        name: "Student Result",
        path: "get-result",
        element: <StudentGetResult />,
      },
    ],
  },
];

export const studentRoutes = routeListConvertor(studentPaths);
export const studentNavItems = navItemListConvertor(studentPaths, userRole.STUDENT);
