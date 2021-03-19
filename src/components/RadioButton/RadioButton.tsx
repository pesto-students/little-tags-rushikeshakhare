import React from 'react';
import './radioButton.scss';

interface IRadioInputProps {
  label: any;
  checked?: boolean;
  value: string;
  onClick?: any;
}

export const RadioButton = ({ label, checked, onClick, value }: IRadioInputProps) => {
  return (
    <button
      className={`radio-btn${checked ? ' active' : ''}`}
      onClick={() => onClick && onClick(value)}
    >
      {label}
    </button>
  );
};
