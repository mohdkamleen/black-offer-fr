import { BellOutlined, CaretDownOutlined, FileAddOutlined, FileOutlined, GlobalOutlined, HomeOutlined, LineChartOutlined, ProfileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Home', "/", <HomeOutlined />),
  getItem('Profile', 'profile', <ProfileOutlined />),
  getItem('Appoinments', 'appoinments', <FileAddOutlined />),
  getItem('Blogs', 'blogs', <GlobalOutlined />),
  getItem('Users', 'users', <TeamOutlined />, [
    getItem('Admin', 'admin'),
    getItem('Customer', 'customer'),
    getItem('Subscriber', 'subscriber')
  ]),
  getItem('Careers', 'careers', <LineChartOutlined />, [
    getItem('New', 'new-career'),
    getItem('Resolved', 'resolved-career'),
    getItem('Rejected', 'rejected-career')
  ]), 
];


export default function () {

  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate()
  const location = useLocation()


  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)} >

        {!collapsed ? <div className='logo'>Mindikko<font color="#fdae5c">.</font></div> : <div className='logo'>M<font color="#fdae5c">.</font></div>}

        <Menu
          theme="dark"
          defaultSelectedKeys="/"
          mode="inline"
          onClick={(e) => navigate(e.key)}
          items={items} />

      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "25px",
            alignItems: "center",
            background: colorBgContainer,
          }}
        >
          <Badge count={2}>
            <BellOutlined style={{ fontSize: '22px', color: '#08c' }} />
          </Badge>

          <Badge>
            <Avatar size={30} icon={<UserOutlined />} shape="circle" /> &nbsp; Mohd Kamleen <CaretDownOutlined style={{ color: "gray" }} />
          </Badge>

        </Header>
        <Content>
          <div
            style={{
              padding: "0 5%",
              minHeight: 400,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>

        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          &copy; <font face="vertana">Mindikko</font><font color="#fdae5c">.</font> {(new Date().getFullYear())} All Right Reserved.
        </Footer>
      </Layout>
    </Layout>
  );
}; 