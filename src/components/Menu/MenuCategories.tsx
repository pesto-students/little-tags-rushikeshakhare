import * as React from "react";
import { MenuList } from "./MenuList";

interface IMenuCategoriesProps {
  categories: any[];
  onMenuClick: () => void;
}

export const MenuCategories = ({
  categories,
  onMenuClick,
}: IMenuCategoriesProps): JSX.Element => {
  return (
    <div className="menu-categories">
      <div className="menu-categories-title">
        <h3>CATEGORIES</h3>
      </div>
      <MenuList options={categories} onListItemClick={onMenuClick} />
    </div>
  );
};
