import React from 'react';
import { WishListItem } from '../../components';
import { WishList as WishListModel } from '../../models/WishList';
import { connect } from '../../store';
import { showToast } from '../../utilities';
import { ROUTES } from '../../AppConfig';
import iconEmpty from '../../assets/images/star-of-life-solid.svg';
import './WishList.scss';

interface IWishListProps {
  wishList: any;
  history: any;
}

export const WishList = connect()(({ wishList, history }: IWishListProps) => {
  const handleItemRemove = (productID: number) => {
    const { message } = WishListModel.removeItemFromWishList(productID);
    showToast(message);
  };

  return (
    <div className='wish-list-container'>
      <div className='title text-center'>Your Wishlist</div>

      {!wishList.length && (
        <div className='empty-msg text-center'>
          <img src={iconEmpty} alt='empty' />
          <h2 className='text-center'>Make a Wish!</h2>
        </div>
      )}

      <div className='list'>
        {wishList.map(({ product: { image, title, price, id } }: any, index: number) => (
          <div
            key={`${index}-${title}`}
            className='list-item item-center'
            onClick={() => history.push(ROUTES.PRODUCT_DETAILS(id))}
          >
            <WishListItem
              id={id}
              image={image}
              name={title}
              price={price}
              deleteEvent={handleItemRemove}
            />
          </div>
        ))}
      </div>
    </div>
  );
});
