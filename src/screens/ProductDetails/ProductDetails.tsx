import React, { useState, useEffect } from 'react';
import {
  ImageCarousel,
  ItemQuantity,
  ProductCarousel,
  RadioButton,
  RadioGroup,
} from '../../components';
import { PRODUCT_DETAILS, CLOTH_SIZES } from '../../AppConstants';
import { connect } from '../../store';
import { fetchProductDetails, fetchProducts } from '../../store/actions';
import { Cart } from '../../models/Cart';
import { WishList } from '../../models/WishList';
import imgCart from '../../assets/images/cart-white.svg';
import imgCarousel1 from '../../assets/images/carousel-1.jpg';
import imgCarousel2 from '../../assets/images/carousel-2.jpg';
import imgCarousel3 from '../../assets/images/carousel-3.jpg';
import imgCarousel4 from '../../assets/images/carousel-4.jpg';
import imgHeartRegular from '../../assets/images/heart-regular.svg';
import imgHeartSolid from '../../assets/images/heart-solid.svg';
import { showToast } from '../../utilities';
import Fuse from 'fuse.js';
import Skeleton from 'react-loading-skeleton';
import "./ProductDetails.scss";
import { ROUTES } from "../../AppConfig";

interface IProductDetailsProps {
  productDetails: any;
  productList: any;
  match: any;
  authenticated: any;
  history: any;
  networkActivity: any;
}

export const ProductDetails = connect((state: any) => ({
  productDetails: state?.products?.productDetails,
  networkActivity: state.networkActivity,
}))((props: IProductDetailsProps) => {
  
  const { productDetails, productList, match, authenticated, history, networkActivity } = props;

  const [productQuantity, setProductQuantity] = useState(1);
  const [size, setSize] = useState(null);

  const handleQuantityChange = (value: number) => {
    setProductQuantity(value);
  };

  useEffect(() => {
    fetchProducts();
    fetchProductDetails(match.params.id);
  }, [match.params.id]);

  const options = {
    includeScore: true,
    threshold: 1.0,
    keys: ['title'],
  };

  const suggestedProducts = (list: any[], target: string): any[] => {
    let results = new Fuse(list, options).search(target);

    results = results.sort((a: any, b: any) => (a.score < b.score ? -1 : 1));
    results = results.map((r: any) => r.item).filter((r: any) => r.id != productDetails.id);
    return results;
  };

  const handleCartAddRemove = () => {
    if (productDetails) {
      if (!!Cart.isProductAlreadyInCart(productDetails?.id, size)) {
        const { message } = Cart.removeItemFromCart(productDetails?.id, size);
        showToast(message);
        return;
      }
      const { message } = Cart.addItemToCart({
        product: productDetails,
        quantity: productQuantity,
        size,
      });
      showToast(message);
    }
  };

  const handleWishListAddRemove = () => {
    if (productDetails) {
      if (!!WishList.isProductAlreadyInWishList(productDetails?.id)) {
        const { message } = WishList.removeItemFromWishList(productDetails?.id);
        showToast(message);
        return;
      }
      const { message } = WishList.addItemToWishList({
        product: productDetails,
        quantity: productQuantity,
      });
      showToast(message);
    }
  }

  const handleRoutingEvent = (id: any) => {
    history.push(ROUTES.PRODUCT_DETAILS(id));

    // Here Pleasee handle yhis
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  

  return (
    <div className='details-section'>
      <div className='product-details-container d-flex'>
        <div className='carousel-holder'>
          {
            networkActivity?.inProgress &&
            <Skeleton width={360} height={480}/>
          }
          {
            !networkActivity.inProgress && 
            <ImageCarousel
              images={[productDetails?.image, imgCarousel3, imgCarousel4, imgCarousel2, imgCarousel1]}
              width={360}
              height={480}
            />
          }
        </div>
        <div className='content-holder'>

          {
            networkActivity?.inProgress &&
            <div className="product-details-content">
              <h3 className="title"><Skeleton height={30}/></h3>
              <div className="details shimmer-details">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</div>
              <p className="details-shimmer"><Skeleton count={12}/></p>
            </div>
          }
          
          { !networkActivity?.inProgress &&
            <div className='product-details-content'>
            <div className='title'>{productDetails?.title}</div>
            <div className='price'>₹ {productDetails?.price}</div>
            <div className='details'>{productDetails?.description}</div>

            {productDetails?.category?.includes('clothing') && (
              <>
                <div className='quantity-selection-title'>{PRODUCT_DETAILS.SIZE_LABEL}</div>
                <div className='size-section'>
                  <RadioGroup
                    value={size}
                    onChange={(value: any) => {
                      setSize(value);
                      setProductQuantity(1);
                    }}
                  >
                    {CLOTH_SIZES.map(({ value, label }: any) => (
                      <RadioButton value={value} label={label} />
                    ))}
                  </RadioGroup>
                </div>
              </>
            )}

            {!Cart.isProductAlreadyInCart(productDetails?.id, size) && (
              <div className='quantity-selection'>
                <div className='quantity-selection-title'>{PRODUCT_DETAILS.QUANTITY_LABEL}</div>
                <ItemQuantity quantity={productQuantity} handleChange={handleQuantityChange} />
              </div>
            )}

            {!!Cart.isProductAlreadyInCart(productDetails?.id, size) && authenticated && (
              <>
                {PRODUCT_DETAILS.ADDED_TO_CART_MESSAGE} <br />
                <br />
              </>
            )}

            {authenticated && (
              <button
                disabled={false}
                className='add-to-cart btn-flat pointer d-flex'
                onClick={handleCartAddRemove}
              >
                <img src={imgCart} alt='Cart Icon' />
                <div className='cart-text'>
                  {!!Cart.isProductAlreadyInCart(productDetails?.id, size)
                    ? PRODUCT_DETAILS.REMOVE_FROM_CART_TEXT
                    : PRODUCT_DETAILS.ADD_TO_CART_TEXT}
                </div>
              </button>
            )}

            {authenticated && (
              <button
                className='btn-flat right add-to-wishlist-btn'
                onClick={handleWishListAddRemove}
              >
                <img
                  src={
                    !!WishList.isProductAlreadyInWishList(productDetails?.id)
                      ? imgHeartSolid
                      : imgHeartRegular
                  }
                  alt='Add to wishlist button'
                />
              </button>
            )}
            </div>
          }
        </div>
      </div>

      {productList &&
        productDetails &&
        suggestedProducts(productList, productDetails.title).length > 0 && (
          <div className='suggestions'>
            <h2 className='text-center header'>More you'll like</h2>
            <br />
            <div className='carousel-holder'>
              <ProductCarousel
                products={
                  productList && productDetails
                    ? suggestedProducts(productList, productDetails.title)
                    : []
                }
                routingEvent={handleRoutingEvent}
                width={270}
                height={380}
              />
             
            </div>
          </div>
        )}
    </div>
  );
});
