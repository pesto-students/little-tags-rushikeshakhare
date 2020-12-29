import React from "react";
import { ProductCard, Pagination } from "../../components";
import { usePaginator } from "../../hooks/usePaginator";
import { withContainer } from "../../hocs/withContainer";
import { connect } from "../../store";
import "./ProductList.scss";

interface IProductListProps {
  history: any;
  productList: any;
}

export const ProductList = connect()(
  withContainer(({ history, productList }: IProductListProps) => {
    const { totalPages, currentRecords, setCurrentPage } = usePaginator(
      productList || [],
      5
    );

    return (
      <>
        <div className="product-list-container">
          <div className="title text-center">All Products</div>

          <div className="list">
            {currentRecords.map(
              ({ title, image, price, id }: any, index: number) => (
                <div
                  key={`${index}-${title}`}
                  className="list-item"
                  onClick={() => history.push(`/product-details/${id}`)}
                >
                  <ProductCard image={image} name={title} price={price} />
                </div>
              )
            )}
          </div>
        </div>

        <div className="pagination-container">
          <Pagination
            totalPages={totalPages}
            onPageSelected={(page: any) => setCurrentPage(page)}
          />
        </div>
      </>
    );
  })
);
