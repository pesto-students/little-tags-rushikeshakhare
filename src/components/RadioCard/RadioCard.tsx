import * as React from "react";
import { RadioInputIcon } from "../RadioInputIcon";
import "./radioCard.scss";

interface IRadioInputProps {
  label: JSX.Element;
  checked?: boolean;
  value: string;
  onClick?: any;
}

export const RadioCard = ({
  label,
  checked,
  onClick,
  value,
}: IRadioInputProps) => {
  return (
    <button
      className="btn radio-card d-flex"
      onClick={() => onClick && onClick(value)}
    >
      <RadioInputIcon checked={!!checked} />
      <div className="radio-card-label">{label}</div>
    </button>
  );
};
