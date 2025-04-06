import { Layout, Menu, MenuProps } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import siteLogo from "../../assets/images/logo100.png";
import { Outlet } from "react-router";
import { adminNavItems } from "../../routes/admin.routes";
import { facultyNavItems } from "../../routes/faculty.routes";
import { studentNavItems } from "../../routes/student.routes";


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
          items={adminNavItems}
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
