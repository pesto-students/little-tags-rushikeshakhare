import React, { useState } from 'react';
import { CarouselContent } from './CarouselContent';
import { CarouselItem } from './CarouselItem';
import { CarouselNavigation } from './CarouselNavigation';
import { CarouselIndicators } from './CarouselIndicators';
import './ImageCarousel.scss';

interface IImageCarousel {
    images: string[];   // List of impoted images
    width: number;      // width in pixels
    height: number;     // Height in pixels
}
export const ImageCarousel = (props: IImageCarousel) => {

    const [state, setState] = useState({ activeIndex: 0, translate: 0, transition: 0.45 });
    const { activeIndex, translate, transition } = state;

    const next = () => {
        
        let newIndex: number = activeIndex + 1;

        if (activeIndex === props.images.length - 1) 
            newIndex = 0;
        
        setState({
            ...state,
            activeIndex: newIndex,
            translate: newIndex * props.width
        });

    }

    return (
        <div className="carousel" style={{ width: `${props.width}px`, height: `${props.height}px` }}>
            <CarouselContent
                translate={translate}
                transition={transition}
                width={props.width * props.images.length}
            >
                {props.images.map((image, index) => (
                    <CarouselItem key={image} content={image} />
                ))}   

            </CarouselContent>

            <CarouselNavigation handleClick={next} />

            <CarouselIndicators images={props.images} activeIndex={activeIndex} />

        </div>
    )
}