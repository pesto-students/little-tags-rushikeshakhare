import React from 'react';

interface ICarouselIndicator {
    active: boolean
}

export const CarouselIndicator = (props: ICarouselIndicator) => {
    return (
        <span className={`carousel-indicators-item pointer ${props.active ? 'active' : ''}`} />
            
    )
}