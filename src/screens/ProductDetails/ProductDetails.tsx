import React, { Component } from "react";
import {
  HeaderType,
  Menu,
  Login,
  Header,
  Footer,
  ImageCarousel,
  ItemQuantity,
} from "../../components";
import { throttle } from "../../utilities";
import { categories, userMenuOptions, sizeList } from "../../mockData";
import imgCarousel1 from "../../assets/images/carousel-1.jpg";
import imgCarousel2 from "../../assets/images/carousel-2.jpg";
import imgCarousel3 from "../../assets/images/carousel-3.jpg";
import imgCarousel4 from "../../assets/images/carousel-4.jpg";
import { SizeSelect } from "./SizeSelect";
import imgCart from "../../assets/images/cart-white.svg";
import "./ProductDetails.scss";

export class ProductDetails extends Component<any, any> {
  state = {
    headerType: HeaderType.BLACK,
    showMenu: false,
    showLogin: false,
    selectedSize: null,
  };

  onContainerScroll = (e: any) => {
    console.log(1);
    if (e.target.scrollTop > 50)
      this.setState(() => ({
        headerType: HeaderType.BLACK,
      }));
    else
      this.setState(() => ({
        headerType: HeaderType.WHITE,
      }));
  };

  toggleMenu = () => this.setState(() => ({ showMenu: !this.state.showMenu }));

  onLogoutClick = () => {};

  onMenuItemClick = () => {};

  onLoginClick = () =>
    this.setState(() => ({ showLogin: !this.state.showLogin }));

  onFacebookAccountClick = () => {};

  onGoogleAccountClick = () => {};

  handleQuantityChange = (value: number) => {
    console.log(value);
  };

  selectProductSize = (size: string) => {
    this.setState({ selectedSize: size });
  };

  render(): JSX.Element {
    const { showMenu, showLogin, selectedSize } = this.state;

    return (
      <div
        className="product-details"
        onScroll={(e: React.SyntheticEvent) =>
          throttle(this.onContainerScroll, 100)(e)
        }
      >
        {showMenu && (
          <Menu
            categories={categories}
            userMenuOptions={userMenuOptions}
            onLogoutClick={this.onLogoutClick}
            onClose={this.toggleMenu}
            onMenuItemClick={this.onMenuItemClick}
          />
        )}

        {showLogin && (
          <Login
            onFacebookAccountClick={this.onFacebookAccountClick}
            onGoogleAccountClick={this.onGoogleAccountClick}
            onClose={this.onLoginClick}
          />
        )}

        <Header
          type={this.state.headerType}
          onMenuButtonClick={this.toggleMenu}
          isAuthenticated={false}
          onLoginClick={this.onLoginClick}
        />

        <div className="product-details-container">
          <div className="carousel-holder left">
            <ImageCarousel
              images={[imgCarousel3, imgCarousel2, imgCarousel1, imgCarousel4]}
              width={360}
              height={480}
            />
          </div>
          <div className="content-holder left">
            <div className="product-details-content">
              <div className="title">Faux Leather Jacket</div>
              <div className="price">₹ 1200.00</div>

              <div className="details">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua
                <br />
                <br />
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed
              </div>

              <div className="size-selection">
                <div className="selection-title">Size</div>
                <SizeSelect
                  sizes={sizeList}
                  handleSizeSelect={this.selectProductSize}
                />
              </div>

              <div className="quantity-selection">
                <div className="quantity-selection-title">Quantity</div>
                <ItemQuantity
                  quantity={1}
                  handleChange={this.handleQuantityChange}
                />
              </div>
              <button
                disabled={selectedSize === null}
                className="add-to-cart btn-flat pointer"
              >
                <img src={imgCart} alt="CArt Icon" />
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
