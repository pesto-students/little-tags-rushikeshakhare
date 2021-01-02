import React from "react";
import thankYou from "../../assets/images/smile.svg";
import sorry from "../../assets/images/frown.svg";
import {
  PAYMENT_STATUS_FAILURE_ICON_PLACEHOLDER,
  PAYMENT_STATUS_SUCCESS_ICON_PLACEHOLDER,
  PAYMENT_STATUS_SUCCESS_MESSAGE,
  PAYMENT_STATUS_FAILURE_MESSAGE,
  PAYMENT_STATUS_SUCCESS_ACTION_TEXT,
  PAYMENT_STATUS_FAILURE_ACTION_TEXT,
} from "../../AppConstants";
import "./paymentStatus.scss";

export enum PaymentStatusTypes {
  success = "Success",
  failure = "Failure",
}

interface IPaymentStatusProps {
  type: PaymentStatusTypes;
  history: any;
}

export const PaymentStatus = ({ type, history }: IPaymentStatusProps) => {
  return (
    <div className="payment-status">
      <img
        src={type === PaymentStatusTypes.success ? thankYou : sorry}
        alt={
          type === PaymentStatusTypes.success
            ? PAYMENT_STATUS_SUCCESS_ICON_PLACEHOLDER
            : PAYMENT_STATUS_FAILURE_ICON_PLACEHOLDER
        }
        className="payment-status-icon"
      />
      <h1 className="payment-status-text">
        {type === PaymentStatusTypes.success
          ? PAYMENT_STATUS_SUCCESS_MESSAGE
          : PAYMENT_STATUS_FAILURE_MESSAGE}
      </h1>

      <button
        className="payment-status-action"
        onClick={() => {
          type === PaymentStatusTypes.success
            ? history.push("/product-list")
            : history.push("/select-payment-method");
        }}
      >
        {type === PaymentStatusTypes.success
          ? PAYMENT_STATUS_SUCCESS_ACTION_TEXT
          : PAYMENT_STATUS_FAILURE_ACTION_TEXT}
      </button>
    </div>
  );
};
