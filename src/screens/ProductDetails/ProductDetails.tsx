import React, { useState, useEffect } from "react";
import { ImageCarousel, ItemQuantity } from "../../components";
import { PRODUCT_DETAILS } from "../../AppConstants";
import { connect } from "../../store";
import { fetchProductDetails } from "../../store/actions";
import { Cart } from "../../models/Cart";
import imgCart from "../../assets/images/cart-white.svg";
import { showToast } from "../../utilities";
import "./ProductDetails.scss";

interface IProductDetailsProps {
  productDetails: any;
  match: any;
  authenticated: any;
}

export const ProductDetails = connect((state: any) => ({
  productDetails: state?.products?.productDetails,
}))((props: IProductDetailsProps) => {
  const { productDetails, match, authenticated } = props;

  const [productQuantity, setProductQuantity] = useState(1);

  const handleQuantityChange = (value: number) => {
    setProductQuantity(value);
  };

  useEffect(() => {
    fetchProductDetails(match.params.id);
  }, [match.params.id]);

  return (
    <div className="product-details-container">
      <div className="carousel-holder left">
        <ImageCarousel
          images={[productDetails?.image]}
          width={360}
          height={480}
        />
      </div>
      <div className="content-holder left">
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
  );
});
