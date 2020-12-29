import React, { useState, useEffect } from "react";
import { CartItem } from "../../components";
import { Cart as CartModel } from "../../Cart";
import { withContainer } from "../../hocs/withContainer";
import { connect } from "../../store";
import "./Cart.scss";

export const Cart = connect()(
  withContainer(({ cart }: any) => {
    const [refresh, setRefresh] = useState(false);

    const handleQuantityChange = (productID: any, quantity: any) => {
      CartModel.updateItemInCart(productID, quantity);
    };

    const onRemoveButtonClick = (productID: number) => {
      CartModel.removeItemFromCart(productID);
    };

    useEffect(() => {
      setRefresh(!refresh);
    }, [cart]);

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
          <button className="btn checkout-btn">Checkout</button>
        )}
      </div>
    );
  })
);
