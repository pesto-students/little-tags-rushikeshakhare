import React from "react";
import { Modal } from "../Modal";
import {
  CONFIRMATION_POPUP_SUCCESS_BUTTON_TEXT,
  CONFIRMATION_POPUP_CANCEL_BUTTON_TEXT,
} from "../../AppConstants";
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
  successButtonText = CONFIRMATION_POPUP_SUCCESS_BUTTON_TEXT,
  cancelButtonText = CONFIRMATION_POPUP_CANCEL_BUTTON_TEXT,
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
