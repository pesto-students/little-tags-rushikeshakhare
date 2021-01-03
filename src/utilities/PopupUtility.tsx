import React from "react";
import * as ReactDOM from "react-dom";
import { POPUP_CONTAINER_ID } from "../AppConfig";

export const PopupUtility = (Component: any, props: any) => {
  return new Promise((resolve: any) => {
    ReactDOM.render(
      <Component
        onCancelButtonClick={() => {
          ReactDOM.unmountComponentAtNode(
            document.getElementById(POPUP_CONTAINER_ID) as HTMLElement
          );
        }}
        onSuccessButtonClick={(data: any) => {
          resolve(data);
          ReactDOM.unmountComponentAtNode(
            document.getElementById(POPUP_CONTAINER_ID) as HTMLElement
          );
        }}
        {...props}
      />,
      document.getElementById(POPUP_CONTAINER_ID)
    );
  });
};
