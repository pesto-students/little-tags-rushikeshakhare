import React from "react";
import "./toast.scss";

export const Toast = ({ message }: any) => {
  return <div className="toast">{message}</div>;
};
