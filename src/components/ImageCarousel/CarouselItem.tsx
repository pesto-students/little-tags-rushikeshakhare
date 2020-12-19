import React from 'react';

interface ICarouselItem {
    content: any;
}
export const CarouselItem = (props: ICarouselItem) => {
    return (
        <div className="carousel-item" style={{backgroundImage: `url(${props.content})`}}>
        </div>
    )
}