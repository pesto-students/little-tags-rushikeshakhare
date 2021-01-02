import { updateOrder } from "./store/actions";

class Order {
  private static instance: Order;

  constructor() {
    if (!localStorage.getItem("userOrder")) {
      this.setOrder([]);
    }
  }

  public static getInstance(): Order {
    if (!Order.instance) Order.instance = new Order();
    return Order.instance;
  }

  getOrder = (): any[] => {
    return JSON.parse(localStorage.getItem("userOrder") || "");
  };

  setOrder = (newOrder: any[]) => {
    updateOrder(newOrder);
    return localStorage.setItem("userOrder", JSON.stringify(newOrder));
  };

  
  addItemsToPastOrders = (newOrderItems: any[]) => {
    const allOrderProducts = this.getOrder();

    newOrderItems = newOrderItems.map(item => {
        item.product.date = Date.now();
        return item;
    })
   
    allOrderProducts.splice(0, 0, ...newOrderItems);
    this.setOrder(allOrderProducts);

    return { status: true, message: "Product Added to My Orders" };
  };

}

const orderInstance = Order.getInstance();

export { orderInstance as Order };
