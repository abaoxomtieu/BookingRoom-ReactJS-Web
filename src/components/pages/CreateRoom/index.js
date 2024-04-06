import { Button, Form, Input, InputNumber, Modal, Select, Switch } from "antd";
import { Option } from "antd/es/mentions";
import React from "react";
import { createRoom } from "../../../services/roomsService";
const CreateRoom = () => {
  const rules = [
    {
      required: true,
      message: "Bắt buộc!",
    },
  ];
  const [form] = Form.useForm();
  const handleSubmit = async (values) => {
    values.id = values.name;
    const response = await createRoom(values);
    if (response) {
      Modal.success({
        content: "Tạo phòng thành công!",
        centered: true,
      });
      form.resetFields();
    } else {
      Modal.error({
        title: "Error",
        content: "Tạo phòng không thành công!",
      });
    }
  };

  return (
    <>
      <h2>Thêm phòng mới</h2>
      <Form
        name="create-room"
        onFinish={handleSubmit}
        layout={"vertical"}
        form={form}
      >
        <Form.Item label="Tên phòng" name="name" rules={rules}>
          <Input />
        </Form.Item>
        <Form.Item label="Số lượng giường" name="bedQuantity" rules={rules}>
          <InputNumber min={1} max={10} />
        </Form.Item>
        <Form.Item label="Số người tối đa" name="peopleQuantity" rules={rules}>
          <InputNumber min={1} max={20} />
        </Form.Item>
        <Form.Item label="Mô tả" name="desc" rules={rules}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="utils" label="Tiện ích" rules={rules}>
          <Select mode="multiple" placeholder="Select utils" allowClear={true}>
            <Option value="Wifi">Wifi</Option>
            <Option value="Nóng lạnh">Nóng lạnh</Option>
            <Option value="Điều hòa">Điều hòa</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Trạng thái" name="status" valuePropName="checked">
          <Switch checkedChildren="Còn phòng" unCheckedChildren="Hết phòng" />
        </Form.Item>
        <Form.Item label="Loại phòng" name="typeRoom" valuePropName="checked">
          <Switch checkedChildren="Vip" unCheckedChildren="Thường" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Tạo mới
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateRoom;
