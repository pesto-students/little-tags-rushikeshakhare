import * as React from "react";
import { useState } from "react";
import { RadioCard, RadioGroup } from "../../components";
import "./selectAddress.scss";

const addresses = [
  {
    label: (
      <>
        <h3>Ayush Jaiswal</h3>
        <p>1418 Riverwood Drive, Suite 3245 Cottonwood, DL 110092, India</p>
        <p>(+91) 9876 543 210</p>
      </>
    ),
    value: 1,
  },
  {
    label: (
      <>
        <h3>Rushikesh Akhare</h3>
        <p>1418 Riverwood Drive, Suite 3245 Cottonwood, DL 110092, India</p>
        <p>(+91) 9876 543 210</p>
      </>
    ),
    value: 2,
  },
];

interface ISelectPaymentMethodProps {
  history: any;
}

export const SelectAddress = ({ history }: ISelectPaymentMethodProps) => {
  const [defaultAddress, setDefaultAddress]: any = useState(addresses[0].value);

  return (
    <div className="select-address">
      <h2 className="select-address-title">Delivering To</h2>
      <div className="select-address-options">
        <RadioGroup
          value={defaultAddress}
          onChange={(address: any) => setDefaultAddress(address)}
        >
          {addresses.map(({ value, label }: any) => (
            <RadioCard value={value} label={label} key={value} />
          ))}
        </RadioGroup>
      </div>
      <button
        className="btn select-address-action-add d-flex"
        onClick={() => history.push("/add-address")}
      >
        <div className="plus-icon">
          <span>+</span>
        </div>
        <div className="title">Add NEW ADDRESS</div>
      </button>
      <button
        className="btn select-address-action-proceed"
        onClick={() => history.push("/select-payment-method")}
      >
        PROCEED
      </button>
    </div>
  );
};
