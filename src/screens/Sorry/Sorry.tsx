import React from "react";
import { PaymentStatus, PaymentStatusTypes } from "../../components";

export const Sorry = ({ history }: any) => {
  return <PaymentStatus type={PaymentStatusTypes.failure} history={history} />;
};
