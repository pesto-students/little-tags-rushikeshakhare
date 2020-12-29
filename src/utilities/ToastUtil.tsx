import React from "react";
import ReactDOM from "react-dom";
import { Toast } from "../components";

export const showToast = (toastMessage: string) => {
  if (document.getElementById("toast")) {
    ReactDOM.render(
      <Toast message={toastMessage} />,
      document.getElementById("toast")
    );
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(
        document.getElementById("toast") as HTMLElement
      );
    }, 2000);
  }
};
