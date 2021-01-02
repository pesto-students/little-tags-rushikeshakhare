import React from "react";
import { CartItem } from "../../components";
import { CART } from "../../AppConstants";
import { Cart as CartModel } from "../../models/Cart";
import { connect } from "../../store";
import { showToast } from "../../utilities";
import "./Cart.scss";

interface ICartProps {
  cart: any;
  history: any;
}

export const Cart = connect()(({ cart, history }: ICartProps) => {
  const handleQuantityChange = (productID: number, quantity: number) => {
    CartModel.updateItemInCart(productID, quantity);
  };

  const onRemoveButtonClick = (productID: number) => {
    const { message } = CartModel.removeItemFromCart(productID);
    showToast(message);
  };
  console.log(JSON.parse(localStorage.getItem("ADDRESS") || ""));

  const checkout = () => {
    history.push("/select-payment-method");
  };

  const onProductClick = (id: number) => {
    history.push(`/product-details/${id}`);
  };

  return (
    <div className="cart">
      <h1 className="title">{CART.SCREEN_TITLE}</h1>
      {!cart.length && <h2>{CART.EMPTY_CART_MESSAGE}</h2>}

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
              onProductClick={onProductClick}
              defaultQuantity={quantity}
            />
          </div>
        )
      )}
      {!!cart.length && (
        <button onClick={checkout} className="btn checkout-btn">
          {CART.CHECKOUT_TITLE}
        </button>
      )}
    </div>
  );
});
