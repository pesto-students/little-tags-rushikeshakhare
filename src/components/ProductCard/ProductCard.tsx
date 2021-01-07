import React from 'react';
import Image, { Shimmer } from 'react-shimmer';
import './ProductCard.scss';

interface IProductCard {
  image: string;
  name: string;
  price: string;
}

export const ProductCard = ({ name, image, price }: IProductCard) => {
  return (
    <div className='product-card item-center d-flex'>
      <div className='product-card-image d-flex'>
        <Image src={image} fallback={<Shimmer width={100} height={100} />} />
      </div>

      <div className='product-card-text left'>{name}</div>
      <div className='product-card-price right text-right'>
        <span> {`₹ ${price}`}</span>
      </div>
    </div>
  );
};
