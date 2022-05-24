import {
  BankOutlined,
  FileOutlined,
  PieChartOutlined,
  ShopOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Badge, Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    "Dashboard",
    "1",
    <Link to="/admin">
      <PieChartOutlined />
    </Link>
  ),
  getItem(
    "User",
    "2",
    <Link to="users">
      <UserOutlined />
    </Link>
  ),
  getItem(
    "Report",
    "3",
    <Link to="report">
      <FileOutlined />
    </Link>
  ),
  getItem(
    "Places",
    "4",
    <Link to="places">
      <BankOutlined />
    </Link>
  ),
  getItem(
    "Foods",
    "5",
    <Link to="foods">
      <ShopOutlined />
    </Link>
  ),
];

export const Dashboard = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <LogoWrapper>
          <b>VivuCondao</b>
        </LogoWrapper>
        <Menu
          theme="dark"
          defaultActiveFirst={true}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <DashboardHeader className="site-layout-background">
          <DashboardMenu>Layout</DashboardMenu>
          <div>
            <span className="avatar-item">
              <Badge count={1}>
                <Avatar shape="square" icon={<UserOutlined />} />
              </Badge>
            </span>
          </div>
        </DashboardHeader>

        {/* DASHBOARD COMPONENTS */}
        <ContentStyle>
          <Outlet />
        </ContentStyle>
        {/* DASHBOARD COMPONENTS */}

        <div style={{ textAlign: "center" }}>
          vivucondao.com. All Right Reserved
        </div>
      </Layout>
    </Layout>
  );
};

const LogoWrapper = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const DashboardHeader = styled.div`
  height: 84px;
  display: flex;
  padding: 40px;
  justify-content: space-between;
  align-items: center;
  background-color: #001529;
  color: white;
`;

const DashboardMenu = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ContentStyle = styled(Content)`
  margin: 0 16px;
  padding: 24px;
  box-shadow: 0px 9px 20px -20px rgba(0, 0, 0, 0.1);
`;
