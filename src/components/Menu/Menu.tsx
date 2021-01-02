import * as React from "react";
import { MenuUserDetails } from "./MenuUserDetails";
import { APP_TITLE } from "../../AppConstants";
import { MenuList } from "./MenuList";
import { MenuCategories } from "./MenuCategories";
import closeIcon from "../../assets/images/close.svg";
import { Application } from "../../Application";
import "./menu.scss";

interface IMenuProps {
  onClose: () => void;
  categories: any[];
  userMenuOptions: any[];
  onMenuItemClick: (route: string) => void;
  onLogoutClick: () => void;
  isAuthenticated: boolean;
}

export const Menu = ({
  onClose,
  categories,
  userMenuOptions,
  onMenuItemClick,
  onLogoutClick,
  isAuthenticated,
}: IMenuProps): JSX.Element => {
  return (
    <div className="menu">
      <div className="menu-title d-flex">
        <div className="menu-title-text">
          <h1>{APP_TITLE}</h1>
        </div>
        <div className="menu-title-action">
          <button type="button" className="btn d-flex" onClick={onClose}>
            <img src={closeIcon} alt="Close Button" />
          </button>
        </div>
      </div>
      {isAuthenticated && (
        <MenuUserDetails name={Application.getInstance().UserData?.name} />
      )}

      <MenuCategories
        categories={categories}
        onMenuClick={(routeValue: string) => {
          onMenuItemClick(routeValue);
          onClose();
        }}
      />

      {isAuthenticated && (
        <>
          <div className="menu-separator">
            <hr />
          </div>
          <MenuList
            options={userMenuOptions}
            onListItemClick={(routeValue: string) => {
              onMenuItemClick(routeValue);
              onClose();
            }}
          />
        </>
      )}

      {isAuthenticated && (
        <div className="menu-logout">
          <button
            type="button"
            className="btn menu-logout-btn"
            onClick={onLogoutClick}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
