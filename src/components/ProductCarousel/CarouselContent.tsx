import React, { ReactNode } from 'react';

interface ICarouselContent {
    translate: number;
    transition: number;
    width: number;
    children: ReactNode;
}
export const CarouselContent = ({ translate, transition, width, children }: ICarouselContent) => {
    return (

        <div className="carousel-frame">
            <div className="carousel-content"
                style={{transform: `translateX(-${translate}px)`,
                        transition: `transform ease-out ${transition}s`,
                        width: `${width}px`}}
            >
                { children }
            </div>
        </div>
        
    )
} 