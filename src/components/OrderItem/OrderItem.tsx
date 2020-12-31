import React from "react";
import { months } from "../../mockData";
import "./orderItem.scss";

export const OrderItem = ({ image, price, name, date }: any) => {
  const getDate = () => {
    const [month, day, year]: any = new Date(date).toLocaleDateString("en-US").split("/");
    return `${day} ${months[month - 1]} ${year}`;
  };

  return (
    <div className="order-item d-flex">
      <div
        className="order-item-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="order-item-details">
        <h2 className="product-name">{name}</h2>
        <h4 className="product-price"> ₹ {price}</h4>
        <h4 className="product-date">{getDate()}</h4>
      </div>
      <div className="order-item-action d-flex">
        <button className="btn order-again-btn">ORDER AGAIN</button>
      </div>
    </div>
  );
};
