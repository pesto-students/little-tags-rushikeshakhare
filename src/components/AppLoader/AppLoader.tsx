import React from "react";
import { APP_LOADER_TEXT } from "../../AppConstants";
import "./appLoader.scss";

export const AppLoader = () => {
  return (
    <div className="app-loader">
      <div className="loader">
        <div className="loader-outer" />
        <div className="loader-inner" />
      </div>
      <h1 className="app-loader-text">{APP_LOADER_TEXT}</h1>
    </div>
  );
};
