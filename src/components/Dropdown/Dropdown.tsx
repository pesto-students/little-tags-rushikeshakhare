import React, { useState } from "react";
import { DROPDOWN_ICON_PLACEHOLDER } from "../../AppConstants";
import upIcon from "../../assets/images/up.svg";
import downIcon from "../../assets/images/down.svg";
import "./dropdown.scss";

interface IDropdownProps {
  options: any[];
  value: string;
  onChange: any;
}

export const Dropdown = ({ options, value, onChange }: IDropdownProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="dropdown d-flex">
      <button
        className="btn dropdown-button input-control d-flex"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div className="dropdown-button-label">{value}</div>
        <div className="dropdown-button-icon d-flex">
          <img
            src={showDropdown ? upIcon : downIcon}
            alt={DROPDOWN_ICON_PLACEHOLDER}
          />
        </div>
      </button>
      {showDropdown && (
        <div className="dropdown-content">
          {options.map((option: string, index: number) => (
            <button
              className={`btn dropdown-content-option ${
                option === value ? "checked" : ""
              }`}
              key={index}
              onClick={() => {
                onChange(option);
                setShowDropdown(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
