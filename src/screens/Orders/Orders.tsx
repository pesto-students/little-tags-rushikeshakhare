import React from "react";
import { OrderItem } from "../../components";
import { ORDERS } from "../../AppConstants";
import { connect } from "../../store";
import "./orders.scss";

export const Orders = connect()(({ orders }: any) => {
  if (!orders) orders = [];

  const myOrders = orders.map(
    ({ product: { image, price, title: name, date }, quantity }: any) => {
      const priceAndQuantity = `${price} x ${quantity}`;
      return { image, price: priceAndQuantity, name, date };
    }
  );

  return (
    <div className="orders">
      <h1 className="orders-title">{ORDERS.SCREEN_TITLE}</h1>
      {myOrders.map((order: any) => (
        <OrderItem {...order} />
      ))}
    </div>
  );
});
