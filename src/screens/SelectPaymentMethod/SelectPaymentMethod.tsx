import * as React from "react";
import { useState } from "react";
import { Card, RadioGroup, RadioInput } from "../../components";
import { withContainer } from "../../hocs/withContainer";
import { connect } from "../../store";
import "./selectPaymentMethod.scss";

enum paymentMethods {
  razorpay = "Razor Pay",
  vmu = "Visa / MasterCard / UPI",
  paypal = "Pay Pal",
}

interface ISelectPaymentMethodProps {
  history: any;
}

export const SelectPaymentMethod = connect()(
  withContainer(({ history }: ISelectPaymentMethodProps) => {
    const [defaultPaymentMethod, setDefaultPaymentMethod]: any = useState(
      paymentMethods.razorpay
    );

    return (
      <div className="select-payment-method">
        <h2 className="select-payment-method-title">Delivering To</h2>
        <div
          className="select-payment-method-address"
          onClick={() => history.push("/select-address")}
        >
          <Card>
            <>
              <h3>Ayush Jaiswal</h3>
              <p>
                1418 Riverwood Drive, Suite 3245 Cottonwood, DL 110092, India
              </p>
              <p>(+91) 9876 543 210</p>
            </>
          </Card>
        </div>
        <div className="select-payment-method-options">
          <h2 className="select-payment-method-options-title">
            Method of Payment
          </h2>
          <RadioGroup
            value={defaultPaymentMethod}
            onChange={(paymentMethod: string) =>
              setDefaultPaymentMethod(paymentMethod)
            }
          >
            <RadioInput
              value={paymentMethods.razorpay}
              label={paymentMethods.razorpay}
            />
            <RadioInput value={paymentMethods.vmu} label={paymentMethods.vmu} />
            <RadioInput
              value={paymentMethods.paypal}
              label={paymentMethods.paypal}
            />
          </RadioGroup>
        </div>
        <button className="btn select-payment-method-action">
          PROCEED TO PAYMENT
        </button>
      </div>
    );
  })
);
