import React, { useState, useEffect } from 'react';
import { ItemQuantity } from '../ItemQuantity/ItemQuantity';
import { CART_ITEM_REMOVE_BUTTON_TEXT } from '../../AppConstants';
import Image, { Shimmer } from 'react-shimmer';
import './CartItem.scss';

interface ICartItemProps {
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
}: ICartItemProps) => {
  const [quantity, setQuantity] = useState(defaultQuantity);

  const handleQuantityChange = (value: number) => {
    setQuantity(value);
    onQuantityChange(id, value);
  };

  useEffect(() => {
    setQuantity(defaultQuantity);
  }, [defaultQuantity]);

  return (
    <>
      <div className='cart-item item-center d-flex'>
        <div className='cart-item-image d-flex' onClick={() => onProductClick(id)}>
          <Image src={image} fallback={<Shimmer width={100} height={100} />} />
        </div>

        <div className='cart-item-content left'>
          <div className='cart-item-content-title'>{name}</div>
          <ItemQuantity quantity={quantity} handleChange={handleQuantityChange} />
          <button className='btn remove-btn' onClick={() => onRemoveButtonClick(id)}>
            {CART_ITEM_REMOVE_BUTTON_TEXT}
          </button>
        </div>
        <div className='cart-item-price right text-right'>
          <span> {`₹ ${price}`}</span>
        </div>
      </div>
    </>
  );
};
