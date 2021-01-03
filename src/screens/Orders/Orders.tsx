import React from "react";
import { OrderItem } from "../../components";
import { ORDERS } from "../../AppConstants";
import { connect } from "../../store";
import { Cart } from "../../models/Cart";
import { showToast } from "../../utilities";
import "./orders.scss";
import { ROUTES } from "../../AppConfig";

interface IOrdersProps {
  orders: any;
  history: any;
}

export const Orders = connect((state: any) => ({
  orders: state.orders.orders,
}))(({ orders, history }: IOrdersProps) => {
  if (!orders) orders = [];

  const myOrders = orders.map(({ product, quantity }: any) => {
    const { id, image, price, title: name, date } = product;
    const priceAndQuantity = `${price} x ${quantity}`;
    return { image, price: priceAndQuantity, name, date, id, product };
  });

  const onOrderAgainClick = (productDetails: any) => {
    const { message } = Cart.addItemToCart({
      product: productDetails,
      quantity: 1,
    });
    showToast(message);
  };

  const onProductImageClick = (productID: number) => {
    history.push(ROUTES.PRODUCT_DETAILS(productID));
  };

  return (
    <div className="orders">
      <h1 className="orders-title">{ORDERS.SCREEN_TITLE}</h1>
      {myOrders.map((order: any) => (
        <OrderItem
          {...order}
          productAlreadyInCart={!!Cart.isProductAlreadyInCart(order.id)}
          onOrderAgainClick={onOrderAgainClick}
          onProductImageClick={onProductImageClick}
        />
      ))}
    </div>
  );
});
