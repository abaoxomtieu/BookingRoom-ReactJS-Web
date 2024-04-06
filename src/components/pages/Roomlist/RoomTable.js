import { Col, Row, Table, Tag, Tooltip } from "antd";
import DeleteRoom from "./DeleteRoom";
import UpdateRoom from "./UpdateRoom";
const RoomTable = (props) => {
  const { rooms, onReload } = props;

  const columns = [
    {
      align: "center",
      title: "Số phòng",
      dataIndex: "name",
      key: "name",
    },
    {
      align: "center",
      title: "Số giường",
      dataIndex: "bedQuantity",
      key: "bedQuantity",
    },
    {
      align: "center",
      title: "Số người tối đa",
      dataIndex: "peopleQuantity",
      key: "peopleQuantity",
    },
    {
      align: "center",
      title: "Loại phòng",
      dataIndex: "typeRoom",
      key: "typeRoom",
      render: (_, record) => {
        return (
          <>
            {record.typeRoom ? (
              <Tooltip
                placement="topLeft"
                title={"Có đầy đủ tiện nghi + đồ ăn sáng, tối"}
              >
                <Tag color="purple">VIP</Tag>
              </Tooltip>
            ) : (
              <Tooltip
                placement="topLeft"
                title={
                  "Chỉ bao gồm các dịch vụ ở phòng, không bao gồm thức ăn sáng và BBQ"
                }
              >
                <Tag color="gray">Tiêu chuẩn</Tag>
              </Tooltip>
            )}
          </>
        );
      },
    },
    {
      align: "center",
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (_, record) => {
        return (
          <>
            {record.status ? (
              <Tag color="green">Còn phòng</Tag>
            ) : (
              <Tag color="red">Hết phòng</Tag>
            )}
          </>
        );
      },
    },
    {
      align: "center",
      title: "Hành động",
      dataIndex: "operation",
      render: (_, record) => {
        return (
          <>
            <Row>
              <Col span={12}>
                <DeleteRoom record={record} onReload={onReload} />
              </Col>
              <Col span={12}>
                <UpdateRoom record={record} onReload={onReload} />
              </Col>
            </Row>
          </>
        );
      },
    },
  ];
  return (
    <>
      <Table dataSource={rooms} columns={columns} rowKey="id" />;
    </>
  );
};

export default RoomTable;
