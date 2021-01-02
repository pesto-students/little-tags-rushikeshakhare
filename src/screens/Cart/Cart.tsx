import React, { useState, useEffect } from "react";
import { CartItem } from "../../components";
import { Cart as CartModel } from "../../Cart";
import { withContainer } from "../../hocs/withContainer";
import { connect } from "../../store";
import { showToast } from "../../utilities";
import { initPaymentRazorpay } from "../../services";
import { Order } from "../../Order";
import "./Cart.scss";

export const Cart = connect()(
  withContainer(({ cart, history }: any) => {
    const handleQuantityChange = (productID: any, quantity: any) => {
      CartModel.updateItemInCart(productID, quantity);
    };

    const onRemoveButtonClick = (productID: number) => {
      const { message } = CartModel.removeItemFromCart(productID);
      showToast(message);
    };

    const checkout = () => {

      const totalPrice = cart.map(
        (
          { product: { price }, quantity }: any,
        ) => (
          price * quantity
      )).reduce((a: number, b: number) => a + b, 0);

      const description = "Order on " + Date.now().toLocaleString();

      initPaymentRazorpay(totalPrice, description)
      .then((res: any) => {
        
        console.log("in here!!");

        // Adding items to my orders
        Order.addItemsToPastOrders(cart);

        // clearing cart
        CartModel.setCart([]);

        history.push("/cart");
      })
      
    }

    return (
      <div className="cart">
        <h1 className="title">Your Cart</h1>
        {!cart.length && <h2>No Items Added to Cart Yet</h2>}

        {cart.map(
          (
            { product: { image, title, price, id }, quantity }: any,
            index: number
          ) => (
            <div key={`${index}-${title}`} className="cart-item-container">
              <CartItem
                id={id}
                image={image}
                name={title}
                price={(price * quantity).toFixed(2)}
                onQuantityChange={handleQuantityChange}
                onRemoveButtonClick={onRemoveButtonClick}
                defaultQuantity={quantity}
              />
            </div>
          )
        )}
        {!!cart.length && (
          <button onClick={checkout} className="btn checkout-btn">Checkout</button>
        )}
      </div>
    );
  })
);
