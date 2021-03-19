import * as React from "react";
import { MenuList } from "./MenuList";
import { MENU_CATEGORIES_TITLE } from "../../AppConstants";
interface IMenuCategoriesProps {
  categories: any[];
  onMenuClick: (route: string) => void;
}

export const MenuCategories = ({
  categories,
  onMenuClick,
}: IMenuCategoriesProps): JSX.Element => {
  return (
    <div className="menu-categories">
      <div className="menu-categories-title">
        <h3>{MENU_CATEGORIES_TITLE}</h3>
      </div>
      <MenuList options={categories} onListItemClick={onMenuClick} />
    </div>
  );
};
