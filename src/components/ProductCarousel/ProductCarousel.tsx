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
    showIndicators?: boolean;
}
export const ProductCarousel = ({ products, width, height, history, showIndicators = false }: IImageCarousel) => {

    const [state, setState] = useState({ activeIndex: 0, translate: 0, transition: 0.45 });
    const { activeIndex, translate, transition } = state;

    const itemsOnScreen = Math.floor(window.innerWidth / width);

    const next = () => {

        if (activeIndex > products.length - 1 - itemsOnScreen) 
            return;

        let newIndex: number = activeIndex + 1;
        
        setState({
            ...state,
            activeIndex: newIndex,
            translate: newIndex * width
        });

    }

    const previous = () => {
        let newIndex: number = activeIndex - 1;

        if (activeIndex === 0) 
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

            <CarouselNavigation handlePrevious={previous} handleNext={next} />

            {
                showIndicators &&
                <CarouselIndicators images={products} activeIndex={activeIndex} />
            }

        </div>
    )
}