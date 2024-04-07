import React, { useEffect, useState } from "react";
import {
  AppstoreOutlined,
  DashboardOutlined,
  HomeOutlined,
  PieChartOutlined,
  FileOutlined,
  LockOutlined,
  MenuOutlined,
  PlusCircleOutlined,
  HolderOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Menu", "sub1", <MenuOutlined />, [
    getItem(<Link to="/"> Dashboard</Link>, "/", <DashboardOutlined />),
    getItem("CRM", "2"),
    getItem("E-commerce", "3"),
    getItem("Project", "4"),
  ]),

  getItem("Apps", "sub2", <AppstoreOutlined />, [
    getItem("Option 9", "5"),
    getItem("Option 10", "6"),
    getItem("Option 11", "7"),
    getItem("Option 12", "8"),
  ]),
  getItem(
    <Link to="room-list">Room List</Link>,
    "room-list",
    <HolderOutlined />
  ),
  getItem(<Link to="book-room">Book Room</Link>, "book-room", <HomeOutlined />),
  getItem(
    <Link to="create-room">Create Room</Link>,
    "create-room",
    <PlusCircleOutlined />
  ),

  getItem("Chart", "sub4", <PieChartOutlined />),
  getItem("Pages", "sub5", <FileOutlined />, [
    getItem("Option 9", "13"),
    getItem("Option 10", "14"),
    getItem("Option 11", "15"),
    getItem("Option 12", "16"),
  ]),
  getItem("Authentication", "sub6", <LockOutlined />, [
    getItem("Option 5", "17"),
    getItem("Option 6", "18"),
    getItem("Submenu", "sub7", null, [
      getItem("Option 7", "19"),
      getItem("Option 8", "20"),
    ]),
  ]),
];

const SiderBar = (props) => {
  const { collapse } = props;
  const [click, setClick] = useState(false);
  const onClick = (e) => {
    console.log("click ", e);
    setClick(!click);
  };
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setProgress(progress + 10);
    }, 1000);
    setTimeout(() => {
      setProgress(progress + 40);
    }, 1500);
    setTimeout(() => {
      setProgress(100);
    }, 3000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [click]);
  return (
    <>
      <LoadingBar
        color="#007AFF"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Menu
        onClick={onClick}
        style={{
          width: collapse ? 80 : 200,
        }}
        defaultSelectedKeys={["/"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </>
  );
};

export default SiderBar;
