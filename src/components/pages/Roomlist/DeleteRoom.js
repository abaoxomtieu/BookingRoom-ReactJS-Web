import { Button, Modal, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import React from "react";
import { deleteRoom } from "../../../services/roomsService";

const DeleteRoom = (props) => {
  const { record, onReload } = props;

  const handleDelete = async () => {
    console.log(record.id);
    const response = await deleteRoom(record.id);
    if (response) {
      Modal.success({
        content: "Đã xóa phòng!",
        centered: true,
      });
      onReload();
    } else {
      Modal.error({
        title: "Lỗi",
        content: "Xóa phòng không thành công!",
      });
    }
  };
  return (
    <>
      <Popconfirm
        title="Sure to delete?"
        onConfirm={() => handleDelete(record.key)}
      >
        <Button>
          <DeleteOutlined />
        </Button>
      </Popconfirm>
    </>
  );
};

export default DeleteRoom;
