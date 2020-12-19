import React from 'react';
import { CarouselIndicator } from './CarouselIndicator';

interface ICarouselIndicators {
    images: string[];
    activeIndex: number;
}

export const CarouselIndicators = (props: ICarouselIndicators) => (
    <div className="carousel-indicators">
        {
            props.images.map((image, index) => (
                <CarouselIndicator key={`navigator-${image}`} active={index === props.activeIndex} />
            ))
        }
    </div>
)

