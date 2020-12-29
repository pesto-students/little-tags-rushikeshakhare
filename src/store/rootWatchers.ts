import categoriesWatcher from "./Categories/Watcher";
import productsWatcher from "./Products/Watcher";

export function* watchers(): any {
  yield productsWatcher();
  yield categoriesWatcher();
}
