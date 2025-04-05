import { Layout, Menu, MenuProps } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import siteLogo from "../../assets/images/logo100.png";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
const items: MenuProps["items"] = [
  {
    key: "Dashboard",
    label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
  },

  {
    key: "hareKrishna",
    label: "User Management",
    children: [
      {
        key: "hareKrishna31",
        label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
      },
      {
        key: "hareKrishna32",
        label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>,
      },
      {
        key: "hareKrishna33",
        label: <NavLink to="/admin/create-student">Create Student</NavLink>,
      },
    ],
  },
];

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
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
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          University Manager ©{new Date().getFullYear()} Created by Developer
          Shourav
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
