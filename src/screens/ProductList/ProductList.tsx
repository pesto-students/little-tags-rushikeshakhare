import React from "react";
import { ProductCard, Pagination } from "../../components";
import { allProducts } from "../../mockData";
import { withContainer } from "../../hocs/withContainer";
import "./ProductList.scss";

interface IProductListProps {
  history: any;
}

export const ProductList = withContainer(({ history }: IProductListProps) => {
  return (
    <>
      <div className="product-list-container">
        <div className="title text-center">All Shirts</div>

        <div className="list">
          {allProducts.map((product, index) => (
            <div
              key={`${index}-${product.name}`}
              className="list-item"
              onClick={() => history.push("/product-details")}
            >
              <ProductCard
                image={product.image}
                name={product.name}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pagination-container">
        <Pagination
          totalPages={20}
          onPageSelected={() => console.log("Page")}
        />
      </div>
    </>
  );
});
