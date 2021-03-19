import { updateCart } from "../store/actions";
import { StorageManager } from "../utilities";
import { USER_CART_STORAGE_KEY } from "../AppConfig";
class Cart {
  private static instance: Cart;

  constructor() {
    if (!StorageManager.get(USER_CART_STORAGE_KEY)) {
      this.setCart([]);
    }
  }

  public static getInstance(): Cart {
    if (!Cart.instance) Cart.instance = new Cart();
    return Cart.instance;
  }

  getCart = () => {
    return StorageManager.get(USER_CART_STORAGE_KEY);
  };

  setCart = (newCart: any[]) => {
    updateCart(newCart);
    return StorageManager.set(USER_CART_STORAGE_KEY, newCart);
  };

  isProductAlreadyInCart = (productID: number,size:any) => {
    const allCartProducts = this.getCart();
    const isProductAlreadyInCart = allCartProducts.find(
      (cartItem: any) => cartItem.product.id === productID && cartItem.size === size
    );
    return !!isProductAlreadyInCart;
  };

  updateItemInCart = (productID: number, quantity: number,size:any) => {
    let allCartProducts = this.getCart();
    const isProductAlreadyInCart = this.isProductAlreadyInCart(productID,size);

    if (isProductAlreadyInCart) {
      allCartProducts = allCartProducts.map((cartItem: any) => {
        if (cartItem.product.id === productID && cartItem.size === size) return { ...cartItem, quantity };
        else return cartItem;
      });
      this.setCart(allCartProducts);

      return { status: true, message: "Product Quantity Updated" };
    }

    return { status: false, message: "Product Does not exist in Cart" };
  };

  addItemToCart = (newCartItem: any) => {
    const allCartProducts = this.getCart();
    const isProductAlreadyInCart = this.isProductAlreadyInCart(
      newCartItem.product.id,
      newCartItem.size 
    );

    if (isProductAlreadyInCart)
      return { status: false, message: "Product Already Exist In Cart" };

    allCartProducts.push(newCartItem);
    this.setCart(allCartProducts);

    return { status: true, message: "Product Added to Cart" };
  };

  removeItemFromCart = (productID: number,size:any) => {
    let allCartProducts = this.getCart();
    const isProductAlreadyInCart = this.isProductAlreadyInCart(productID,size);

    if (isProductAlreadyInCart) {
      allCartProducts = allCartProducts.filter(
        (product: any) => !(product.product.id === productID && product.size === size)
      );

      this.setCart(allCartProducts);

      return { status: true, message: "Product Removed From Cart" };
    }

    return { status: false, message: "Product Does not exist in Cart" };
  };
}

const cartInstance = Cart.getInstance();

export { cartInstance as Cart };
