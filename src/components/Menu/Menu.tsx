import * as React from "react";
import { MenuUserDetails } from "./MenuUserDetails";
import { MenuList } from "./MenuList";
import { MenuCategories } from "./MenuCategories";
import closeIcon from "../../assets/images/close.svg";
import "./menu.scss";

interface IMenuProps {
  onClose: () => void;
  categories: any[];
  userMenuOptions: any[];
  onMenuItemClick: () => void;
  onLogoutClick: () => void;
}

export const Menu = ({
  onClose,
  categories,
  userMenuOptions,
  onMenuItemClick,
  onLogoutClick,
}: IMenuProps): JSX.Element => {
  return (
    <div className="menu">
      <div className="menu-title d-flex">
        <div className="menu-title-text">
          <h1>Little Tags</h1>
        </div>
        <div className="menu-title-action">
          <button type="button" className="btn d-flex" onClick={onClose}>
            <img src={closeIcon} alt="Close Button" />
          </button>
        </div>
      </div>
      <MenuUserDetails />
      <MenuCategories categories={categories} onMenuClick={onMenuItemClick} />
      <div className="menu-separator">
        <hr />
      </div>
      <MenuList options={userMenuOptions} onListItemClick={onMenuItemClick} />
      <div className="menu-logout">
        <button
          type="button"
          className="btn menu-logout-btn"
          onClick={onLogoutClick}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
