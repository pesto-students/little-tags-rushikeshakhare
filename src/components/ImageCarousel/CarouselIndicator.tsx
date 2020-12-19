import React from 'react';

interface ICarouselIndicator {
    active: boolean
}

export const CarouselIndicator = ({ active }: ICarouselIndicator) => {
    return (
        <span className={`carousel-indicators-item pointer ${active ? 'active' : ''}`} />
            
    )
}