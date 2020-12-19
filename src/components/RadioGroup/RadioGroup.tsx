import * as React from "react";
import { useEffect, useState } from "react";

interface IRadioGroupProps {
  children: JSX.Element[];
  value: any;
  onChange: any;
}

export const RadioGroup = ({ children, value, onChange }: IRadioGroupProps) => {
  const [radioValue, setRadioValue] = useState(null);

  const onRadioClick = (newRadioValue: any) => {
    if (onChange) onChange(newRadioValue);
    setRadioValue(newRadioValue);
  };

  useEffect(() => {
    onRadioClick(value);
  }, [value]);

  return (
    <>
      {children.map((radioChild: JSX.Element, index: number) => {
        return React.cloneElement(radioChild, {
          checked: radioValue === radioChild.props.value,
          onClick: onRadioClick,
          key: index,
        });
      })}
    </>
  );
};
