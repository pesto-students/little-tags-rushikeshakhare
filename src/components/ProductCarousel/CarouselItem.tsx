import React from 'react';
import { ROUTES } from '../../AppConfig';

const TRUNCATE_LENGTH = 20;

interface ICarouselItem {
    id: any;
    content: any;
    title: string;
    history: any;
}
export const CarouselItem = ({ id, content, title, history }: ICarouselItem) => {

    const truncateText = (text: string) => {

        if (!text) return text;

        if (text.length >= TRUNCATE_LENGTH) {
            return text.slice(0, TRUNCATE_LENGTH) + "...";
        }
        return text;
    }

    return (
        <div onClick={() => history.push(ROUTES.PRODUCT_DETAILS(id))} className="carousel-item" style={{backgroundImage: `url(${content})`}}>

            <div className="title">{truncateText(title)}</div>
        </div>
    )
}