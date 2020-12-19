import React from 'react';
import iconMinus from '../../assets/images/minus-solid.svg'
import iconPlus from '../../assets/images/plus-solid.svg';
import './ItemQuantity.scss';

interface IItemQuantity {
    quantity: number;
    itemsAvailable?: number;
    handleChange: (value: number) => void;
}
export const ItemQuantity = ({ quantity, itemsAvailable, handleChange }: IItemQuantity) => {
    
    const changeQuantity = (value: number)  =>{
        const result = quantity + value;
        if (result < 1 || (itemsAvailable && result > itemsAvailable))
            return;

        handleChange(result);
    }

    return (
        <div className="quantity">
            <button onClick={() => changeQuantity(-1)} className="quantity-btn btn-flat left pointer">
                <img alt="Decrease Item" src={iconMinus} ></img>
            </button>

            <button onClick={() => changeQuantity(1)} className="quantity-btn btn-flat right pointer">
                <img alt="Increase Item" src={iconPlus} ></img>
            </button>

            <div className="quantity-value text-center">
                {quantity}
            </div>
        </div>
    )
}