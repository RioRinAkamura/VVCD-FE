import { Button, Drawer, Menu } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo1.png";

export const AppHeader = () => {
  const { t, i18n } = useTranslation();

  const [visible, setVisible] = useState<boolean>(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const language = (
    <i className="fas fa-globe" style={{ fontSize: 16, opacity: 0.9 }}></i>
  );

  const onLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="" height={64} />
          </div>
        </Link>
        <div className="mobileHidden">
          <Menu
            // mode="horizontal"
            defaultSelectedKeys={[]}
            style={{ display: "flex" }}
          >
            <Menu.Item key="home" className="headerMenu">
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return { color: isActive ? "#1890ff" : "" };
                }}
              >
                {t("navbar.home")}
              </NavLink>
            </Menu.Item>
            <Menu.Item key="dat-ve" className="headerMenu">
              <NavLink
                to="/dat-ve"
                style={({ isActive }) => {
                  return { color: isActive ? "#1890ff" : "" };
                }}
              >
                Đặt vé
              </NavLink>
            </Menu.Item>
            <Menu.Item key="dat-phong-ks" className="headerMenu">
              <NavLink
                to="/dat-phong-ks"
                style={({ isActive }) => {
                  return { color: isActive ? "#1890ff" : "" };
                }}
              >
                Đặt phòng
              </NavLink>
            </Menu.Item>
            <Menu.Item key="dat-tour" className="headerMenu">
              <NavLink
                to="/dat-tour"
                style={({ isActive }) => {
                  return { color: isActive ? "#1890ff" : "" };
                }}
              >
                Đặt tour
              </NavLink>
            </Menu.Item>
            <Menu.Item key="thue-xe" className="headerMenu">
              <NavLink
                to="thue-xe"
                style={({ isActive }) => {
                  return { color: isActive ? "#1890ff" : "" };
                }}
              >
                Thuê xe
              </NavLink>
            </Menu.Item>
            <Menu.Item key="contact" className="headerMenu">
              <NavLink
                to="/ho-tro"
                style={({ isActive }) => {
                  return { color: isActive ? "#1890ff" : "" };
                }}
              >
                {t("navbar.contact")}
              </NavLink>
            </Menu.Item>
            <Menu.Item key="faq" className="headerMenu">
              <NavLink
                to="faq"
                style={({ isActive }) => {
                  return { color: isActive ? "#1890ff" : "" };
                }}
              >
                FAQ
              </NavLink>
            </Menu.Item>
            <Menu.SubMenu key="SubMenu" title={language} className="headerMenu">
              <Menu.Item key="vi" onClick={() => onLanguageChange("vi")}>
                Tiếng Việt
              </Menu.Item>
              <Menu.Item key="en" onClick={() => onLanguageChange("en")}>
                English
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            title="Menu"
            placement="right"
            width={"70%"}
            onClose={onClose}
            visible={visible}
          >
            <Menu defaultSelectedKeys={["home"]}>
              <Menu.Item key="home" className="headerMenu" onClick={onClose}>
                <Link to="/">{t("navbar.home")}</Link>
              </Menu.Item>
              <Menu.Item key="dat-ve" className="headerMenu" onClick={onClose}>
                <Link to="/dat-ve">Đặt vé</Link>
              </Menu.Item>
              <Menu.Item
                key="dat-phong-ks"
                className="headerMenu"
                onClick={onClose}
              >
                <Link to="/dat-phong-ks">Đặt phòng</Link>
              </Menu.Item>
              <Menu.Item
                key="dat-tour"
                className="headerMenu"
                onClick={onClose}
              >
                <Link to="/dat-tour">Đặt tour</Link>
              </Menu.Item>
              <Menu.Item key="thue-xe" className="headerMenu" onClick={onClose}>
                <Link to="thue-xe">Thuê xe</Link>
              </Menu.Item>
              <Menu.Item key="contact" className="headerMenu" onClick={onClose}>
                <Link to="/ho-tro">{t("navbar.contact")}</Link>
              </Menu.Item>
              <Menu.Item key="faq" className="headerMenu" onClick={onClose}>
                <Link to="faq">FAQ</Link>
              </Menu.Item>
              <Menu.SubMenu key="SubMenu" title={language}>
                <Menu.Item key="vi" onClick={() => onLanguageChange("vi")}>
                  Tiếng Việt
                </Menu.Item>
                <Menu.Item key="en" onClick={() => onLanguageChange("en")}>
                  English
                </Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Drawer>
        </div>
      </div>
    </div>
  );
};
