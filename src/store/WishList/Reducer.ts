import { UPDATE_WISH_LIST } from "./Types";
import { StorageManager } from "../../utilities";
import { USER_WISH_LIST_STORAGE_KEY } from "../../AppConfig";

interface ICategoriesState {
  wishList: any;
}

const initialState = {
  wishList: StorageManager.get(USER_WISH_LIST_STORAGE_KEY) || [],
};

interface ICategoriesReducerAction {
  type: typeof UPDATE_WISH_LIST;
  wishList?: any[];
}

export default function reducer(
  state: ICategoriesState = initialState,
  { type, wishList }: ICategoriesReducerAction
): ICategoriesState {
  switch (type) {
    case UPDATE_WISH_LIST:
      return {
        ...state,
        wishList,
      };
    default:
      return { ...state };
  }
}
