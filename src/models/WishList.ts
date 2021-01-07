import { updateWishList } from "../store/actions";
import { StorageManager } from "../utilities";
import { USER_WISH_LIST_STORAGE_KEY } from "../AppConfig";

class WishList {

  private static instance: WishList;

  constructor() {
    if (!StorageManager.get(USER_WISH_LIST_STORAGE_KEY)) {
      this.setWishList([]);
    }
  }

  public static getInstance(): WishList {
    if (!WishList.instance) WishList.instance = new WishList();
    return WishList.instance;
  }

  getWishList = () => {
    return StorageManager.get(USER_WISH_LIST_STORAGE_KEY);
  };

  setWishList = (newWishList: any[]) => {
    updateWishList(newWishList);
    return StorageManager.set(USER_WISH_LIST_STORAGE_KEY, newWishList);
  };

  isProductAlreadyInWishList = (productID: number) => {
    const allWishListProducts = this.getWishList();
    const isProductAlreadyInWishList = allWishListProducts.find(
      (wishListItem: any) => wishListItem.product.id === productID
    );
    return !!isProductAlreadyInWishList;
  };

  updateItemInWishlList = (productID: number, quantity: number) => {
    let allWishListProducts = this.getWishList();
    const isProductAlreadyInWishList = this.isProductAlreadyInWishList(productID);

    if (isProductAlreadyInWishList) {
      allWishListProducts = allWishListProducts.map((wishListItem: any) => {
        if (wishListItem.product.id === productID) return { ...wishListItem, quantity };
        else return wishListItem;
      });
      this.setWishList(allWishListProducts);

      return { status: true, message: "Product Quantity Updated" };
    }

    return { status: false, message: "Product Does not exist in Wish List" };
  };

  addItemToWishList = (newWishListItem: any) => {
    const allWishListProducts = this.getWishList();
    const isProductAlreadyInWishList = this.isProductAlreadyInWishList(
      newWishListItem.product.id
    );

    if (isProductAlreadyInWishList)
      return { status: false, message: "Product Already Exist In Wish List" };

    allWishListProducts.push(newWishListItem);
    this.setWishList(allWishListProducts);

    return { status: true, message: "Product Added to Wish List" };
  };

  removeItemFromWishList = (productID: number) => {
    let allWishListProducts = this.getWishList();
    const isProductAlreadyInWishList = this.isProductAlreadyInWishList(productID);

    if (isProductAlreadyInWishList) {
      allWishListProducts = allWishListProducts.filter(
        (product: any) => product.product.id !== productID
      );

      this.setWishList(allWishListProducts);

      return { status: true, message: "Product Removed From Wish List" };
    }

    return { status: false, message: "Product Does not exist in Wish List" };
  };
}

const wishListInstance = WishList.getInstance();

export { wishListInstance as WishList };
