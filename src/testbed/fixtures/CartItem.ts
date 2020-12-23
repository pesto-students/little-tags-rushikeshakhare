import backgroundImage from "../../assets/images/product-1.jpg";

const fixture = {
  image: backgroundImage,
  name: 'Some Product',
  price: '1200',
  onQuantityChange: (value: number) => {console.log(value)},
};

export default fixture;
