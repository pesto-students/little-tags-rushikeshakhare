import React from "react";
import "./modal.scss";

interface IModalProps {
  children: JSX.Element;
}

export const Modal = ({ children }: IModalProps) => {
  return <div className="modal d-flex">{children}</div>;
};
