import * as React from "react";
import "./categoryCard.scss";

export enum CategoryCardSizes {
  H = "size-h",
  H2 = "size-2h",
  V = "size-v",
}

interface ICategoryCardProps {
  size: CategoryCardSizes;
  background: any;
  title: string;
  onClick?: any;
}

export const CategoryCard = ({
  size,
  background,
  title,
  onClick,
}: ICategoryCardProps) => (
  <button
    className={`btn category-card ${size}`}
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
    }}
    onClick={() => onClick && onClick("/product-list")}
  >
    <div className="category-card-title d-flex">
      <h3>{title}</h3>
    </div>
  </button>
);
