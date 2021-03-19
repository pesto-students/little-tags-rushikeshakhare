import { UPDATE_WISH_LIST } from "./Types";
import { ActionDispatcher } from "../ActionDispatcher/ActionDispatcher";

export function updateWishList(wishList: any[]) {
  return ActionDispatcher.getInstance().dispatch({
    type: UPDATE_WISH_LIST,
    wishList,
  });
}
