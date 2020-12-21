import * as React from "react";
import { RadioInputIcon } from "../RadioInputIcon";
import "./radioInput.scss";

interface IRadioInputProps {
  label: any;
  checked?: boolean;
  value: string;
  onClick?: any;
}

export const RadioInput = ({
  label,
  checked,
  onClick,
  value,
}: IRadioInputProps) => {
  return (
    <button
      className="btn radio-input d-flex"
      onClick={() => onClick && onClick(value)}
    >
      <RadioInputIcon checked={!!checked} />
      <div className="radio-input-label">{label}</div>
    </button>
  );
};
