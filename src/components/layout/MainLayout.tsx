import { Layout } from "antd";
const { Header, Content, Footer } = Layout;
import { Outlet } from "react-router";
import Sidebar from "./sidebar";

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
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
