import React, { useState, useEffect } from "react";
import { ImageCarousel, ItemQuantity } from "../../components";
import { connect } from "../../store";
import { fetchProductDetails } from "../../store/actions";
import { withContainer } from "../../hocs/withContainer";
import { Cart } from "../../Cart";
import imgCart from "../../assets/images/cart-white.svg";
import "./ProductDetails.scss";
import { showToast } from "../../utilities";

export const ProductDetails = connect((state: any) => ({
  productDetails: state?.products?.productDetails,
}))(
  withContainer((props: any) => {
    const { productDetails } = props;

    const [productQuantity, setProductQuantity] = useState(1);

    const handleQuantityChange = (value: number) => {
      setProductQuantity(value);
    };

    // const [selectedSize, setSelectedSize]: any = useState(null);

    // const selectProductSize = (size: string) => {
    //   setSelectedSize(size);
    // };

    useEffect(() => {
      fetchProductDetails(props.match.params.id);
    }, [props.match.params.id]);

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

            {/* <div className="size-selection">
              <div className="selection-title">Size</div>
              <SizeSelect
                sizes={sizeList}
                handleSizeSelect={selectProductSize}
              />
            </div> */}

            {!Cart.isProductAlreadyInCart(productDetails?.id) && (
              <div className="quantity-selection">
                <div className="quantity-selection-title">Quantity</div>
                <ItemQuantity
                  quantity={productQuantity}
                  handleChange={handleQuantityChange}
                />
              </div>
            )}
            {!!Cart.isProductAlreadyInCart(productDetails?.id) &&
              props.authenticated && (
                <>
                  Added to cart <br />
                  <br />
                </>
              )}

            {props.authenticated && (
              <button
                disabled={false}
                className="add-to-cart btn-flat pointer d-flex"
                onClick={() => {
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
                    ? "REMOVE FROM CART"
                    : "ADD TO CART"}
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  })
);
