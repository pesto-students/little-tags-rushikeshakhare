import React from "react";
import iconMenu from "../../assets/images/icons8-menu-48.svg";
import iconUserAvatar from "../../assets/images/user-avatar.svg";
import iconCartBlack from "../../assets/images/cart-black.svg";
import "./Header.scss";

export enum HeaderType {
  TANSPARENT,
  WHITE,
}

interface IHeaderProps {
  type: HeaderType;
}

export const Header = (props: IHeaderProps) => {
  return (
    <div className="nav-header">
      <div className="hamburger-toggle-btn left pointer">
        <img src={iconMenu} alt="Menu Icon" />
      </div>
      <div className="logo-container left pointer text-left">Little Tags</div>

      <div className="cart-btn-container right">
        <img src={iconCartBlack} alt="Cart Icon" />
      </div>
      <div className="user-data right">
        <img src={iconUserAvatar} alt="User Avatar Icon" />
        <div className="user-text right">Ashim Raj Konwar</div>
      </div>

      <div className="search-bar-container item-center pointer text-left">
        <div className="search-bar">Search bar (remove border once done)</div>
      </div>
    </div>
  );
};
