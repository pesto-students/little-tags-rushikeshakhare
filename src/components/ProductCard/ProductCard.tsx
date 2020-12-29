import React from "react";
import "./ProductCard.scss";

interface IProductCard {
  image: string;
  name: string;
  price: string;
}

export const ProductCard = ({ name, image, price }: IProductCard) => {
  return (
    <div className="product-card item-center d-flex">
      <img
        src={image}
        alt={`Product - ${name}`}
        className="product-card-image d-flex"
      />

      <div className="product-card-text left">{name}</div>
      <div className="product-card-price right text-right"> ₹ {price} </div>
    </div>
  );
};
