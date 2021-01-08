import React from "react";
import "./LoaderBar.scss";

export const LoaderBar = () => {
  return (
    <div className="loader-bar-wrap">
        <div className="load-bar">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    </div>
  );
};
