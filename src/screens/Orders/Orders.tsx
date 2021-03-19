import React from 'react';
import { OrderItem } from '../../components';
import { ORDERS } from '../../AppConstants';
import { connect } from '../../store';
import { Cart } from '../../models/Cart';
import { showToast } from '../../utilities';
import { ROUTES } from '../../AppConfig';
import './orders.scss';

interface IOrdersProps {
  orders: any;
  history: any;
}

export const Orders = connect((state: any) => ({
  orders: state.orders.orders,
}))(({ orders, history }: IOrdersProps) => {
  if (!orders) orders = [];

  const myOrders = orders.map(({ product, quantity, size }: any) => {
    const { id, image, price, title: name, date } = product;
    const priceAndQuantity = `${price} x ${quantity}`;
    return { image, price: priceAndQuantity, name, date, id, product, size, quantity };
  });

  const onOrderAgainClick = (productDetails: any, quantity: number, size: any) => {
    const { message } = Cart.addItemToCart({
      product: productDetails,
      quantity,
      size,
    });
    showToast(message);
  };

  const onProductImageClick = (productID: number) => {
    history.push(ROUTES.PRODUCT_DETAILS(productID));
  };

  return (
    <div className='orders'>
      <h1 className='orders-title'>{ORDERS.SCREEN_TITLE}</h1>
      {myOrders.map((order: any) => (
        <OrderItem
          {...order}
          productAlreadyInCart={!!Cart.isProductAlreadyInCart(order.id, order.size)}
          onOrderAgainClick={(productDetails: any) =>
            onOrderAgainClick(productDetails, order.quantity, order.size)
          }
          onProductImageClick={onProductImageClick}
        />
      ))}
    </div>
  );
});
