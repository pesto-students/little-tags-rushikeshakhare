import React from 'react';
import arrowRight from '../../assets/images/arrow-right-white.svg';

interface ICarouselNavigation {
    handlePrevious: () => void;
    handleNext: () => void;
}

export const CarouselNavigation = ({ handleNext, handlePrevious }: ICarouselNavigation) => {

    return (
        <div className="navigation-container">
            <button onClick={handlePrevious} className="carousel-previous-btn btn-flat">
                <img src={arrowRight} />
            </button>

            <button onClick={handleNext} className="carousel-next-btn btn-flat">
                <img src={arrowRight} />
            </button>
        </div>
    )
}