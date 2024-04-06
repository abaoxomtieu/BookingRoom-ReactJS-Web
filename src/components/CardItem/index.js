import React from "react";
import "./CardItem.scss";
const CardItem = (props) => {
  const { logo, color } = props;
  return (
    <>
      <div className="card__item">
        <div
          className="card__logo"
          style={{ background: color, color: "white" }}
        >
          {logo}
        </div>
        <div className="card__content">
          <div className="card__title">50,000$</div>
          <div className="card__subtitle">Profit</div>
        </div>
      </div>
    </>
  );
};

export default CardItem;
