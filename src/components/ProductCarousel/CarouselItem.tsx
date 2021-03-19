import React from 'react';

const TRUNCATE_LENGTH = 20;

interface ICarouselItem {
    id: any;
    content: any;
    title: string;
    onItemClicked: (id: any) => void;
}
export const CarouselItem = ({ id, content, title, onItemClicked }: ICarouselItem) => {

    const truncateText = (text: string) => {

        if (!text) return text;

        if (text.length >= TRUNCATE_LENGTH) {
            return text.slice(0, TRUNCATE_LENGTH) + "...";
        }
        return text;
    }

    return (
        <div onClick={() => onItemClicked(id)} className="carousel-item" style={{backgroundImage: `url(${content})`}}>

            <div className="title">{truncateText(title)}</div>
        </div>
    )
}