import React from "react";
import { PaymentStatus, PaymentStatusTypes } from "../../components";

export const ThankYou = ({ history }: any) => {
  return <PaymentStatus type={PaymentStatusTypes.success} history={history} />;
};
