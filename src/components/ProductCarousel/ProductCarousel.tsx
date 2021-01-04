import React, { useState } from 'react';
import { CarouselContent } from './CarouselContent';
import { CarouselItem } from './CarouselItem';
import { CarouselNavigation } from './CarouselNavigation';
import { CarouselIndicators } from './CarouselIndicators';
import './ProductCarousel.scss';

interface IImageCarousel {
    products: any[];
    width: number;      // width in pixels
    height: number;     // Height in pixels
    history: any;
}
export const ProductCarousel = ({ products, width, height, history }: IImageCarousel) => {

    const [state, setState] = useState({ activeIndex: 0, translate: 0, transition: 0.45 });
    const { activeIndex, translate, transition } = state;

    const next = () => {
        
        let newIndex: number = activeIndex + 1;

        if (activeIndex === products.length - 1) 
            newIndex = 0;
        
        setState({
            ...state,
            activeIndex: newIndex,
            translate: newIndex * width
        });

    }

    return (
        <div className="product-carousel" style={{ width: `100%`, height: `${height}px` }}>
            <CarouselContent
                translate={translate}
                transition={transition}
                width={width * products.length}
            >
                {products.map((product, index) => (
                    <CarouselItem key={`${index}-${product.title}`} content={product.image} id={product.id} title={product.title} history={history} />
                ))}   

            </CarouselContent>

            <CarouselNavigation handleClick={next} />

            <CarouselIndicators images={products} activeIndex={activeIndex} />

        </div>
    )
}