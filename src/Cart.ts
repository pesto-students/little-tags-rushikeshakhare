import { updateCart } from "./store/actions";

class Cart {
  private static instance: Cart;

  constructor() {
    if (!localStorage.getItem("userCart")) {
      this.setCart([]);
    }
  }

  public static getInstance(): Cart {
    if (!Cart.instance) Cart.instance = new Cart();
    return Cart.instance;
  }

  getCart = () => {
    return JSON.parse(localStorage.getItem("userCart") || "");
  };

  setCart = (newCart: any[]) => {
    updateCart(newCart);
    return localStorage.setItem("userCart", JSON.stringify(newCart));
  };

  isProductAlreadyInCart = (productID: number) => {
    const allCartProducts = this.getCart();
    const isProductAlreadyInCart = allCartProducts.find(
      (cartItem: any) => cartItem.product.id === productID
    );
    return !!isProductAlreadyInCart;
  };

  updateItemInCart = (productID: number, quantity: number) => {
    let allCartProducts = this.getCart();
    const isProductAlreadyInCart = this.isProductAlreadyInCart(productID);

    if (isProductAlreadyInCart) {
      allCartProducts = allCartProducts.map((cartItem: any) => {
        if (cartItem.product.id === productID) return { ...cartItem, quantity };
        else return cartItem;
      });
      this.setCart(allCartProducts);

      return { status: true, message: "Product Updated" };
    }

    return { status: false, message: "Product Does not exist in Cart" };
  };

  addItemToCart = (newCartItem: any) => {
    const allCartProducts = this.getCart();
    const isProductAlreadyInCart = this.isProductAlreadyInCart(
      newCartItem.product.id
    );

    if (isProductAlreadyInCart)
      return { status: false, message: "Product Already Exist In Cart" };

    allCartProducts.push(newCartItem);
    this.setCart(allCartProducts);

    return { status: true, message: "Product Added to Cart" };
  };

  removeItemFromCart = (productID: number) => {
    let allCartProducts = this.getCart();
    const isProductAlreadyInCart = this.isProductAlreadyInCart(productID);

    if (isProductAlreadyInCart) {
      allCartProducts = allCartProducts.filter(
        (product: any) => product.product.id !== productID
      );

      this.setCart(allCartProducts);

      return { status: true, message: "Product Removed From Cart" };
    }

    return { status: false, message: "Product Does not exist in Cart" };
  };
}

const cartInstance = Cart.getInstance();

export { cartInstance as Cart };
