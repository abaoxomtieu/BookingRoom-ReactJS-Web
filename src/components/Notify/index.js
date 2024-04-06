import { Button, Dropdown } from "antd";
import { BellOutlined, MailOutlined, BarChartOutlined } from "@ant-design/icons";
import React from "react";
import "./Notify.scss";
const Notify = () => {
  const items = [
    {
      label: (
        <div className="notify__item">
          <div className="notify__item--icon">
            <MailOutlined />
          </div>
          <div className="notify__item--content">
            <div className="notify__item--title">
              You received a new message
            </div>
            <div className="notify__item--time">8 min ago</div>
          </div>
        </div>
      ),  
      key: "1",
    },
    {
      label: (
        <div className="notify__item">
          <div className="notify__item--icon" style={{ background: "orange" }}>
            <BellOutlined />
          </div>
          <div className="notify__item--content">
            <div className="notify__item--title">
              You received a new message
            </div>
            <div className="notify__item--time">8 min ago</div>
          </div>
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div className="notify__item">
          <div className="notify__item--icon" style={{ background: "#ec5151" }}>
          <BarChartOutlined />
          </div>
          <div className="notify__item--content">
            <div className="notify__item--title">
              You received a new message
            </div>
            <div className="notify__item--time">8 min ago</div>
          </div>
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div className="notify__item">
          <div className="notify__item--icon">
            <MailOutlined />
          </div>
          <div className="notify__item--content">
            <div className="notify__item--title">
              You received a new message
            </div>
            <div className="notify__item--time">8 min ago</div>
          </div>
        </div>
      ),
      key: "1",
    },
  ];
  return (
    <>
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        dropdownRender={(menu) => (
          <>
            <div
              className="notify__dropdown"
              style={{
                backgroundColor: "#ffffff",
                height: "150px",
                width: "200px",
              }}
            >
              <div className="notify__header">
                <div className="notify__header--title">
                  <BellOutlined /> Notification
                </div>
                <Button type="link" style={{ fontSize: "13px" }}>
                  View All
                </Button>
              </div>
              <div className="notify__body">{menu}</div>
            </div>
          </>
        )}
      >
        <Button
          icon={<BellOutlined style={{ fontSize: "20px" }} />}
          type="text"
        ></Button>
      </Dropdown>
    </>
  );
};

export default Notify;
