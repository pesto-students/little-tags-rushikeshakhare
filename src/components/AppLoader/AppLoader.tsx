import React from "react";
import "./appLoader.scss";

export const AppLoader = () => {
  return (
    <div className="app-loader">
      <div className="loader">
        <div className="loader-outer"></div>
        <div className="loader-inner"></div>
      </div>
      <h1 className="app-loader-text">Getting Things Ready</h1>
    </div>
  );
};
