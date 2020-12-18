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
  onMenuButtonClick: () => void;
  isAuthenticated: boolean;
}

export const Header = ({ onMenuButtonClick, type, isAuthenticated }: IHeaderProps) => {
  return (
    <div
      className={`nav-header fixed ${
        type === HeaderType.BLACK ? "theme-black" : "theme-white"
      }`}
    >
      <button
        type="button"
        className="btn hamburger-toggle-btn left pointer"
        onClick={onMenuButtonClick}
      >
        <img
          src={type === HeaderType.BLACK ? iconMenu : iconMenuWhite}
          alt="Menu Icon"
        />
      </button>

      <div className="logo-container left pointer text-left">Little Tags</div>

      <div className="cart-btn-container right pointer">
        <img
          src={type === HeaderType.BLACK ? iconCartBlack : iconCartBlackWhite}
          alt="Cart Icon"
        />
      </div>
      
      {
        isAuthenticated === true &&
        <div className="user-data right">
            <img
            src={type === HeaderType.BLACK ? iconUserAvatar : iconUserAvatarWhite}
            alt="User Avatar Icon"
            />
            <div className="user-text right">Ashim Raj Konwar</div>
        </div>
      }

      {
          isAuthenticated === false &&
          <div className="user-auth-button right">
            <a href="#" onClick={(e) => { e.preventDefault(); }} className="user-text right">Login / Signup</a>
          </div>
      }

      <div className="search-bar-container item-center pointer text-left">
        <div className="search-bar">Search bar (remove border once done)</div>
      </div>
    </div>
  );
};
