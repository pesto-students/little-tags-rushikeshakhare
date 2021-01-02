import { UPDATE_ORDER } from "./Types";
import { ActionDispatcher } from "../ActionDispatcher/ActionDispatcher";

export function updateOrder(order: any[]) {
  return ActionDispatcher.getInstance().dispatch({
    type: UPDATE_ORDER,
    order,
  });
}
