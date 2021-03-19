import { UPDATE_ORDER } from "./Types";
import { ActionDispatcher } from "../ActionDispatcher/ActionDispatcher";

export function updateOrder(orders: any[]) {
  return ActionDispatcher.getInstance().dispatch({
    type: UPDATE_ORDER,
    orders,
  });
}
