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
}

export const CategoryCard = ({
  size,
  background,
  title,
}: ICategoryCardProps) => (
  <div
    className={`category-card ${size}`}
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
    }}
  >
    <div className="category-card-title d-flex">
      <h3>{title}</h3>
    </div>
  </div>
);
