import React, { useState } from 'react';
import { ItemQuantity } from '../ItemQuantity/ItemQuantity';
import "./CartItem.scss";

interface ICartItem {
    image: string;
    name: string;
    price: string;
    onQuantityChange: (value: number) => void;
}

export const CartItem = ({ image, name, price, onQuantityChange }: ICartItem) => {

    const [quantity, setQualtity] = useState(1);
    const handleQuantityChange = (value: number) => {
        setQualtity(value);
        onQuantityChange(value);
    }

    return (
        <div className="cart-item item-center">
            <div className="cart-item-image left" style={{ backgroundImage: `url(${image})` }}></div>
            
            <div className="cart-item-content left">
                <div className="cart-item-detail">
                    <div className="cart-item-text left">{name}</div>
                    <div className="cart-item-price right text-right"> ₹ {price} </div>
                </div>

                <div className="cart-item-quantity-edit">
                    <ItemQuantity quantity={quantity} handleChange={handleQuantityChange} />
                </div>
                
            </div>
        </div>
    )
}