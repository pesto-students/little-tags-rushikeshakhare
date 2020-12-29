import React from "react";
import { Modal } from "../Modal";
import "./confirmationPopup.scss";

export enum PopupType {
  Cancellable = "cancellable",
  alert = "alert",
}

interface IConfirmationPopupProps {
  message: string;
  type?: PopupType;
  successButtonText?: string;
  cancelButtonText?: string;
  onSuccessButtonClick?: () => void;
  onCancelButtonClick?: () => void;
}

export const ConfirmationPopup = ({
  type = PopupType.Cancellable,
  successButtonText = "Proceed",
  cancelButtonText = "Cancel",
  onSuccessButtonClick = () => {},
  onCancelButtonClick = () => {},
  message,
}: IConfirmationPopupProps) => {
  return (
    <Modal>
      <div className="popup">
        <h3 className="popup-text">{message}</h3>
        {type === PopupType.Cancellable && (
          <div className="popup-actions d-flex">
            <button className="btn success-btn" onClick={onSuccessButtonClick}>
              {successButtonText}
            </button>
            <button className="btn cancel-btn" onClick={onCancelButtonClick}>
              {cancelButtonText}
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
};
