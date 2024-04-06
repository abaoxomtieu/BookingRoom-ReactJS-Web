import React, { useState } from "react";
import { bookRoom } from "../../../services/bookRoomService";
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Input,
  Radio,
  Row,
  Select,
  Space,
  Modal,
} from "antd";
const { RangePicker } = DatePicker;


const UpdateRoom = () => {
  const [data, setData] = useState({ time: "14 giờ" });

  const optionsTime = [];
  for (let i = 7; i < 25; i++) {
    optionsTime.push({
      label: i > 9 ? `${i} giờ` : `0${i} giờ`,
      value: i > 9 ? `${i} giờ` : `0${i} giờ`,
    });
  }
  const handChangeInput = (e) => {
    const object = {
      ...data,

      [e.target.name]: e.target.value,
    };
    setData(object);
  };

  const handChangeCheckbox = (e) => {
    const object = {
      ...data,

      services: e,
    };
    setData(object);
  };
  const handlePickDate = (_, date) => {
    const object = {
      ...data,

      date: date,
    };
    setData(object);
  };
  const handleRadio = (e) => {
    const object = {
      ...data,

      gift: e.target.value,
    };
    setData(object);
  };
  const handleChangeSelect = (e) => {
    const object = {
      ...data,

      time: e,
    };
    setData(object);
  };
  const handleSubmit = async () => {
    const response = await bookRoom(data);
    if (response) {
      Modal.success({
        content: "Đặt phòng thành công!",
        centered: true,
      });
    } else {
      Modal.error({
        title: "Error",
        content: "Đặt phòng không thành công!",
      });
    }
  };

  console.log(data);
  return (
    <>
      <h2>Đặt phòng</h2>
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <p>Họ tên</p>
          <Input
            name="fullName"
            placeholder="Ví dụ: Lê Văn A"
            onChange={handChangeInput}
          ></Input>
        </Col>
        <Col span={12}>
          <p>Số điện thoại</p>
          <Input
            name="phone"
            placeholder="Ví dụ: 0123456789"
            onChange={handChangeInput}
          ></Input>
        </Col>
        <Col span={12}>
          <p>Email</p>
          <Input
            name="email"
            placeholder="Ví dụ: levana@gmail.com"
            onChange={handChangeInput}
          ></Input>
        </Col>
        <Col span={12}>
          <p>Dịch vụ thêm</p>
          <Checkbox.Group onChange={handChangeCheckbox} name="services">
            <Space direction="vertical">
              <Checkbox value="Thuê xe máy">Thuê xe máy</Checkbox>
              <Checkbox value="Thuê ô tô 4 chỗ">Thuê ô tô 4 chỗ</Checkbox>
              <Checkbox value="Thuê ô tô 7 chỗ">Thuê ô tô 7 chỗ</Checkbox>
              <Checkbox value="Thuê ô tô 16 chỗ">Thuê ô tô 16 chỗ</Checkbox>
            </Space>
          </Checkbox.Group>
        </Col>
        <Col span={12}>
          <p>Quà tặng</p>
          <Radio.Group onChange={handleRadio} name="gift">
            <Space direction="vertical">
              <Radio value="Một em ghệ xinh tươi">Một em ghệ xinh tươi</Radio>
              <Radio value="Karaoke free">Karaoke free</Radio>
              <Radio value="1 thùng Heniken">1 thùng Heniken</Radio>
              <Radio value="3kg thịt heo">3kg thịt heo</Radio>
            </Space>
          </Radio.Group>
        </Col>
        <Col span={8}>
          <p>Chọn ngày</p>
          <Space direction="vertical">
            <RangePicker
              format={"DD/MM/YYYY"}
              placeholder={["Nhận phòng", "Trả phòng"]}
              onChange={handlePickDate}
            />
          </Space>
        </Col>
        <Col span={12}>
          <p>Giờ nhận phòng</p>

          <Select
            onChange={handleChangeSelect}
            defaultValue={data.time}
            style={{ width: "100px" }}
            options={optionsTime}
          />
        </Col>

        <Col span={24}>
          <Button type={"primary"} onClick={handleSubmit}>
            Đặt phòng
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default UpdateRoom;
