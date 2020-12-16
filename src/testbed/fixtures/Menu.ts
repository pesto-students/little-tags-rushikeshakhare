import { categories, userMenuOptions } from "../../mockData";

const fixture = {
  onClose: () => alert("Close Menu"),
  categories,
  userMenuOptions,
  onMenuItemClick: () => alert("Clicked On Menu Item"),
  onLogoutClick: () => alert("LOGGED OUT"),
};

export default fixture;
