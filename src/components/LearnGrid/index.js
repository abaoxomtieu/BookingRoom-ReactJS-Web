import React from "react";
import { Col, Row } from "antd";
import CardItem from "../CardItem";
import {
  DollarOutlined,
  LineChartOutlined,
  BarsOutlined,
  UserOutlined,
} from "@ant-design/icons";

const LearnGird = () => {
  return (
    <>
      <Row gutter={[20, 20]} justify={"center"}>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CardItem color={"#3F87F5"}  title="Box1" logo={<DollarOutlined />} />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CardItem color={"#39D5BB"} title="Box2" logo={<LineChartOutlined />} />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CardItem color={"#FFCF3F"} title="Box3" logo={<BarsOutlined />} />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CardItem color={"#886CFF"} title="Box4" logo={<UserOutlined />} />
        </Col>
      </Row>
      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
          <CardItem title="Box5" style={{ height: "400px" }} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box6" style={{ height: "400px" }} />
        </Col>
      </Row>
      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box7" style={{ height: "400px" }} />
        </Col>
        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
          <CardItem title="Box8" style={{ height: "400px" }} />
        </Col>
      </Row>
      <Row gutter={[20, 20]} justify={"center"} className="mt-20">
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box9" style={{ height: "400px" }} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box10" style={{ height: "400px" }} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box11" style={{ height: "400px" }} />
        </Col>
      </Row>
    </>
  );
};

export default LearnGird;
