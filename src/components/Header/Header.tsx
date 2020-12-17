import React from "react";
import iconMenu from "../../assets/images/icons8-menu-48.svg";
import iconMenuWhite from "../../assets/images/icons8-menu-48-white.svg";
import iconUserAvatar from "../../assets/images/user-avatar.svg";
import iconUserAvatarWhite from "../../assets/images/user-avatar-white.svg";
import iconCartBlack from "../../assets/images/cart-black.svg";
import iconCartBlackWhite from "../../assets/images/cart-white.svg";
import "./Header.scss";

export enum HeaderType {
  BLACK,
  WHITE,
}

interface IHeaderProps {
  type: HeaderType;
}

export const Header = (props: IHeaderProps) => {
  return (
    <div className={`nav-header fixed ${props.type === HeaderType.BLACK ? 'theme-black' : 'theme-white'}`}>
      <div className="hamburger-toggle-btn left pointer">
        <img src={props.type === HeaderType.BLACK ? iconMenu : iconMenuWhite} alt="Menu Icon" />
      </div>
      <div className="logo-container left pointer text-left">Little Tags</div>

      <div className="cart-btn-container right pointer">
        <img src={props.type === HeaderType.BLACK ? iconCartBlack : iconCartBlackWhite} alt="Cart Icon" />
      </div>
      <div className="user-data right">
        <img src={props.type === HeaderType.BLACK ? iconUserAvatar : iconUserAvatarWhite} alt="User Avatar Icon" />
        <div className="user-text right">Ashim Raj Konwar</div>
      </div>

      <div className="search-bar-container item-center pointer text-left">
        <div className="search-bar">Search bar (remove border once done)</div>
      </div>
    </div>
  );
};
