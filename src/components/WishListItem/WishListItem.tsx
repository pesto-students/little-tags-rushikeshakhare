import React from 'react';
import Image, { Shimmer } from 'react-shimmer';
import iconDelete from '../../assets/images/trash-alt-regular.svg';
import './WishListItem.scss';

interface IWishListItem {
  id: any;
  image: string;
  name: string;
  price: string;
  deleteEvent: (id: any) => void;
}

export const WishListItem = ({ id, name, image, price, deleteEvent }: IWishListItem) => {
  const handleDelete = (event: React.MouseEvent) => {
    event.stopPropagation();
    deleteEvent(id);
  };
  return (
    <div className='wish-list-item item-center d-flex'>
      <div className='wish-list-item-image d-flex'>
        <Image src={image} fallback={<Shimmer width={100} height={100} />} />
      </div>
      <button onClick={e => handleDelete(e)} className='btn-flat wish-list-item-delete-btn'>
        <img alt='wishlist delte item button' src={iconDelete}></img>
      </button>
      <div className='wish-list-item-text left'>{name}</div>
      <div className='wish-list-item-price right text-right d-flex'> ₹ {price} </div>
    </div>
  );
};
