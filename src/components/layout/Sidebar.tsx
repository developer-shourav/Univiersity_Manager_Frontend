import { Layout, Menu } from "antd";
const { Sider } = Layout;
import siteLogo from "../../assets/images/logo100.png";
import { adminNavItems } from "../../routes/admin.routes";
import { facultyNavItems } from "../../routes/faculty.routes";
import { studentNavItems } from "../../routes/student.routes";
import { userRole } from "../../utils/utils.constant";

const Sidebar = () => {
  const role = "admin";
  let sidebarItems;

  switch (role) {
    case userRole.ADMIN:
      sidebarItems = adminNavItems;
      break;
    case userRole.FACULTY:
      sidebarItems = facultyNavItems;
      break;
    case userRole.STUDENT:
      sidebarItems = studentNavItems;
      break;

    default:
      break;
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "16px 0 6px 0",
        }}
      >
        <img
          style={{ width: "80px" }}
          src={siteLogo}
          alt="University Manager Logo"
        />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
