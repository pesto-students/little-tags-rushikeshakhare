import React from "react";
import * as ReactDOM from "react-dom";
import { POPUP_CONTAINER_ID } from "../AppConfig";

export const PopupUtility = (Component: any, props: any) => {
  return new Promise((resolve: any, reject: any) => {
    ReactDOM.render(
      <Component
        onCancelButtonClick={() => {
          ReactDOM.unmountComponentAtNode(
            document.getElementById(POPUP_CONTAINER_ID) as HTMLElement
          );
          reject();
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
