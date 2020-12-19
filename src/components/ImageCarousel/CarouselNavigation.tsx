import React from 'react';
import arrowRight from '../../assets/images/arrow-right-white.svg';

interface ICarouselNavigation {
    handleClick: () => void;
}

export const CarouselNavigation = (props: ICarouselNavigation) => {

    return (
        <button onClick={props.handleClick} className="carousel-next-btn btn-flat">
            <img src={arrowRight} />
        </button>
    )
}