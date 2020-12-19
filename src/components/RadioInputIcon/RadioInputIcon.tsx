import * as React from "react";
import "./radioInputIcon.scss";

interface IRadioInputIconProps {
  checked: boolean;
}

export const RadioInputIcon = ({ checked }: IRadioInputIconProps) => (
  <div className="radio-icon d-flex">
    {checked && <div className="checked" />}
  </div>
);
