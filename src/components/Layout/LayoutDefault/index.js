import React, { useState } from "react";
import { Badge, Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import "./layoutdefault.scss";
import { SearchOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Notify from "../../Notify";
import SiderBar from "../../SiderBar";
import { Outlet } from "react-router-dom";
const LayoutDefault = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <div>
      <Layout className="layout-default">
        <header className="header">
          <div
            className={
              "header__logo" + (collapse ? "header__logo--collapsed" : "")
            }
          >
            <img
              src={
                collapse
                  ? "https://enlink.themenate.net/assets/images/logo/logo-fold.png"
                  : "https://enlink.themenate.net/assets/images/logo/logo.png"
              }
              alt="logo"
            />
          </div>
          <div className="header__nav">
            <div className="header__nav--left">
              <div
                className="header__collapse"
                onClick={() => {
                  setCollapse(!collapse);
                }}
              >
                <MenuFoldOutlined />
              </div>
              <div className="header__search">
                <SearchOutlined />
              </div>
            </div>
            <div className="header__nav--right">
              <Badge dot={true}>
                <Notify />
              </Badge>
            </div>
          </div>
        </header>
        <Layout>
          <Sider theme="light" collapsed={collapse} className="sider">
            <SiderBar collapse={collapse} />
          </Sider>
          <Content className="content">
            <Outlet />
          </Content>
        </Layout>
        <Footer
          style={{
            textAlign: "center",
            color: "#fff",
            backgroundColor: "gray",
          }}
        >
          Abaoxomtieu
        </Footer>
      </Layout>
    </div>
  );
};

export default LayoutDefault;
