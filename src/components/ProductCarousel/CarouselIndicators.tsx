import React from 'react';
import { CarouselIndicator } from './CarouselIndicator';

interface ICarouselIndicators {
    images: string[];
    activeIndex: number;
}

export const CarouselIndicators = ({ images, activeIndex }: ICarouselIndicators) => (
    <div className="carousel-indicators">
        {
            images.map((image, index) => (
                <CarouselIndicator key={`navigator-${index}`} active={index === activeIndex} />
            ))
        }
    </div>
)

