import React, { useEffect } from "react";
import { useState } from "react";
import { Card, RadioGroup, RadioInput } from "../../components";
import { Cart as CartModel } from "../../models/Cart";
import { connect } from "../../store";
import { showToast } from "../../utilities";
import { initPaymentRazorpay } from "../../services";
import { Order } from "../../Order";
import "./selectPaymentMethod.scss";

enum paymentMethods {
  razorpay = "Razor Pay",
  // vmu = "Visa / MasterCard / UPI",
  // paypal = "Pay Pal",
}

interface ISelectPaymentMethodProps {
  history: any;
  cart: any;
}

export const SelectPaymentMethod = connect((state: any) => ({
  cart: state.cart.cart,
}))(({ history, cart }: ISelectPaymentMethodProps) => {
  const [defaultPaymentMethod, setDefaultPaymentMethod]: any = useState(
    paymentMethods.razorpay
  );
  const [defaultAddress, setDefaultAddress] = useState<any>(null);

  const validateAtleastOneOrder = () => {
    showToast("Please add atleast one address to proceed");
    history.push("/add-address");
  };

  const validateAtleastOneProduct = () => {
    showToast("Please add atleast one product to cart");
    history.push("/product-list");
  };

  const getDefaultAddress = () => {
    if (!cart.length) return validateAtleastOneProduct();
    const allAddresses = localStorage && localStorage.getItem("ADDRESS");
    if (allAddresses) {
      const parsedAddresses = JSON.parse(localStorage.getItem("ADDRESS") || "");
      if (Array.isArray(parsedAddresses) && parsedAddresses.length) {
        let defaultAddress = parsedAddresses.find(
          (address: any) => address.isDefault
        );
        if (!defaultAddress) {
          defaultAddress = parsedAddresses[0];
        }
        setDefaultAddress(defaultAddress);
      } else return validateAtleastOneOrder();
    } else return validateAtleastOneOrder();
  };

  useEffect(() => {
    getDefaultAddress();
  }, []);

  const onPaymentMethodSelect = () => {
    const totalPrice = cart
      .map(({ product: { price }, quantity }: any) => price * quantity)
      .reduce((a: number, b: number) => a + b, 0);
    const description = "Order on " + Date.now().toLocaleString();
    initPaymentRazorpay(totalPrice, description, {
      name: `${defaultAddress.firstName} ${defaultAddress.lastName}`,
      email: defaultAddress.email,
      contact: defaultAddress.mobile,
    }).then(() => {
      Order.addItemsToPastOrders(cart);
      CartModel.setCart([]);
      history.push("/thank-you");
    });
  };

  return (
    <div className="select-payment-method">
      <h2 className="select-payment-method-title">Delivering To</h2>
      <div
        className="select-payment-method-address"
        onClick={() => history.push("/select-address")}
      >
        {defaultAddress && (
          <Card>
            <>
              <h3>
                {defaultAddress.firstName} {defaultAddress.lastName}
              </h3>
              <p>
                {defaultAddress.addressLine1}, {defaultAddress.addressLine2},{" "}
                {defaultAddress.pincode}, {defaultAddress.state}
              </p>
              <p>(+91) {defaultAddress.mobile}</p>
            </>
          </Card>
        )}
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
          <></>
        </RadioGroup>
      </div>
      <button
        className="btn select-payment-method-action"
        onClick={onPaymentMethodSelect}
      >
        PROCEED TO PAYMENT
      </button>
    </div>
  );
});
