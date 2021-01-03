import React from "react";
import { CategoryCard, CategoryCardSizes } from "../../components";
import { HOME } from "../../AppConstants";
import { ROUTES } from "../../AppConfig";
import tshirtImage from "../../assets/images/tshirts.jpg";
import jeans from "../../assets/images/jeans.jpg";
import backpack from "../../assets/images/backpack.png";
import necklace from "../../assets/images/necklace.jpg";

export const Categories = ({ navigateToCategory }: any) => {
  const navigateToProductList = () => {
    navigateToCategory(ROUTES.PRODUCT_LIST);
  };

  return (
    <div className="home-screen-categories">
      <div className="home-screen-categories-title">
        <h1>{HOME.CATEGORIES_TTTLE}</h1>
      </div>
      <div className="home-screen-categories-grid">
        <div className="horizontal-categories">
          <CategoryCard
            size={CategoryCardSizes.H}
            background={tshirtImage}
            title="T Shirt"
            onClick={navigateToProductList}
          />
          <CategoryCard
            size={CategoryCardSizes.H2}
            background={jeans}
            title="Jeans"
            onClick={navigateToProductList}
          />
        </div>
        <div className="vertical-categories d-flex">
          <CategoryCard
            size={CategoryCardSizes.V}
            background={backpack}
            title="Backpack"
            onClick={navigateToProductList}
          />
          <CategoryCard
            size={CategoryCardSizes.V}
            background={necklace}
            title="Charm Necklace"
            onClick={navigateToProductList}
          />
        </div>
      </div>
    </div>
  );
};
