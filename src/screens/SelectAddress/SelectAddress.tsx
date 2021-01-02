import * as React from "react";
import { RadioCard, RadioGroup } from "../../components";
import { connect } from "../../store";
import { useAddress } from "../../hooks/useAddress";
import { IAddress } from "../../models/address";
import "./selectAddress.scss";

interface ISelectPaymentMethodProps {
  history: any;
}

export const SelectAddress = connect()((props: ISelectPaymentMethodProps) => {
  const { history } = props;
  console.log(props);
  const { addresses, setDefaultAddress } = useAddress();

  const addressList = addresses.map((address: IAddress) => {
    return {
      label: (
        <>
          <h3>
            {address.firstName} {address.lastName}
          </h3>
          <p>
            {address.addressLine1}, {address.addressLine2}, {address.state}{" "}
            {address.pincode}, India
          </p>
          <p>(+91) {address.mobile}</p>
        </>
      ),
      value: address.id,
    };
  });

  const defaultAddress = addresses.find(
    (address: IAddress) => address.isDefault === true
  );

  return (
    <div className="select-address">
      <h2 className="select-address-title">Delivering To</h2>
      <div className="select-address-options">
        <RadioGroup
          value={defaultAddress?.id}
          onChange={(addressId: string) => setDefaultAddress(addressId)}
        >
          {addressList.map(({ value, label }: any) => (
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
});
