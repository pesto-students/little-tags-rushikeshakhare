import React from 'react';
import arrowRight from '../../assets/images/arrow-right-white.svg';

interface ICarouselNavigation {
    handleClick: () => void;
}

export const CarouselNavigation = ({ handleClick }: ICarouselNavigation) => {

    return (
        <button onClick={handleClick} className="carousel-next-btn btn-flat">
            <img src={arrowRight} />
        </button>
    )
}