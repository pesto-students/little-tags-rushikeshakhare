import { UPDATE_CART } from "./Types";
import { ActionDispatcher } from "../ActionDispatcher/ActionDispatcher";

export function updateCart(cart: any[]) {
  return ActionDispatcher.getInstance().dispatch({
    type: UPDATE_CART,
    cart,
  });
}
