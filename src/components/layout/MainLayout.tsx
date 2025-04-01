
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import { Children, createElement } from 'react';
const { Header, Content, Footer, Sider } = Layout;
import siteLogo from '../../assets/images/logo100.png';
const items: MenuProps['items'] = [
    
    {
        key: 'hareKrishna1',
        label: 'Dashboard'
    },
    {
        key: 'hareKrishna2',
        label: 'Profile'
    },
    {
        key: 'hareKrishna3',
        label: 'User Management',
        children: [
            {
                key: 'hareKrishna31',
                label: 'Create Admin'
            },
            {
                key: 'hareKrishna32',
                label: 'Create User'
            },
        ]
    },



];

  

const MainLayout = () => {
  return (
    <Layout style={{height:'100vh'}}>
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
        <div style={{display: 'flex', justifyContent: 'center', padding:'16px 0 6px 0'}}> 
            <img style={{width: '80px'}} src={siteLogo} alt="University Manager Logo" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <h1>The main layout Content of our University Manager</h1>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          University Manager ©{new Date().getFullYear()} Created by Developer Shourav
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
