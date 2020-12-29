import React from "react";
import * as ReactDOM from "react-dom";

export const PopupUtility = (Component: any, props: any) => {
  return new Promise((resolve: any) => {
    ReactDOM.render(
      <Component
        onCancelButtonClick={() => {
          ReactDOM.unmountComponentAtNode(
            document.getElementById("popup-container") as HTMLElement
          );
        }}
        onSuccessButtonClick={(data: any) => {
          resolve(data);
          ReactDOM.unmountComponentAtNode(
            document.getElementById("popup-container") as HTMLElement
          );
        }}
        {...props}
      />,
      document.getElementById("popup-container")
    );
  });
};
