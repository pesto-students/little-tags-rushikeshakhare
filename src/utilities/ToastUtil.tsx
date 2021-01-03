import React from "react";
import ReactDOM from "react-dom";
import { Toast } from "../components";
import { TOAST_CONTAINER_ID, TOAST_TIMEOUT } from "../AppConfig";

export const showToast = (toastMessage: string) => {
  if (document.getElementById(TOAST_CONTAINER_ID)) {
    ReactDOM.render(
      <Toast message={toastMessage} />,
      document.getElementById(TOAST_CONTAINER_ID)
    );
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(
        document.getElementById(TOAST_CONTAINER_ID) as HTMLElement
      );
    }, TOAST_TIMEOUT);
  }
};
