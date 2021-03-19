import * as React from "react";

interface IMenuListProps {
  options: any[];
  onListItemClick?: (route: string) => void;
}

export const MenuList = ({
  options,
  onListItemClick,
}: IMenuListProps): JSX.Element => {
  return (
    <ul className="list">
      {options.map(({ label, value }) => (
        <li key={`${value}${label}`}>
          <button
            type="button"
            className="btn list-item"
            onClick={() => onListItemClick && onListItemClick(value)}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};
