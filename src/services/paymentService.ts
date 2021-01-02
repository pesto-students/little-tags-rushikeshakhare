import NetworkManager from "../utilities/NetworkManager/NetworkManager";
import logo from "../assets/images/logo.png";

declare var window: any;

const loadScript = (src: any) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export function initPaymentRazorpay(
  totalAmount: number,
  description: string,
  userData: any
) {
  return new Promise(async (resolve, reject) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      reject("Razorpay SDK failed to load. Are you online?");
    }

    // creating a new order
    const result: any = await NetworkManager.post(
      "https://glacial-hollows-06272.herokuapp.com/payment",
      { amount: totalAmount * 100, receipt: "receipt-" + Date.now().toString() }
    );

    if (!result) {
      alert("Server error. Are you online?");
      return Promise.reject();
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: process.env.REACT_APP_RAZORPAY_API_KEY, // Razorpay key
      amount,
      currency,
      name: "Little Tags",
      description,
      image: { logo },
      order_id,
      handler: async (response: any) => {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        // Backend call in here for DB success entry
        // const result = await NetworkManager.post("http://localhost:4200/payment/success", data);

        console.log(response);
        resolve(response);
      },
      prefill: userData,
      notes: {
        address: "Little Tags Corporate Office",
      },
      theme: {
        // color: "#61dafb",
        color: "#FB8195",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  });
}
