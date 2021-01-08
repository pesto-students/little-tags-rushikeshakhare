import { updateOrder } from "../store/actions";
import { StorageManager } from "../utilities";
import { USER_ORDERS_STORAGE_KEY } from "../AppConfig";
class Order {
  private static instance: Order;

  constructor() {
    if (!StorageManager.get(USER_ORDERS_STORAGE_KEY)) {
      this.setOrder([]);
    }
  }

  public static getInstance(): Order {
    if (!Order.instance) Order.instance = new Order();
    return Order.instance;
  }

  getOrder = (): any[] => {
    return StorageManager.get(USER_ORDERS_STORAGE_KEY);
  };

  setOrder = (newOrder: any[]) => {
    updateOrder(newOrder);
    return StorageManager.set(USER_ORDERS_STORAGE_KEY, newOrder);
  };

  addItemsToPastOrders = (newOrderItems: any[]) => {
    const allOrderProducts = this.getOrder();

    newOrderItems = newOrderItems.map((item) => {
      item.product.date = Date.now();
      return item;
    });

    allOrderProducts.splice(0, 0, ...newOrderItems);
    this.setOrder(allOrderProducts);

    return { status: true, message: "Product Added to My Orders" };
  };
}

const orderInstance = Order.getInstance();

export { orderInstance as Order };
