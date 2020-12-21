import * as React from "react";
import { useState } from "react";
import iconMenu from "../../assets/images/icons8-menu-48.svg";
import iconMenuWhite from "../../assets/images/icons8-menu-48-white.svg";
import iconUserAvatar from "../../assets/images/user-avatar.svg";
import iconUserAvatarWhite from "../../assets/images/user-avatar-white.svg";
import iconCartBlack from "../../assets/images/cart-black.svg";
import iconCartBlackWhite from "../../assets/images/cart-white.svg";
import { debounce } from "../../utilities";
import { getData } from "../../mockData";
import { Search } from "../../components";
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
  const [searchResults, setSearchResults]: any = useState(null);

  const onSearchQueryChange = (event: any) => {
    const newSearchQuery = event.target.value;
    setSearchResults(!newSearchQuery ? [] : searchResults);
    initiateFetchSearchQueryResults(newSearchQuery);
  };

  const getResultsBySearchQuery = (
    searchQuery: string,
    successCb: any,
    failureCb: any
  ) => {
    getData(searchQuery).then(successCb).catch(failureCb);
  };

  const onFetchSearchResultsSuccess = (newSearchResults: any[]) => {
    setSearchResults(newSearchResults);
  };

  const onFetchSearchResultsError = (error: any) => console.log(error);

  const initiateFetchSearchQueryResults = debounce((searchQuery: string) => {
    if (searchQuery) {
      setSearchResults([]);
      getResultsBySearchQuery(
        searchQuery,
        onFetchSearchResultsSuccess,
        onFetchSearchResultsError
      );
    }
  }, 500);

  const getHeaderTheme = () => {
    if (window.location.hash === "#/")
      return type === HeaderType.BLACK ? "theme-black" : "theme-white";
    else return "theme-black";
  };

  const getMenuIcon = () => {
    if (window.location.hash === "#/")
      return type === HeaderType.BLACK ? iconMenu : iconMenuWhite;
    else return iconMenu;
  };

  const getUserIcon = () => {
    if (window.location.hash === "#/")
      return type === HeaderType.BLACK ? iconUserAvatar : iconUserAvatarWhite;
    else return iconUserAvatar;
  };

  const getCartIcon = () => {
    if (window.location.hash === "#/")
      return type === HeaderType.BLACK ? iconCartBlack : iconCartBlackWhite;
    else return iconCartBlack;
  };

  return (
    <div className={`nav-header fixed ${getHeaderTheme()}`}>
      <button
        type="button"
        className="btn hamburger-toggle-btn left pointer"
        onClick={onMenuButtonClick}
      >
        <img src={getMenuIcon()} alt="Menu Icon" />
      </button>

      <div className="logo-container left pointer text-left">Little Tags</div>

      {isAuthenticated === true && (
        <>
          <div className="cart-btn-container right pointer">
            <img src={getCartIcon()} alt="Cart Icon" />
          </div>
          <div className="user-data right">
            <img src={getUserIcon()} alt="User Avatar Icon" />
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
        <div className="search-bar">
          <Search
            onSearch={onSearchQueryChange}
            searchResults={searchResults}
          />
        </div>
      </div>
    </div>
  );
};
