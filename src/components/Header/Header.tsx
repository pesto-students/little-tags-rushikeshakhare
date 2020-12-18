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
  onLoginClick: () => void;
}

export const Header = ({
  onMenuButtonClick,
  type,
  isAuthenticated,
  onLoginClick,
}: IHeaderProps) => {
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

      {isAuthenticated === true && (
        <>
          <div className="cart-btn-container right pointer">
            <img
              src={
                type === HeaderType.BLACK ? iconCartBlack : iconCartBlackWhite
              }
              alt="Cart Icon"
            />
          </div>
          <div className="user-data right">
            <img
              src={
                type === HeaderType.BLACK ? iconUserAvatar : iconUserAvatarWhite
              }
              alt="User Avatar Icon"
            />
            <div className="user-text right">Ashim Raj Konwar</div>
          </div>
        </>
      )}

      {isAuthenticated === false && (
        <div className="user-auth-button right">
          <button
            className="user-text right btn login-btn"
            onClick={onLoginClick}
          >
            Login / Signup
          </button>
        </div>
      )}

      <div className="search-bar-container item-center pointer text-left">
        <div className="search-bar">Search bar (remove border once done)</div>
      </div>
    </div>
  );
};
