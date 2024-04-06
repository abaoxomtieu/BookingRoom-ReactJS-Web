import { Badge, Card, Col, Row } from "antd";
import React from "react";

const RoomGird = (props) => {
    const {rooms} = props;
  return (
    <>
      <Row gutter={[20, 20]}>
        {rooms.map((item) => (
          <Col span={12} key={item.id}>
            <Badge.Ribbon
              text={item.typeRoom ? "Vip" : "Thường"}
              color={item.typeRoom ? "purple" : "gray"}
            >
              <Card title={`Phòng ${item.name}`}>
                <p>Số giường: {item.bedQuantity} </p>
                <p>Số người tối đa: {item.peopleQuantity} </p>
                <p>
                  {item.status ? (
                    <Badge status="success" text="Còn phòng" />
                  ) : (
                    <Badge status="error" text="Hết phòng" />
                  )}
                </p>
              </Card>
            </Badge.Ribbon>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default RoomGird;
