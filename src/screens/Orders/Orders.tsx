import React from "react";
import { OrderItem } from "../../components";
import { withContainer } from "../../hocs/withContainer";
import imgCart1 from "../../assets/images/product-1.jpg";
import imgCart2 from "../../assets/images/product-2.jpg";
import imgCart3 from "../../assets/images/product-3.jpg";
import imgCart4 from "../../assets/images/product-4.jpg";
import { connect } from "../../store";
import "./orders.scss";

export const products = [
  { image: imgCart1, name: "Product 1", price: 1200, date: new Date() },
  { image: imgCart2, name: "Product 2", price: 200, date: new Date() },
  { image: imgCart3, name: "Product 3", price: 27800, date: new Date() },
  { image: imgCart4, name: "Product 4", price: 1000, date: new Date() },
];

export const Orders = connect()(
  withContainer(({ orders }: any) => {

    if (!orders) orders = [];

    const myOrders = orders.map(
      (
        { product: { image, price, title: name, date }, quantity }: any,
      ) => {
        const priceAndQuantity = `${price} x ${quantity}`;
        return { image, price: priceAndQuantity, name, date};
      }
    )

    return (
      <div className="orders">
        <h1 className="orders-title">Your Orders</h1>
        {myOrders.map((order: any) => (
          <OrderItem {...order} />
        ))}
      </div>
    );
  })
);
