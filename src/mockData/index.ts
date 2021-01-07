import imgProduct1 from "../assets/images/product-4.jpg";
import imgProduct2 from "../assets/images/product-1.jpg";
import imgProduct3 from "../assets/images/product-2.jpg";
import imgProduct4 from "../assets/images/product-3.jpg";
import imgProduct5 from "../assets/images/product-5.jpg";

export const categories = [
  {
    label: "Accessories",
    value: "/product-list",
  },
  {
    label: "Shirts",
    value: "/product-list",
  },
  {
    label: "Pants",
    value: "/product-list",
  },
  {
    label: "Jackets",
    value: "/product-list",
  },
];

export const userMenuOptions = [
  {
    label: "Past Orders",
    value: "/past-orders",
  },
  {
    label: "Add Address",
    value: "/add-address",
  },
  {
    label: "Wish List",
    value: "/wish-list",
  },
];

export const sizeList = [
  {
    name: "XS",
    disabled: false,
  },
  {
    name: "S",
    disabled: false,
  },
  {
    name: "M",
    disabled: false,
  },
  {
    name: "L",
    disabled: true,
  },
  {
    name: "XL",
    disabled: false,
  },
];

export const allProducts = [
  {
    name: "Faux Leather Jacket",
    price: "1200.00",
    image: imgProduct1,
  },
  {
    name: "Red BN Cap",
    price: "400.00",
    image: imgProduct2,
  },
  {
    name: "Hello Worl",
    price: "4000.00",
    image: imgProduct3,
  },
  {
    name: "Poorani Jeans",
    price: "500.00",
    image: imgProduct4,
  },
  {
    name: "T-Shirt",
    price: "800.00",
    image: imgProduct5,
  },
];

export { getData } from "./searchData";
const states = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Uttar Pradesh",
  "Tamil Nadu",
  "West Bengal",
  "Telangana",
  "Tripura",
  "Uttarakhand",
];
export { states };

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
