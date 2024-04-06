import React, { useEffect, useState } from "react";
import { getRoomList } from "../../../services/roomsService";
import { Button } from "antd";
import RoomGird from "./RoomGird";
import { UnorderedListOutlined, AppstoreOutlined } from "@ant-design/icons";
import RoomTable from "./RoomTable";
const RoomList = () => {
  const [rooms, setRooms] = useState([]);
  const [isGird, setisGird] = useState(true);
  const handleGrid = () => {
    setisGird(true);
  };
  const handleTable = () => {
    setisGird(false);
  };
  const listRoom = async () => {
    const response = await getRoomList();
    setRooms(response);
  };
  useEffect(() => {
    listRoom();
  }, []);
  const onReload = () => {
    listRoom();
  };

  return (
    <>
      <Button onClick={handleGrid}>
        <AppstoreOutlined />
      </Button>
      <Button onClick={handleTable}>
        <UnorderedListOutlined />
      </Button>

      <>
        {isGird ? (
          <RoomGird rooms={rooms} />
        ) : (
          <RoomTable rooms={rooms} onReload={onReload} />
        )}
      </>
    </>
  );
};

export default RoomList;
