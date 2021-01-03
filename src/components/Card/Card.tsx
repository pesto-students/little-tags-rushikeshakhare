import * as React from "react";
import "./card.scss";

interface ICardProps {
  children: JSX.Element;
}

export const Card = ({ children }: ICardProps) => (
  <div className="card">{children}</div>
);
