import React, { useState, useEffect } from "react";
import { ImageCarousel, ItemQuantity, ProductCarousel } from "../../components";
import { PRODUCT_DETAILS } from "../../AppConstants";
import { connect } from "../../store";
import { fetchProductDetails, fetchProducts } from "../../store/actions";
import { Cart } from "../../models/Cart";
import imgCart from "../../assets/images/cart-white.svg";
import imgCarousel1 from "../../assets/images/carousel-1.jpg";
import imgCarousel2 from "../../assets/images/carousel-2.jpg";
import imgCarousel3 from "../../assets/images/carousel-3.jpg";
import imgCarousel4 from "../../assets/images/carousel-4.jpg";
import { showToast } from "../../utilities";
import Fuse from 'fuse.js';
import "./ProductDetails.scss";

interface IProductDetailsProps {
  productDetails: any;
  productList: any;
  match: any;
  authenticated: any;
  history: any;
}

export const ProductDetails = connect((state: any) => ({
  productDetails: state?.products?.productDetails,
}))((props: IProductDetailsProps) => {
  
  const { productDetails, productList, match, authenticated, history } = props;

  const [productQuantity, setProductQuantity] = useState(1);

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
    keys: ['title']
  }

  const suggestedProducts = (list: any[], target: string): any[] => {
    let results = new Fuse(list, options).search(target);

    results = results.sort((a: any, b: any) => (a.score < b.score) ? -1 : 1);
    results = results.map((r: any) => r.item).filter((r: any) => r.id != productDetails.id);
    return results;
  }
  

  return (

    <div className="details-section">
      <div className="product-details-container d-flex">
        <div className="carousel-holder">
          <ImageCarousel
            images={[productDetails?.image, imgCarousel3, imgCarousel4, imgCarousel2, imgCarousel1]}
            width={360}
            height={480}
          />
        </div>
        <div className="content-holder">
          <div className="product-details-content">
            <div className="title">{productDetails?.title}</div>
            <div className="price">₹ {productDetails?.price}</div>
            <div className="details">{productDetails?.description}</div>

            {!Cart.isProductAlreadyInCart(productDetails?.id) && (
              <div className="quantity-selection">
                <div className="quantity-selection-title">
                  {PRODUCT_DETAILS.QUANTITY_LABEL}
                </div>
                <ItemQuantity
                  quantity={productQuantity}
                  handleChange={handleQuantityChange}
                />
              </div>
            )}
            {!!Cart.isProductAlreadyInCart(productDetails?.id) && authenticated && (
              <>
                {PRODUCT_DETAILS.ADDED_TO_CART_MESSAGE} <br />
                <br />
              </>
            )}

            {authenticated && (
              <button
                disabled={false}
                className="add-to-cart btn-flat pointer d-flex"
                onClick={() => {
                  // TODO -- shift this declaraton level
                  if (productDetails) {
                    if (!!Cart.isProductAlreadyInCart(productDetails?.id)) {
                      const { message } = Cart.removeItemFromCart(
                        productDetails?.id
                      );
                      showToast(message);
                      return;
                    }
                    const { message } = Cart.addItemToCart({
                      product: productDetails,
                      quantity: productQuantity,
                    });
                    showToast(message);
                  }
                }}
              >
                <img src={imgCart} alt="Cart Icon" />
                <div className="cart-text">
                  {!!Cart.isProductAlreadyInCart(productDetails?.id)
                    ? PRODUCT_DETAILS.REMOVE_FROM_CART_TEXT
                    : PRODUCT_DETAILS.ADD_TO_CART_TEXT}
                </div>
              </button>
            )}
          </div>
        
          
        </div>
      </div>

      {

        productList && productDetails && suggestedProducts(productList, productDetails.title).length > 0 &&
        
        <div className="suggestions">
          <h2 className="text-center header">More you'll like</h2>
          <br/>
          <div className="carousel-holder">

            <ProductCarousel
              products={productList && productDetails ? suggestedProducts(productList, productDetails.title) : []}
              history={history}
              width={270}
              height={380}
            />
          </div>
        </div>

      }

    </div>
  );
});
