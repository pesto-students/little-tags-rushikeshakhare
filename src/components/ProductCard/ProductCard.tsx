import React from 'react';
import "./ProductCard.scss";

interface IProductCard {
    image: string;
    name: string;
    price: string;
} 

export const ProductCard = (props: IProductCard) => {
    return (
        <div className="product-card item-center">
            <div className="product-card-image left" style={{ backgroundImage: `url(${props.image})` }}></div>
            <div className="product-card-text left">{props.name}</div>
            <div className="product-card-price right text-right"> ₹ {props.price} </div>
        </div>
    )
}