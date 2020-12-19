import React from 'react';

interface ICarouselItem {
    content: any;
}
export const CarouselItem = ({ content }: ICarouselItem) => {
    return (
        <div className="carousel-item" style={{backgroundImage: `url(${content})`}}>
        </div>
    )
}