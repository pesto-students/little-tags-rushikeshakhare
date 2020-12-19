import React, { ReactNode } from 'react';

interface ICarouselContent {
    translate: number;
    transition: number;
    width: number;
    children: ReactNode;
}
export const CarouselContent = (props: ICarouselContent) => {
    return (

        <div className="carousel-frame">
            <div className="carousel-content"
                style={{transform: `translateX(-${props.translate}px)`,
                        transition: `transform ease-out ${props.transition}s`,
                        width: `${props.width}px`}}
            >
                { props.children }
            </div>
        </div>
        
    )
} 