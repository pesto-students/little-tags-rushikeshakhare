import React from "react";
import { CartItem } from "../../components";
import { CART } from "../../AppConstants";
import { Cart as CartModel } from "../../models/Cart";
import { connect } from "../../store";
import { showToast } from "../../utilities";
import { ROUTES } from "../../AppConfig";
import iconEmptyCart from "../../assets/images/luggage-cart-solid.svg";
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

  const checkout = () => {
    history.push(ROUTES.SELECT_PAYMENT_METHOD);
  };

  const onProductClick = (id: number) => {
    history.push(ROUTES.PRODUCT_DETAILS(id));
  };

  return (
    <div className="cart">
      <h1 className="title">{CART.SCREEN_TITLE}</h1>

      { !cart.length &&
          <div className="cart-empty-msg text-center">
            <img src={iconEmptyCart} alt="cart empty image"/>
            <h2 className="text-center">{CART.EMPTY_CART_MESSAGE}</h2>
          </div>
      }

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
