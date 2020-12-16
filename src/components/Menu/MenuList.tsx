import * as React from "react";

interface IMenuListProps {
  options: any[];
  onListItemClick?: () => void;
}

export const MenuList = ({
  options,
  onListItemClick,
}: IMenuListProps): JSX.Element => {
  return (
    <ul className="list">
      {options.map(({ label, value }) => (
        <li key={value}>
          <button
            type="button"
            className="btn list-item"
            onClick={onListItemClick}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};
