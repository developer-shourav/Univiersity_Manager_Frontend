import { Button, Layout } from "antd";
const { Header, Content, Footer } = Layout;
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";

const MainLayout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout success", { duration: 2000 });
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "15px",
            }}
          >
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        </Header>
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
