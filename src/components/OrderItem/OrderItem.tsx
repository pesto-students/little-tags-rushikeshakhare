import React from 'react';
import { months } from '../../mockData';
import { ORDER_ITEM_ORDER_AGAIN_TEXT, PRODUCT_DETAILS } from '../../AppConstants';
import Image, { Shimmer } from 'react-shimmer';
import './orderItem.scss';

export const OrderItem = ({
  product,
  image,
  price,
  name,
  date,
  size,
  productAlreadyInCart,
  onOrderAgainClick,
  onProductImageClick,
}: any) => {
  const getDate = () => {
    const [month, day, year]: any = new Date(date).toLocaleDateString('en-US').split('/');
    return `${day} ${months[month - 1]} ${year}`;
  };

  return (
    <div className='order-item d-flex'>
      <div className='order-item-image d-flex'>
        <Image src={image} fallback={<Shimmer width={100} height={100} />} />
      </div>

      <div className='order-item-details'>
        <h2 className='product-name'>
          {name} {size && `(Size : ${size.toUpperCase()})`}
        </h2>
        <h4 className='product-price'> ₹ {price}</h4>
        <h4 className='product-date'>{getDate()}</h4>
      </div>
      <div className='order-item-action d-flex'>
        {productAlreadyInCart ? (
          PRODUCT_DETAILS.ADDED_TO_CART_MESSAGE
        ) : (
          <button className='btn order-again-btn' onClick={() => onOrderAgainClick(product)}>
            {ORDER_ITEM_ORDER_AGAIN_TEXT}
          </button>
        )}
      </div>
    </div>
  );
};
