import React, { Component } from 'react';
import { CartItem } from '../../components';
import imgCart1 from '../../assets/images/product-1.jpg';
import imgCart2 from '../../assets/images/product-2.jpg';
import imgCart3 from '../../assets/images/product-3.jpg';
import imgCart4 from '../../assets/images/product-4.jpg';
import imgCart5 from '../../assets/images/product-5.jpg';
import './Cart.scss';

export class Cart extends Component<any, any> {

    handleQuantityChange = (index: number, value: number) => {

    }

    render() {
        
        const images = [imgCart1, imgCart2, imgCart3, imgCart4, imgCart5];
        const names = ['Hello world', 'FE Cart', 'Awesome T-Shirt', 'Shorts', 'No idea'];
        const prices = ['1200.00', '400.00', '399.99', '699.00', '3000.00'];

        return (
            <div className="cart">
                <h1 className="title">Your Cart</h1>

                {
                    images.map((img, index) => (
                        <div key={`${index}-${names[index]}`} className="cart-item-container">
                            <CartItem image={img} name={names[index]} price={prices[index]} onQuantityChange={(value) => this.handleQuantityChange(index, value)} />
                        </div>
                    ))
                }

                
            </div>
        )
    }
}