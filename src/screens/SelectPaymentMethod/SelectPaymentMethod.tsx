import React, { useEffect, useState } from "react";
import { SELECT_PAYMENT_METHOD } from "../../AppConstants";
import { ROUTES, USER_ADDRESSES_STORAGE_KEY } from "../../AppConfig";
import { Card, RadioGroup, RadioInput } from "../../components";
import { Cart as CartModel } from "../../models/Cart";
import { connect } from "../../store";
import { showToast, StorageManager } from "../../utilities";
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

export const SelectPaymentMethod = connect()(
  ({ history, cart }: ISelectPaymentMethodProps) => {
    const [defaultPaymentMethod, setDefaultPaymentMethod]: any = useState(
      paymentMethods.razorpay
    );
    const [defaultAddress, setDefaultAddress] = useState<any>(null);

    const validateAtleastOneOrder = () => {
      showToast(SELECT_PAYMENT_METHOD.ADDRESS_VALIDATION_MESSAGE);
      history.push(ROUTES.ADD_ADDRESS);
    };

    const validateAtleastOneProduct = () => {
      showToast(SELECT_PAYMENT_METHOD.PRODUCT_VALIDATION_MESSAGE);
      history.push(ROUTES.PRODUCT_LIST);
    };

    const getDefaultAddress = () => {
      if (!cart.length) return validateAtleastOneProduct();
      const allAddresses = StorageManager.get(USER_ADDRESSES_STORAGE_KEY);
      if (allAddresses) {
        const parsedAddresses = StorageManager.get(USER_ADDRESSES_STORAGE_KEY);
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
      const finalPrice = Number(Number(totalPrice).toFixed(2));

      initPaymentRazorpay(finalPrice, description, {
        name: `${defaultAddress.firstName} ${defaultAddress.lastName}`,
        email: defaultAddress.email,
        contact: defaultAddress.mobile,
      }).then(() => {
        Order.addItemsToPastOrders(cart);
        CartModel.setCart([]);
        history.push(ROUTES.THANK_YOU);
      });
    };

    return (
      <div className="select-payment-method">
        <h2 className="select-payment-method-title">
          {SELECT_PAYMENT_METHOD.SCREEN_TITLE}
        </h2>
        <div
          className="select-payment-method-address"
          onClick={() => history.push(ROUTES.SELECT_ADDRESS)}
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
            {SELECT_PAYMENT_METHOD.PAYMENT_METHOD_TITLE}
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
          {SELECT_PAYMENT_METHOD.SUCCESS_BUTTON_TEXT}
        </button>
      </div>
    );
  }
);
