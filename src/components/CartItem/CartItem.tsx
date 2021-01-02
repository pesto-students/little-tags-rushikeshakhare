import React, { useState, useEffect } from "react";
import { ItemQuantity } from "../ItemQuantity/ItemQuantity";
import { CART_ITEM_REMOVE_BUTTON_TEXT } from "../../AppConstants";
import "./CartItem.scss";

interface ICartItem {
  id: number;
  image: string;
  name: string;
  price: any;
  onQuantityChange: (id: number, quantity: number) => void;
  defaultQuantity: number;
  onRemoveButtonClick: (id: number) => void;
  onProductClick: (id: number) => void;
}

export const CartItem = ({
  id,
  image,
  name,
  price,
  onQuantityChange,
  defaultQuantity,
  onRemoveButtonClick,
  onProductClick,
}: ICartItem) => {
  const [quantity, setQuantity] = useState(defaultQuantity);

  const handleQuantityChange = (value: number) => {
    setQuantity(value);
    onQuantityChange(id, value);
  };

  useEffect(() => {
    setQuantity(defaultQuantity);
  }, [defaultQuantity]);

  return (
    <div className="cart-item item-center d-flex">
      <img
        src={image}
        alt={`Product - ${name}`}
        className="cart-item-image"
        onClick={() => onProductClick(id)}
      />

      <div className="cart-item-content left">
        <div className="cart-item-detail">
          <div className="cart-item-text left">{name}</div>
          <div className="cart-item-price right text-right"> ₹ {price} </div>
        </div>

        <div className="cart-item-quantity-edit">
          <ItemQuantity
            quantity={quantity}
            handleChange={handleQuantityChange}
          />
          <button
            className="btn remove-btn"
            onClick={() => onRemoveButtonClick(id)}
          >
            {CART_ITEM_REMOVE_BUTTON_TEXT}
          </button>
        </div>
      </div>
    </div>
  );
};
