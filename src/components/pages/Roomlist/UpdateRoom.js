import React, { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Spin,
  Switch,
  message,
} from "antd";
import { Option } from "antd/es/mentions";
import { editRoom } from "../../../services/roomsService";
const UpdateRoom = (props) => {
  const { record, onReload } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [isSpinning, setIsSpinning] = useState(false);
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Cập nhật thông tin thành công!",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Cập nhật thông tin thất bại!",
    });
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const rules = [
    {
      required: true,
      message: "Bắt buộc!",
    },
  ];
  const handleSubmit = async (values) => {
    setIsSpinning(true);
    const response = await editRoom(record.id, values);
    setTimeout(() => {
      if (response) {
        setIsModalOpen(false);
        success();
        setIsSpinning(false);
        onReload();
      } else {
        error();
        setIsSpinning(false);
      }
    }, 2000);
  };

  return (
    <>
      {contextHolder}
      <Button onClick={showModal}>
        <EditOutlined />
      </Button>
      <Modal
        title={`Cập nhật thông tin phòng ${record.id}`}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Spin tip={"Đang cập nhật thông tin"} spinning={isSpinning}>
          <Form
            name="create-room"
            onFinish={handleSubmit}
            layout={"vertical"}
            form={form}
            initialValues={record}
          >
            <Form.Item label="Tên phòng" name="name" rules={rules}>
              <Input />
            </Form.Item>
            <Form.Item label="Số lượng giường" name="bedQuantity" rules={rules}>
              <InputNumber min={1} max={10} />
            </Form.Item>
            <Form.Item
              label="Số người tối đa"
              name="peopleQuantity"
              rules={rules}
            >
              <InputNumber min={1} max={20} />
            </Form.Item>
            <Form.Item label="Mô tả" name="desc" rules={rules}>
              <Input.TextArea />
            </Form.Item>
            <Form.Item name="utils" label="Tiện ích" rules={rules}>
              <Select
                mode="multiple"
                placeholder="Select utils"
                allowClear={true}
              >
                <Option value="Wifi">Wifi</Option>
                <Option value="Nóng lạnh">Nóng lạnh</Option>
                <Option value="Điều hòa">Điều hòa</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Trạng thái" name="status" valuePropName="checked">
              <Switch
                checkedChildren="Còn phòng"
                unCheckedChildren="Hết phòng"
              />
            </Form.Item>
            <Form.Item
              label="Loại phòng"
              name="typeRoom"
              valuePropName="checked"
            >
              <Switch checkedChildren="Vip" unCheckedChildren="Thường" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </Modal>
    </>
  );
};

export default UpdateRoom;
