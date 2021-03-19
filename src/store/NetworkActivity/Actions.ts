import { NETWORK_ACTIVITY_STARTED, NETWORK_ACTIVITY_COMPLETETD } from "./Types";
import { ActionDispatcher } from "../ActionDispatcher/ActionDispatcher";

export function startActivity(apiUrl: string) {
  return ActionDispatcher.getInstance().dispatch({
    type: NETWORK_ACTIVITY_STARTED,
    apiUrl,
  });
}

export function completeActivity(apiUrl: any) {
  return ActionDispatcher.getInstance().dispatch({
    type: NETWORK_ACTIVITY_COMPLETETD,
    apiUrl,
  });
}
